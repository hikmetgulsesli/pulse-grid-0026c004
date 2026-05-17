import { useCallback, useEffect, useMemo, useReducer } from 'react';
import type { AppActions, GameSettings, GameState, Position, ScreenName, Tile } from '../types/domain';
import { readJson, readNumber, storageKeys, writeJson, writeNumber } from '../utils/storage';

type GameAction =
  | { type: 'start' }
  | { type: 'resume' }
  | { type: 'pause' }
  | { type: 'reset' }
  | { type: 'rotate'; row: number; col: number }
  | { type: 'moveSelection'; rowDelta: number; colDelta: number }
  | { type: 'screen'; screen: ScreenName }
  | { type: 'settings'; settings: Partial<GameSettings> }
  | { type: 'tick' };

const defaultSettings: GameSettings = {
  music: true,
  soundEffects: true,
  screenShake: false,
  simulationSpeed: 75,
  difficulty: 'normal',
  gridSize: 5,
};

const solutionRotations = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
];

const tileShapes: Tile['shape'][][] = [
  ['source', 'corner', 'line', 'corner', 'target'],
  ['empty', 'empty', 'line', 'empty', 'empty'],
  ['empty', 'empty', 'splitter', 'empty', 'empty'],
  ['empty', 'empty', 'line', 'empty', 'empty'],
  ['empty', 'empty', 'target', 'empty', 'empty'],
];

function createGrid(scrambled = true): Tile[][] {
  return tileShapes.map((row, rowIndex) =>
    row.map((shape, colIndex) => {
      const solvedRotation = solutionRotations[rowIndex][colIndex];
      const offset = scrambled && shape !== 'empty' && shape !== 'source' ? (rowIndex + colIndex) % 3 : 0;

      return {
        id: `${rowIndex}-${colIndex}`,
        row: rowIndex,
        col: colIndex,
        shape,
        rotation: (solvedRotation + offset) % 4,
        powered: false,
        locked: shape === 'source' || shape === 'empty',
      };
    }),
  );
}

function isSolvedGrid(grid: Tile[][]) {
  return grid.every((row, rowIndex) =>
    row.every((tile, colIndex) => tile.shape === 'empty' || tile.rotation === solutionRotations[rowIndex][colIndex]),
  );
}

function markPower(grid: Tile[][]): Tile[][] {
  const solved = isSolvedGrid(grid);
  return grid.map((row) =>
    row.map((tile) => ({
      ...tile,
      powered: tile.shape === 'source' || (solved && tile.shape !== 'empty'),
    })),
  );
}

function calculateScore(moves: number, elapsedSeconds: number) {
  return Math.max(100, 1200 - moves * 20 - elapsedSeconds * 5);
}

function createInitialState(): GameState {
  return {
    screen: 'menu',
    level: 1,
    score: 0,
    moves: 0,
    elapsedSeconds: 0,
    isRunning: false,
    isPaused: false,
    isSolved: false,
    highScore: readNumber(storageKeys.highScore, 0),
    settings: readJson(storageKeys.settings, defaultSettings),
    selected: { row: 0, col: 0 },
    grid: markPower(createGrid(true)),
  };
}

function clampSelection({ row, col }: Position, rowDelta: number, colDelta: number): Position {
  return {
    row: Math.max(0, Math.min(4, row + rowDelta)),
    col: Math.max(0, Math.min(4, col + colDelta)),
  };
}

function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        screen: 'game',
        score: 0,
        moves: 0,
        elapsedSeconds: 0,
        isRunning: true,
        isPaused: false,
        isSolved: false,
        selected: { row: 0, col: 0 },
        grid: markPower(createGrid(true)),
      };
    case 'resume':
      return { ...state, screen: 'game', isRunning: true, isPaused: false };
    case 'pause':
      return { ...state, isRunning: false, isPaused: true };
    case 'reset':
      return reducer(state, { type: 'start' });
    case 'rotate': {
      if (state.isSolved || state.isPaused) return state;

      const grid = state.grid.map((row, rowIndex) =>
        row.map((tile, colIndex) => {
          if (rowIndex !== action.row || colIndex !== action.col || tile.locked) return tile;
          return { ...tile, rotation: (tile.rotation + 1) % 4 };
        }),
      );
      const poweredGrid = markPower(grid);
      const isSolved = isSolvedGrid(poweredGrid);
      const moves = state.moves + 1;
      const score = isSolved ? calculateScore(moves, state.elapsedSeconds) : state.score;

      return {
        ...state,
        grid: poweredGrid,
        moves,
        score,
        highScore: Math.max(state.highScore, score),
        isSolved,
        isRunning: !isSolved,
        screen: isSolved ? 'gameOver' : state.screen,
      };
    }
    case 'moveSelection':
      return { ...state, selected: clampSelection(state.selected, action.rowDelta, action.colDelta) };
    case 'screen':
      return { ...state, screen: action.screen, isRunning: action.screen === 'game' && !state.isPaused && !state.isSolved };
    case 'settings':
      return { ...state, settings: { ...state.settings, ...action.settings } };
    case 'tick':
      return state.isRunning && !state.isPaused && !state.isSolved
        ? { ...state, elapsedSeconds: state.elapsedSeconds + 1 }
        : state;
    default:
      return state;
  }
}

export function useAppState() {
  const [state, dispatch] = useReducer(reducer, undefined, createInitialState);

  useEffect(() => {
    if (state.highScore > 0) writeNumber(storageKeys.highScore, state.highScore);
  }, [state.highScore]);

  useEffect(() => {
    writeJson(storageKeys.settings, state.settings);
  }, [state.settings]);

  useEffect(() => {
    if (!state.isRunning || state.isPaused || state.isSolved) return undefined;

    const timer = window.setInterval(() => dispatch({ type: 'tick' }), 1000);
    return () => window.clearInterval(timer);
  }, [state.isPaused, state.isRunning, state.isSolved]);

  const actions: AppActions = useMemo(
    () => ({
      startGame: () => dispatch({ type: 'start' }),
      resumeGame: () => dispatch({ type: 'resume' }),
      pauseGame: () => dispatch({ type: 'pause' }),
      resetLevel: () => dispatch({ type: 'reset' }),
      rotateTile: (row, col) => dispatch({ type: 'rotate', row, col }),
      moveSelection: (rowDelta, colDelta) => dispatch({ type: 'moveSelection', rowDelta, colDelta }),
      showHelp: () => dispatch({ type: 'screen', screen: 'help' }),
      showSettings: () => dispatch({ type: 'screen', screen: 'settings' }),
      applySettings: (settings) => dispatch({ type: 'settings', settings }),
      backToMenu: () => dispatch({ type: 'screen', screen: 'menu' }),
    }),
    [],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (state.screen !== 'game') return;

      if (event.key === 'ArrowUp') actions.moveSelection(-1, 0);
      if (event.key === 'ArrowDown') actions.moveSelection(1, 0);
      if (event.key === 'ArrowLeft') actions.moveSelection(0, -1);
      if (event.key === 'ArrowRight') actions.moveSelection(0, 1);
      if (event.key.toLowerCase() === 'w') actions.moveSelection(-1, 0);
      if (event.key.toLowerCase() === 's') actions.moveSelection(1, 0);
      if (event.key.toLowerCase() === 'a') actions.moveSelection(0, -1);
      if (event.key.toLowerCase() === 'd') actions.moveSelection(0, 1);
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        actions.rotateTile(state.selected.row, state.selected.col);
      }
      if (event.key.toLowerCase() === 'p') actions.pauseGame();
      if (event.key.toLowerCase() === 'r') actions.resetLevel();
    },
    [actions, state.screen, state.selected.col, state.selected.row],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { state, actions };
}
