// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle } from "lucide-react";


export type GameOptionsActionId = "cancel-1" | "apply-changes-2";

export interface GameOptionsProps {
  actions?: Partial<Record<GameOptionsActionId, () => void>>;
}

export function GameOptions({ actions }: GameOptionsProps) {
  return (
    <>
      {/* Canvas (Main Content) */}
      <main className="flex-grow flex items-center justify-center p-margin-mobile md:p-margin-desktop w-full relative z-10 pt-20 pb-24 md:py-margin-desktop overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage: "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)", backgroundSize: "32px 32px"}}></div>
      {/* Settings Panel */}
      <div className="w-full max-w-3xl bg-surface-container border border-outline-variant rounded-xl p-6 md:p-10 relative shadow-[0_0_40px_rgba(5,20,38,0.8)] backdrop-blur-md">
      {/* Bracket Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-xl"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-xl"></div>
      <div className="mb-8 border-b border-outline-variant pb-4">
      <h1 className="font-headline-md text-headline-md text-primary tracking-tight">System Settings</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2">Configure simulation parameters.</p>
      </div>
      <form className="space-y-8">
      {/* Toggles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Audio Settings */}
      <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant/50">
      <h2 className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-widest flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" /> Audio
                              </h2>
      <div className="space-y-4">
      <label className="flex items-center justify-between cursor-pointer group">
      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Music</span>
      <div className="relative">
      <input checked={true} className="sr-only peer" type="checkbox" />
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary peer-checked:shadow-[0_0_10px_rgba(76,215,246,0.6)]"></div>
      </div>
      </label>
      <label className="flex items-center justify-between cursor-pointer group">
      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Sound Effects</span>
      <div className="relative">
      <input checked={true} className="sr-only peer" type="checkbox" />
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary peer-checked:shadow-[0_0_10px_rgba(76,215,246,0.6)]"></div>
      </div>
      </label>
      </div>
      </div>
      {/* Visual Settings */}
      <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant/50">
      <h2 className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-widest flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" /> Visuals
                              </h2>
      <div className="space-y-4">
      <label className="flex items-center justify-between cursor-pointer group">
      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Screen Shake</span>
      <div className="relative">
      <input className="sr-only peer" type="checkbox" />
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary peer-checked:shadow-[0_0_10px_rgba(76,215,246,0.6)]"></div>
      </div>
      </label>
      <div className="pt-2">
      <label className="block font-body-md text-body-md text-on-surface mb-2">Simulation Speed</label>
      <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" value="75" />
      </div>
      </div>
      </div>
      </div>
      {/* Simulation Params */}
      <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant/50">
      <h2 className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-widest flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" /> Simulation
                          </h2>
      <div className="mb-4">
      <label className="block font-body-md text-body-md text-on-surface mb-2">Difficulty Protocol</label>
      <div className="relative">
      <select className="block w-full bg-surface border-b-2 border-outline-variant text-on-surface py-3 px-4 focus:outline-none focus:border-primary focus:shadow-[0_4px_10px_-4px_rgba(76,215,246,0.5)] appearance-none transition-colors cursor-pointer font-label-md text-label-md">
      <option value="easy">Training (Easy)</option>
      <option selected={true} value="normal">Standard (Normal)</option>
      <option value="hard">Overdrive (Hard)</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      {/* Keyboard Remapping Preview */}
      <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant/50">
      <h2 className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-widest flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" /> Keybinds
                          </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-surface p-3 rounded border border-outline-variant flex flex-col items-center justify-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">Up</span>
      <kbd className="font-data-display text-data-display text-primary bg-surface-container-highest px-3 py-1 rounded border border-outline-variant/50 shadow-[0_2px_0_rgba(61,73,76,1)]">W</kbd>
      </div>
      <div className="bg-surface p-3 rounded border border-outline-variant flex flex-col items-center justify-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">Left</span>
      <kbd className="font-data-display text-data-display text-primary bg-surface-container-highest px-3 py-1 rounded border border-outline-variant/50 shadow-[0_2px_0_rgba(61,73,76,1)]">A</kbd>
      </div>
      <div className="bg-surface p-3 rounded border border-outline-variant flex flex-col items-center justify-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">Down</span>
      <kbd className="font-data-display text-data-display text-primary bg-surface-container-highest px-3 py-1 rounded border border-outline-variant/50 shadow-[0_2px_0_rgba(61,73,76,1)]">S</kbd>
      </div>
      <div className="bg-surface p-3 rounded border border-outline-variant flex flex-col items-center justify-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">Right</span>
      <kbd className="font-data-display text-data-display text-primary bg-surface-container-highest px-3 py-1 rounded border border-outline-variant/50 shadow-[0_2px_0_rgba(61,73,76,1)]">D</kbd>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-outline-variant">
      <button className="px-6 py-3 font-label-md text-label-md text-on-surface bg-transparent border border-outline-variant hover:bg-surface-bright rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary" type="button" data-action-id="cancel-1" onClick={actions?.["cancel-1"]}>
                              Cancel
                          </button>
      <button className="px-8 py-3 font-label-md text-label-md text-surface bg-primary hover:bg-primary-fixed rounded shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface focus:ring-primary" type="button" data-action-id="apply-changes-2" onClick={actions?.["apply-changes-2"]}>
                              Apply Changes
                          </button>
      </div>
      </form>
      </div>
      </main>
    </>
  );
}
