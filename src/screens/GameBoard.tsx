// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Gamepad2, Menu, Pause, Settings } from "lucide-react";


export type GameBoardActionId = "pause-1" | "reset-2" | "button-3-3" | "button-4-4" | "game-1" | "levels-2" | "status-3" | "menu-4";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary docked full-width top-0 border-b border-outline-variant flat with optical-glow flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 z-50">
      <div className="flex items-center gap-4">
      <Circle className="hover:text-primary-fixed hover:bg-surface-bright transition-colors rounded-full p-2" aria-hidden={true} focusable="false" />
      <span className="font-headline-sm text-headline-sm md:text-headline-sm font-bold tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(76,215,246,0.6)]">PULSE_GRID</span>
      </div>
      <div className="flex items-center gap-4">
      <Settings className="hover:text-primary-fixed hover:bg-surface-bright transition-colors rounded-full p-2 cursor-pointer text-on-surface-variant" aria-hidden={true} focusable="false" />
      <Circle className="hover:text-primary-fixed hover:bg-surface-bright transition-colors rounded-full p-2 cursor-pointer text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col md:flex-row p-margin-mobile md:p-margin-desktop gap-gutter mb-20 md:mb-0">
      {/* HUD Sidebar (Desktop Left) */}
      <aside className="hidden md:flex flex-col w-64 gap-grid-unit">
      <div className="bg-[#111827] border border-[#334155] p-component-padding-x py-component-padding-y bracket-panel rounded">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">SCORE</p>
      <div className="font-data-display text-data-display text-primary glow-text">2,450</div>
      </div>
      <div className="bg-[#111827] border border-[#334155] p-component-padding-x py-component-padding-y bracket-panel rounded">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">TIME</p>
      <div className="font-data-display text-data-display text-error">02:14</div>
      </div>
      <div className="bg-[#111827] border border-[#334155] p-component-padding-x py-component-padding-y rounded flex items-center justify-between">
      <span className="font-label-sm text-label-sm uppercase">STATUS</span>
      <span className="bg-primary/20 text-primary border border-primary px-2 py-1 rounded text-xs font-label-md tracking-wider">PULSE ACTIVE</span>
      </div>
      <div className="mt-auto flex flex-col gap-2">
      <button className="bg-primary text-[#0F172A] font-label-md text-label-md py-3 rounded uppercase hover:brightness-110 hover:shadow-[0_0_15px_rgba(76,215,246,0.6)] transition-colors flex items-center justify-center gap-2" type="button" data-action-id="pause-1" onClick={actions?.["pause-1"]}>
      <Pause className="text-sm" aria-hidden={true} focusable="false" /> PAUSE
                      </button>
      <button className="bg-transparent border border-[#334155] text-on-surface font-label-md text-label-md py-3 rounded uppercase hover:bg-surface-bright hover:border-primary transition-colors flex items-center justify-center gap-2" type="button" data-action-id="reset-2" onClick={actions?.["reset-2"]}>
      <Circle className="text-sm" aria-hidden={true} focusable="false" /> RESET
                      </button>
      </div>
      </aside>
      {/* Playfield Container */}
      <div className="flex-grow flex flex-col items-center justify-center relative">
      {/* Mobile HUD (Top of Grid) */}
      <div className="md:hidden flex justify-between w-full mb-4 px-2">
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">SCORE</span>
      <span className="font-data-display text-data-display text-primary">2,450</span>
      </div>
      <div className="flex flex-col text-right">
      <span className="font-label-sm text-label-sm text-on-surface-variant">TIME</span>
      <span className="font-data-display text-data-display text-error">02:14</span>
      </div>
      </div>
      {/* The 8x8 Grid */}
      <div className="relative bg-[#0F172A] p-2 md:p-4 rounded-xl border border-[#334155] shadow-lg max-w-full aspect-square w-full md:w-auto md:h-full md:max-h-[716px]">
      {/* Grid Lines Background */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 border-t border-l border-[#334155]/50 pointer-events-none z-0 m-4">
      {/* generating 64 cells via a generic div block to represent the grid visual */}
      {/* Normally this would be a loop, writing out a few manually for the visual effect */}
      <div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div>
      {/* Repeated rows for grid visual */}
      <div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div>
      <div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div>
      <div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div>
      <div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div>
      <div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div>
      <div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div>
      <div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div><div className="border-b border-r border-[#334155]/50"></div>
      </div>
      {/* Active Elements Layer */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 p-4 z-10">
      {/* Example Active Node at (2,2) */}
      <div className="col-start-2 row-start-2 flex items-center justify-center">
      <div className="w-4 h-4 bg-primary rounded-full signal-glow"></div>
      </div>
      {/* Signal Path */}
      <div className="col-start-2 row-start-2 col-span-3 flex items-center h-full pl-2 pr-2">
      <div className="h-1 w-full bg-primary signal-glow rounded-full"></div>
      </div>
      {/* Another Node at (5,2) */}
      <div className="col-start-5 row-start-2 flex items-center justify-center">
      <div className="w-4 h-4 bg-primary rounded-full signal-glow"></div>
      </div>
      {/* Vertical Path */}
      <div className="col-start-5 row-start-2 row-span-4 flex justify-center w-full pt-2 pb-2">
      <div className="w-1 h-full bg-primary signal-glow rounded-full"></div>
      </div>
      {/* Node at (5,6) */}
      <div className="col-start-5 row-start-6 flex items-center justify-center">
      <div className="w-4 h-4 bg-secondary rounded-full signal-glow shadow-[0_0_10px_rgba(208,188,255,0.8)]"></div>
      </div>
      </div>
      </div>
      {/* Keyboard Hints (Desktop Bottom Corner) */}
      <div className="hidden md:flex absolute bottom-4 right-4 items-center gap-2 text-on-surface-variant opacity-50">
      <Circle className="text-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm uppercase tracking-widest">WASD / ARROWS TO MOVE</span>
      </div>
      {/* Mobile Controls */}
      <div className="md:hidden mt-6 flex gap-4 w-full justify-center">
      <button className="w-12 h-12 rounded-full bg-surface-bright border border-[#334155] flex items-center justify-center hover:bg-primary/20 hover:border-primary active:scale-95 transition-colors" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      <button className="w-12 h-12 rounded-full bg-surface-bright border border-[#334155] flex items-center justify-center hover:bg-primary/20 hover:border-primary active:scale-95 transition-colors" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </main>
      {/* BottomNavBar */}
      <nav className="md:hidden bg-surface-container dark:bg-surface-container text-primary dark:text-primary docked full-width bottom-0 rounded-t-xl flat no shadows border-t border-outline-variant fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-2 bg-surface-container/80 backdrop-blur-md">
      <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-6 py-1 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:text-primary transition-colors scale-95 duration-100 ease-in-out" href="#" data-action-id="game-1" onClick={actions?.["game-1"]}>
      <Gamepad2 data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">GAME</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-colors" href="#" data-action-id="levels-2" onClick={actions?.["levels-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">LEVELS</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-colors" href="#" data-action-id="status-3" onClick={actions?.["status-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">STATUS</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-colors" href="#" data-action-id="menu-4" onClick={actions?.["menu-4"]}>
      <Menu aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">MENU</span>
      </a>
      </nav>
    </>
  );
}
