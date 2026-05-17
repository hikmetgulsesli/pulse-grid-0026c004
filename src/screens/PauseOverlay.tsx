// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Gamepad2, Menu, Settings } from "lucide-react";


export type PauseOverlayActionId = "button-1-1" | "button-2-2" | "game-3" | "levels-4" | "status-5" | "menu-6" | "resume-7" | "restart-level-8" | "options-9" | "quit-to-menu-10";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* LAYER 1: SIMULATED GAME BACKGROUND (Will be blurred by overlay) */}
      <div className="absolute inset-0 flex flex-col z-0">
      {/* TopAppBar (Simulated Background Shell) */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 z-10">
      <div className="flex items-center gap-4 text-primary">
      <Circle className="text-[28px]" aria-hidden={true} focusable="false" />
      <span className="font-headline-sm text-headline-sm font-bold tracking-tighter drop-shadow-[0_0_8px_rgba(76,215,246,0.6)]">PULSE_GRID</span>
      </div>
      <div className="flex items-center gap-4 text-on-surface-variant">
      <button className="hover:text-primary-fixed hover:bg-surface-bright transition-colors p-2 rounded-full flex items-center justify-center" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="hover:text-primary-fixed hover:bg-surface-bright transition-colors p-2 rounded-full flex items-center justify-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Simulated Game Playfield */}
      <main className="flex-1 relative bg-surface-container-lowest overflow-hidden flex items-center justify-center">
      {/* decorative grid lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)", backgroundSize: "64px 64px", backgroundPosition: "center"}}></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: "linear-gradient(to right, #4cd7f6 1px, transparent 1px), linear-gradient(to bottom, #4cd7f6 1px, transparent 1px)", backgroundSize: "320px 320px", backgroundPosition: "center"}}></div>
      {/* Dummy active nodes */}
      <div className="absolute top-[30%] left-[40%] w-4 h-4 bg-primary rounded-full glow-primary"></div>
      <div className="absolute top-[60%] left-[55%] w-4 h-4 bg-secondary rounded-full shadow-[0_0_12px_rgba(208,188,255,0.6)]"></div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
      <line className="opacity-50 drop-shadow-[0_0_4px_rgba(76,215,246,0.8)]" stroke="#4cd7f6" strokeWidth="2" x1="40%" x2="55%" y1="30%" y2="60%"></line>
      </svg>
      </main>
      {/* BottomNavBar (Simulated Background Shell - Mobile Only visibility) */}
      <nav className="md:hidden border-t border-outline-variant bg-surface-container/80 backdrop-blur-md fixed bottom-0 left-0 w-full z-10 flex justify-around items-center px-gutter py-2">
      {/* GAME (Active) */}
      <button className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-6 py-1 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-90 brightness-125 transition-colors" type="button" data-action-id="game-3" onClick={actions?.["game-3"]}>
      <Gamepad2 className="fill mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">GAME</span>
      </button>
      {/* LEVELS */}
      <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary px-4 py-1 transition-colors" type="button" data-action-id="levels-4" onClick={actions?.["levels-4"]}>
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">LEVELS</span>
      </button>
      {/* STATUS */}
      <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary px-4 py-1 transition-colors" type="button" data-action-id="status-5" onClick={actions?.["status-5"]}>
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">STATUS</span>
      </button>
      {/* MENU */}
      <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary px-4 py-1 transition-colors" type="button" data-action-id="menu-6" onClick={actions?.["menu-6"]}>
      <Menu className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">MENU</span>
      </button>
      </nav>
      </div>
      {/* LAYER 2 & 3: PAUSE OVERLAY & MODAL */}
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 z-50 backdrop-blur-[12px] bg-surface/80 flex items-center justify-center p-6">
      {/* Modal Container (Bracket Style) */}
      <div className="relative w-full max-w-[400px] bg-surface-container-high border border-outline-variant p-8 md:p-10 shadow-[0_0_40px_rgba(6,182,212,0.1)] flex flex-col items-center">
      {/* Bracket Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary -translate-x-[1px] -translate-y-[1px]"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary translate-x-[1px] translate-y-[1px]"></div>
      {/* Header */}
      <div className="mb-10 w-full relative flex justify-center items-center">
      <h1 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter drop-shadow-[0_0_12px_rgba(76,215,246,0.5)]">
                          PAUSED
                      </h1>
      {/* decorative lines beside header */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-outline-variant"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-outline-variant"></div>
      </div>
      {/* Options Menu */}
      <div className="w-full flex flex-col gap-4">
      {/* Primary Action: Resume */}
      <button className="w-full group relative overflow-hidden bg-primary-container text-on-primary-container border border-primary-container hover:border-primary-fixed py-4 flex items-center justify-center transition-colors duration-200 hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high" type="button" data-action-id="resume-7" onClick={actions?.["resume-7"]}>
      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
      <span className="font-label-md text-label-md tracking-wider">RESUME</span>
      </button>
      {/* Secondary Actions: Ghost Buttons */}
      <button className="w-full bg-transparent text-primary border border-outline-variant hover:border-primary/50 hover:bg-surface-bright/50 py-3 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high" type="button" data-action-id="restart-level-8" onClick={actions?.["restart-level-8"]}>
      <span className="font-label-md text-label-md tracking-wider">RESTART LEVEL</span>
      </button>
      <button className="w-full bg-transparent text-primary border border-outline-variant hover:border-primary/50 hover:bg-surface-bright/50 py-3 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high" type="button" data-action-id="options-9" onClick={actions?.["options-9"]}>
      <span className="font-label-md text-label-md tracking-wider">OPTIONS</span>
      </button>
      <div className="w-full h-[1px] bg-outline-variant/50 my-2"></div>
      <button className="w-full bg-transparent text-on-surface-variant border border-outline-variant hover:border-error/50 hover:text-error hover:bg-error-container/20 py-3 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface-container-high" type="button" data-action-id="quit-to-menu-10" onClick={actions?.["quit-to-menu-10"]}>
      <span className="font-label-md text-label-md tracking-wider">QUIT TO MENU</span>
      </button>
      </div>
      </div>
      </div>
      {/* Tailwind Config for Shimmer Animation */}
      <style>{`
              @keyframes shimmer {
                  100% {
                      transform: translateX(100%);
                  }
              }
          `}</style>
    </>
  );
}
