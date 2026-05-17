import { AppProvider, useAppContext } from './contexts/AppContext';
import {
  ControlsHelp,
  GameBoard,
  GameOptions,
  GameOver,
  MainMenu,
  PauseOverlay,
  type ControlsHelpActionId,
  type GameBoardActionId,
  type GameOptionsActionId,
  type GameOverActionId,
  type MainMenuActionId,
  type PauseOverlayActionId,
} from './screens';
import './App.css';

function PulseGridApp() {
  const { actions, state } = useAppContext();

  const mainMenuActions = {
    'button-1-1': actions.startGame,
    'button-2-2': actions.resumeGame,
    'button-3-3': actions.showHelp,
    'start-game-4': actions.startGame,
    'resume-session-5': actions.resumeGame,
    'tutorial-6': actions.showHelp,
    'exit-7': actions.backToMenu,
    'game-8': actions.resumeGame,
    'levels-9': actions.showHelp,
    'status-10': actions.showSettings,
    'menu-11': actions.backToMenu,
  } satisfies Partial<Record<MainMenuActionId, () => void>>;

  const gameBoardActions = {
    'pause-1': actions.pauseGame,
    'reset-2': actions.resetLevel,
    'button-3-3': actions.pauseGame,
    'button-4-4': actions.resetLevel,
    'game-1': actions.resumeGame,
    'levels-2': actions.showHelp,
    'status-3': actions.showSettings,
    'menu-4': actions.backToMenu,
  } satisfies Partial<Record<GameBoardActionId, () => void>>;

  const pauseActions = {
    'button-1-1': actions.showSettings,
    'button-2-2': actions.resumeGame,
    'game-3': actions.resumeGame,
    'levels-4': actions.showHelp,
    'status-5': actions.showSettings,
    'menu-6': actions.backToMenu,
    'resume-7': actions.resumeGame,
    'restart-level-8': actions.resetLevel,
    'options-9': actions.showSettings,
    'quit-to-menu-10': actions.backToMenu,
  } satisfies Partial<Record<PauseOverlayActionId, () => void>>;

  const controlsHelpActions = {
    'back-to-menu-1': actions.backToMenu,
  } satisfies Partial<Record<ControlsHelpActionId, () => void>>;

  const gameOptionsActions = {
    'cancel-1': actions.backToMenu,
    'apply-changes-2': () => {
      actions.applySettings(state.settings);
      actions.backToMenu();
    },
  } satisfies Partial<Record<GameOptionsActionId, () => void>>;

  const gameOverActions = {
    'try-again-1': actions.startGame,
    'main-menu-2': actions.backToMenu,
  } satisfies Partial<Record<GameOverActionId, () => void>>;

  let screen = <MainMenu actions={mainMenuActions} />;

  if (state.screen === 'game') {
    screen = state.isPaused ? <PauseOverlay actions={pauseActions} /> : <GameBoard actions={gameBoardActions} />;
  }

  if (state.screen === 'help') {
    screen = <ControlsHelp actions={controlsHelpActions} />;
  }

  if (state.screen === 'settings') {
    screen = <GameOptions actions={gameOptionsActions} />;
  }

  if (state.screen === 'gameOver') {
    screen = <GameOver actions={gameOverActions} />;
  }

  return <div className="generated-screen-surface">{screen}</div>;
}

export default function App() {
  return (
    <AppProvider>
      <PulseGridApp />
    </AppProvider>
  );
}
