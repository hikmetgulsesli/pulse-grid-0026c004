// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home } from "lucide-react";


export type GameOverActionId = "try-again-1" | "main-menu-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Subtle Grid Background Overlay for Theme Context */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage: "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)", backgroundSize: "32px 32px"}}></div>
      {/* Central Glow Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
      {/* Main Results Glass Panel */}
      <main className="w-full max-w-2xl bg-surface-container/80 backdrop-blur-md border border-outline-variant p-8 relative z-10">
      {/* Bracket Accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary"></div>
      {/* Header */}
      <header className="text-center mb-8">
      <p className="font-label-sm text-label-sm text-secondary tracking-widest mb-2 uppercase">Sequence Terminated</p>
      <h1 className="font-headline-lg text-headline-lg text-primary drop-shadow-[0_0_12px_rgba(76,215,246,0.6)] uppercase">Pulse Complete</h1>
      </header>
      {/* Bento Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {/* Final Score (Full Width) */}
      <div className="md:col-span-2 bg-surface-container-high border border-outline-variant p-6 flex flex-col items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="font-label-sm text-label-sm text-on-surface-variant mb-2">Final Score</span>
      <span className="font-data-display text-data-display text-4xl text-on-surface tracking-wider drop-shadow-[0_0_8px_rgba(213,227,253,0.3)]">15,800</span>
      </div>
      {/* Time Elapsed */}
      <div className="bg-surface-container-high border border-outline-variant p-4 flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-2">
      <Circle className="text-outline-variant text-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm text-on-surface-variant">Time Elapsed</span>
      </div>
      <span className="font-data-display text-data-display text-primary">04:30</span>
      </div>
      {/* Nodes Optimized */}
      <div className="bg-surface-container-high border border-outline-variant p-4 flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-2">
      <Circle className="text-outline-variant text-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm text-on-surface-variant">Grid Nodes Optimized</span>
      </div>
      <div className="flex items-center gap-4">
      <span className="font-data-display text-data-display text-primary">92%</span>
      {/* Segmented Progress Bar */}
      <div className="flex-1 flex gap-1 h-2">
      <div className="flex-1 bg-primary drop-shadow-[0_0_4px_rgba(76,215,246,0.8)]"></div>
      <div className="flex-1 bg-primary drop-shadow-[0_0_4px_rgba(76,215,246,0.8)]"></div>
      <div className="flex-1 bg-primary drop-shadow-[0_0_4px_rgba(76,215,246,0.8)]"></div>
      <div className="flex-1 bg-primary drop-shadow-[0_0_4px_rgba(76,215,246,0.8)]"></div>
      <div className="flex-1 bg-primary drop-shadow-[0_0_4px_rgba(76,215,246,0.8)]"></div>
      <div className="flex-1 bg-primary drop-shadow-[0_0_4px_rgba(76,215,246,0.8)]"></div>
      <div className="flex-1 bg-primary drop-shadow-[0_0_4px_rgba(76,215,246,0.8)]"></div>
      <div className="flex-1 bg-primary drop-shadow-[0_0_4px_rgba(76,215,246,0.8)]"></div>
      <div className="flex-1 bg-primary drop-shadow-[0_0_4px_rgba(76,215,246,0.8)]"></div>
      <div className="flex-1 bg-surface-variant"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Local High Score Comparison */}
      <div className="bg-surface-container-lowest border-l-4 border-secondary p-4 mb-8 flex justify-between items-center">
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Local High Score</span>
      <span className="font-body-sm text-body-sm text-on-surface">16,200</span>
      </div>
      <div className="flex flex-col items-end">
      <span className="font-label-sm text-label-sm text-outline">Delta</span>
      <span className="font-label-md text-label-md text-error">-400</span>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
      <button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-component-padding-y px-component-padding-x flex items-center justify-center gap-2 hover:bg-primary-fixed hover:drop-shadow-[0_0_15px_rgba(76,215,246,0.5)] transition-colors uppercase tracking-wider relative overflow-hidden group" type="button" data-action-id="try-again-1" onClick={actions?.["try-again-1"]}>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-sm" aria-hidden={true} focusable="false" />
      <span className="relative z-10">Try Again</span>
      </button>
      <button className="flex-1 border border-outline-variant bg-surface text-on-surface font-label-md text-label-md py-component-padding-y px-component-padding-x flex items-center justify-center gap-2 hover:bg-surface-bright hover:border-outline transition-colors uppercase tracking-wider" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
      <Home className="text-sm" aria-hidden={true} focusable="false" />
                      Main Menu
                  </button>
      </div>
      </main>
    </>
  );
}
