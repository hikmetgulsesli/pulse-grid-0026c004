// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Gamepad2, Menu, Play, Settings } from "lucide-react";


export type MainMenuActionId = "button-1-1" | "button-2-2" | "button-3-3" | "start-game-4" | "resume-session-5" | "tutorial-6" | "exit-7" | "game-8" | "levels-9" | "status-10" | "menu-11";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface text-primary flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 z-50 fixed top-0 left-0 border-b border-outline-variant shadow-[0_0_15px_rgba(5,20,38,0.8)]">
      <div className="flex items-center gap-4">
      <button className="text-primary hover:text-primary-fixed hover:bg-surface-bright transition-colors rounded-full p-2 flex items-center justify-center" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-headline-sm text-headline-sm font-bold tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(76,215,246,0.6)] uppercase">
                      PULSE_GRID
                  </h1>
      </div>
      <div className="flex items-center gap-2">
      <button className="text-primary hover:text-primary-fixed hover:bg-surface-bright transition-colors rounded-full p-2 flex items-center justify-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="text-primary hover:text-primary-fixed hover:bg-surface-bright transition-colors rounded-full p-2 flex items-center justify-center" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 pt-16 pb-24 px-gutter w-full max-w-7xl mx-auto">
      {/* Prominent Logo Area */}
      <div className="mb-16 text-center flex flex-col items-center">
      <div className="w-16 h-16 mb-6 border border-primary flex items-center justify-center bracket-border shadow-[0_0_20px_rgba(76,215,246,0.3)] bg-surface/50 backdrop-blur-sm">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-4xl text-primary drop-shadow-[0_0_8px_rgba(76,215,246,0.8)]" aria-hidden={true} focusable="false" />
      </div>
      <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface drop-shadow-[0_0_15px_rgba(213,227,253,0.3)] tracking-widest">
                      Pulse Grid
                  </h2>
      <p className="font-label-md text-label-md text-primary mt-2 uppercase opacity-80">System Ready // Awaiting Input</p>
      </div>
      {/* Central Vertical Stack of Buttons */}
      <div className="flex flex-col gap-5 w-full max-w-sm">
      {/* Primary Action */}
      <button className="group relative w-full bg-primary-container text-on-primary-container py-4 px-6 rounded-DEFAULT font-headline-sm text-headline-sm flex items-center justify-center gap-3 transition-colors duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="start-game-4" onClick={actions?.["start-game-4"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="uppercase tracking-wide">Start Game</span>
      </button>
      {/* Secondary Action */}
      <button className="w-full bg-surface-container-high border border-outline-variant text-on-surface py-4 px-6 rounded-DEFAULT font-headline-sm text-headline-sm flex items-center justify-center gap-3 transition-colors duration-300 hover:border-primary hover:text-primary hover:bg-surface-container-highest hover:shadow-[0_0_15px_rgba(76,215,246,0.2)] focus:outline-none bracket-border" type="button" data-action-id="resume-session-5" onClick={actions?.["resume-session-5"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="uppercase tracking-wide">Resume Session</span>
      </button>
      {/* Tertiary Actions */}
      <div className="grid grid-cols-2 gap-5 mt-2">
      <button className="w-full bg-surface border border-outline-variant text-on-surface-variant py-3 px-4 rounded-DEFAULT font-label-md text-label-md flex flex-col items-center justify-center gap-2 transition-colors duration-300 hover:border-tertiary hover:text-on-surface hover:bg-surface-bright focus:outline-none" type="button" data-action-id="tutorial-6" onClick={actions?.["tutorial-6"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="uppercase">Tutorial</span>
      </button>
      <button className="w-full bg-surface border border-outline-variant text-on-surface-variant py-3 px-4 rounded-DEFAULT font-label-md text-label-md flex flex-col items-center justify-center gap-2 transition-colors duration-300 hover:border-error hover:text-error hover:bg-surface-bright hover:shadow-[0_0_15px_rgba(255,180,171,0.2)] focus:outline-none" type="button" data-action-id="exit-7" onClick={actions?.["exit-7"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="uppercase">Exit</span>
      </button>
      </div>
      </div>
      {/* Ambient Tech Details */}
      <div className="absolute bottom-32 left-margin-desktop hidden md:flex flex-col gap-1 font-label-sm text-label-sm text-on-surface-variant opacity-50">
      <span>SYS.VER // 2.4.01</span>
      <span>NODE // ACTIVE</span>
      <span>PING // 12ms</span>
      </div>
      <div className="absolute bottom-32 right-margin-desktop hidden md:flex flex-col items-end gap-1 font-label-sm text-label-sm text-on-surface-variant opacity-50">
      <span>ENCRYPTION // STANDARD</span>
      <span>USER // GUEST_774</span>
      </div>
      </main>
      {/* BottomNavBar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-2 bg-surface-container/80 backdrop-blur-md border-t border-outline-variant">
      {/* Inactive Tab: GAME */}
      <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-colors w-16" type="button" data-action-id="game-8" onClick={actions?.["game-8"]}>
      <Gamepad2 className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">GAME</span>
      </button>
      {/* Inactive Tab: LEVELS */}
      <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-colors w-16" type="button" data-action-id="levels-9" onClick={actions?.["levels-9"]}>
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">LEVELS</span>
      </button>
      {/* Inactive Tab: STATUS */}
      <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-colors w-16" type="button" data-action-id="status-10" onClick={actions?.["status-10"]}>
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">STATUS</span>
      </button>
      {/* Active Tab: MENU */}
      <button className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-6 py-1 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-90 brightness-125 transition-colors" type="button" data-action-id="menu-11" onClick={actions?.["menu-11"]}>
      <Menu style={{fontVariationSettings: "'FILL' 1"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm font-bold">MENU</span>
      </button>
      </nav>
    </>
  );
}
