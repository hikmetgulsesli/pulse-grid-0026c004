import { AppProvider, useAppContext } from './contexts/AppContext';
import { ControlsHelp } from './screens/ControlsHelp';
import { GameOptions } from './screens/GameOptions';
import { useEffect, useState } from 'react';
import './App.css';

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}

function TileGlyph({ shape, rotation }: { shape: string; rotation: number }) {
  const glyphs: Record<string, string> = {
    empty: '',
    source: 'S',
    target: 'T',
    line: 'I',
    corner: 'L',
    splitter: '+',
  };

  return (
    <span className="tile-glyph" style={{ transform: `rotate(${rotation * 90}deg)` }}>
      {glyphs[shape]}
    </span>
  );
}

function PulseGridApp() {
  const { state, actions } = useAppContext();
  const [draftSettings, setDraftSettings] = useState(state.settings);

  useEffect(() => {
    if (state.screen === 'settings') {
      setDraftSettings(state.settings);
    }
  }, [state.screen, state.settings]);

  if (state.screen === 'help') {
    return (
      <div className="pulse-shell stitch-shell" aria-label="Pulse Grid controls help">
        <ControlsHelp actions={{ 'back-to-menu-1': actions.backToMenu }} />
      </div>
    );
  }

  if (state.screen === 'settings') {
    return (
      <div className="pulse-shell stitch-shell" aria-label="Pulse Grid game options">
        <GameOptions
          settings={draftSettings}
          onSettingsChange={setDraftSettings}
          actions={{
            'cancel-1': actions.backToMenu,
            'apply-changes-2': () => {
              actions.applySettings(draftSettings);
              actions.backToMenu();
            },
          }}
        />
      </div>
    );
  }

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
        <section className="game-layout" aria-label="Game board">
          <div className="pulse-panel board-panel">
            <div className="board-toolbar">
              <button type="button" onClick={actions.pauseGame}>
                Pause
              </button>
              <button type="button" onClick={actions.resetLevel}>
                Reset
              </button>
            </div>
            <div className="grid-board" role="grid" aria-label="Pulse routing grid">
              {state.grid.map((row) =>
                row.map((tile) => {
                  const selected = state.selected.row === tile.row && state.selected.col === tile.col;
                  return (
                    <button
                      type="button"
                      role="gridcell"
                      key={tile.id}
                      className={`grid-tile ${tile.powered ? 'powered' : ''} ${selected ? 'selected' : ''}`}
                      disabled={tile.locked}
                      aria-label={`${tile.shape} tile row ${tile.row + 1} column ${tile.col + 1}`}
                      aria-pressed={tile.powered}
                      onClick={() => actions.rotateTile(tile.row, tile.col)}
                    >
                      <TileGlyph shape={tile.shape} rotation={tile.rotation} />
                    </button>
                  );
                }),
              )}
            </div>
          </div>
          <aside className="pulse-panel status-panel" aria-label="Puzzle status">
            <h2>Route the pulse</h2>
            <p>Rotate every active tile until source, splitters, and targets form a powered network.</p>
            <p>Use arrow keys to move focus, Enter or Space to rotate, and P to pause.</p>
          </aside>
        </section>
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
