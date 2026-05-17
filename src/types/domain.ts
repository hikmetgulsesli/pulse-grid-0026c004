export type ScreenName = 'menu' | 'game' | 'help' | 'settings' | 'gameOver';

export type TileShape = 'empty' | 'source' | 'target' | 'line' | 'corner' | 'splitter';

export type Position = {
  row: number;
  col: number;
};

export type Tile = Position & {
  id: string;
  shape: TileShape;
  rotation: number;
  powered: boolean;
  locked?: boolean;
};

export type GameSettings = {
  sound: boolean;
  gridSize: number;
};

export type GameState = {
  screen: ScreenName;
  level: number;
  score: number;
  moves: number;
  elapsedSeconds: number;
  isRunning: boolean;
  isPaused: boolean;
  isSolved: boolean;
  highScore: number;
  settings: GameSettings;
  selected: Position;
  grid: Tile[][];
};

export type AppActions = {
  startGame: () => void;
  resumeGame: () => void;
  pauseGame: () => void;
  resetLevel: () => void;
  rotateTile: (row: number, col: number) => void;
  moveSelection: (rowDelta: number, colDelta: number) => void;
  showHelp: () => void;
  showSettings: () => void;
  applySettings: (settings: Partial<GameSettings>) => void;
  backToMenu: () => void;
};

export type AppBridge = {
  state: GameState;
  actions: AppActions;
};
