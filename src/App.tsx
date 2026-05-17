import { AppProvider, useAppContext } from './contexts/AppContext';
import { GameBoard } from './screens/GameBoard';
import './App.css';

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}

function PulseGridApp() {
  const { state, actions } = useAppContext();

  return (
    <main className="pulse-shell" aria-label="Pulse Grid game">
      <section className="pulse-panel pulse-hero">
        <div>
          <p className="eyebrow">Signal routing puzzle</p>
          <h1>Pulse Grid</h1>
        </div>
        <div className="score-strip" aria-label="Game status">
          <span>Score {state.score}</span>
          <span>Moves {state.moves}</span>
          <span>Time {formatTime(state.elapsedSeconds)}</span>
          <span>Best {state.highScore}</span>
        </div>
      </section>

      {state.screen === 'menu' && (
        <section className="pulse-panel menu-panel" aria-label="Main menu">
          <button type="button" className="primary-action" onClick={actions.startGame}>
            Start Game
          </button>
          <button type="button" onClick={actions.resumeGame} disabled={!state.moves}>
            Resume Session
          </button>
          <button type="button" onClick={actions.showHelp}>
            Tutorial
          </button>
          <button type="button" onClick={actions.showSettings}>
            Settings
          </button>
        </section>
      )}

      {state.screen === 'game' && (
        <GameBoard
          actions={{
            'pause-1': actions.pauseGame,
            'reset-2': actions.resetLevel,
            'button-3-3': actions.pauseGame,
            'button-4-4': actions.resetLevel,
            'game-1': actions.resumeGame,
            'levels-2': actions.showSettings,
            'status-3': actions.showHelp,
            'menu-4': actions.backToMenu,
          }}
        />
      )}

      {state.isPaused && state.screen === 'game' && (
        <section className="pulse-panel menu-panel" aria-label="Paused">
          <h2>Paused</h2>
          <button type="button" className="primary-action" onClick={actions.resumeGame}>
            Resume
          </button>
          <button type="button" onClick={actions.resetLevel}>
            Restart Level
          </button>
          <button type="button" onClick={actions.backToMenu}>
            Quit to Menu
          </button>
        </section>
      )}

      {state.screen === 'help' && (
        <section className="pulse-panel copy-panel" aria-label="Controls help">
          <h2>Controls</h2>
          <p>Click or tap a tile to rotate it. Keyboard players can use arrow keys plus Enter or Space.</p>
          <button type="button" className="primary-action" onClick={actions.backToMenu}>
            Back to Menu
          </button>
        </section>
      )}

      {state.screen === 'settings' && (
        <section className="pulse-panel copy-panel" aria-label="Game options">
          <h2>Options</h2>
          <label className="setting-row">
            <span>Sound</span>
            <input
              type="checkbox"
              checked={state.settings.sound}
              onChange={(event) => actions.applySettings({ sound: event.currentTarget.checked })}
            />
          </label>
          <button type="button" className="primary-action" onClick={actions.backToMenu}>
            Apply Changes
          </button>
        </section>
      )}

      {state.screen === 'gameOver' && (
        <section className="pulse-panel copy-panel" aria-label="Game over">
          <h2>Grid solved</h2>
          <p>
            Score {state.score} in {state.moves} moves and {formatTime(state.elapsedSeconds)}.
          </p>
          <button type="button" className="primary-action" onClick={actions.startGame}>
            Try Again
          </button>
          <button type="button" onClick={actions.backToMenu}>
            Main Menu
          </button>
        </section>
      )}
    </main>
  );
}

export default function App() {
  return (
    <AppProvider>
      <PulseGridApp />
    </AppProvider>
  );
}
