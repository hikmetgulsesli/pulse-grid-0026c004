// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, MousePointerClick } from "lucide-react";


export type ControlsHelpActionId = "back-to-menu-1";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* SUPPRESSING NAVIGATION SHELL: Task-focused sub-page with a explicit "Back" action */}
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 z-10">
      {/* Header */}
      <header className="mb-10 flex items-center justify-between border-b border-outline-variant pb-6">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-primary tracking-tighter drop-shadow-[0_0_12px_rgba(76,215,246,0.4)] uppercase">System Help</h1>
      <p className="font-label-md text-label-md text-on-surface-variant mt-2 uppercase">Core Input &amp; Directives</p>
      </div>
      <Circle className="text-4xl text-primary opacity-50" aria-hidden={true} focusable="false" />
      </header>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 flex-1">
      {/* Left Column: Controls (Span 7) */}
      <div className="md:col-span-7 flex flex-col gap-6">
      {/* Keyboard Controls Panel */}
      <section className="relative bg-surface-container border border-outline-variant rounded-xl p-6 md:p-8 flex-1 group hover:border-primary/50 transition-colors duration-300">
      {/* Bracket Accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-xl opacity-80"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-xl opacity-80"></div>
      <h2 className="font-label-md text-label-md text-primary mb-8 flex items-center gap-2">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-sm" aria-hidden={true} focusable="false" />
                              INPUT.TERMINAL
                          </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center h-full">
      {/* WASD Visual */}
      <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-12 h-12 bg-surface-bright border border-outline-variant rounded-lg flex items-center justify-center font-data-display text-data-display shadow-[0_4px_0_#1c2b3e] active:shadow-none active:translate-y-1 transition-colors">W</div>
      <div className="flex gap-2">
      <div className="w-12 h-12 bg-surface-bright border border-outline-variant rounded-lg flex items-center justify-center font-data-display text-data-display shadow-[0_4px_0_#1c2b3e] active:shadow-none active:translate-y-1 transition-colors">A</div>
      <div className="w-12 h-12 bg-surface-bright border border-outline-variant rounded-lg flex items-center justify-center font-data-display text-data-display shadow-[0_4px_0_#1c2b3e] active:shadow-none active:translate-y-1 transition-colors">S</div>
      <div className="w-12 h-12 bg-surface-bright border border-outline-variant rounded-lg flex items-center justify-center font-data-display text-data-display shadow-[0_4px_0_#1c2b3e] active:shadow-none active:translate-y-1 transition-colors">D</div>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-4 uppercase">Vector Translation</span>
      </div>
      {/* Actions Visual */}
      <div className="flex flex-col gap-6 justify-center">
      <div className="flex items-center gap-4">
      <div className="w-24 h-10 bg-surface-bright border border-outline-variant rounded-lg flex items-center justify-center font-data-display text-label-md shadow-[0_4px_0_#1c2b3e]">SPACE</div>
      <div className="font-body-md text-body-md text-on-surface">Rotate Node</div>
      </div>
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-surface-bright border border-outline-variant rounded-lg flex items-center justify-center font-data-display text-data-display text-error shadow-[0_4px_0_#1c2b3e]">R</div>
      <div className="font-body-md text-body-md text-on-surface">Reset Grid</div>
      </div>
      </div>
      </div>
      </section>
      {/* Touch Controls Panel */}
      <section className="relative bg-surface-container-low border border-outline-variant rounded-xl p-6 md:p-8 hover:border-secondary/50 transition-colors duration-300">
      <h2 className="font-label-md text-label-md text-secondary mb-6 flex items-center gap-2">
      <MousePointerClick  style={{fontVariationSettings: "'FILL' 1"}} className="text-sm" aria-hidden={true} focusable="false" />
                              INPUT.HAPTIC
                          </h2>
      <div className="flex flex-wrap gap-8">
      <div className="flex items-center gap-4 bg-surface px-4 py-3 rounded-lg border border-outline-variant/50">
      <Circle className="text-3xl text-tertiary" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-label-md text-label-md text-on-surface">Swipe Vector</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Translate</div>
      </div>
      </div>
      <div className="flex items-center gap-4 bg-surface px-4 py-3 rounded-lg border border-outline-variant/50">
      <Circle className="text-3xl text-tertiary" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-label-md text-label-md text-on-surface">Single Tap</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Rotate Node</div>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Right Column: Directives (Span 5) */}
      <div className="md:col-span-5 h-full">
      <section className="relative bg-[#0d1c2f]/80 backdrop-blur-md border border-primary/30 rounded-xl p-6 md:p-8 h-full flex flex-col box-glow-primary">
      {/* Tech decorations */}
      <div className="absolute top-4 right-4 flex gap-1">
      <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
      <div className="w-1 h-1 bg-primary rounded-full"></div>
      <div className="w-1 h-1 bg-primary rounded-full opacity-50"></div>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-8 flex items-center gap-3">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
                              System Directives
                          </h2>
      <div className="flex flex-col gap-6 flex-1 justify-center">
      {/* Rule 1 */}
      <div className="flex items-start gap-4 p-4 bg-surface-container rounded-lg border-l-2 border-primary">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
      <Circle className="text-primary text-sm" aria-hidden={true} focusable="false" />
      </div>
      <p className="font-body-lg text-body-lg text-on-surface">Connect the pulse to the exit node</p>
      </div>
      {/* Rule 2 */}
      <div className="flex items-start gap-4 p-4 bg-surface-container rounded-lg border-l-2 border-error">
      <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center shrink-0">
      <Circle className="text-error text-sm" aria-hidden={true} focusable="false" />
      </div>
      <p className="font-body-lg text-body-lg text-on-surface">Avoid firewalls</p>
      </div>
      {/* Rule 3 */}
      <div className="flex items-start gap-4 p-4 bg-surface-container rounded-lg border-l-2 border-secondary">
      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
      <Circle className="text-secondary text-sm" aria-hidden={true} focusable="false" />
      </div>
      <p className="font-body-lg text-body-lg text-on-surface">Minimize latency</p>
      </div>
      </div>
      </section>
      </div>
      </div>
      {/* Footer Action */}
      <footer className="mt-12 flex justify-center pb-8">
      <button className="bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-md text-label-md px-8 py-4 rounded-full flex items-center gap-3 transition-colors duration-200 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] uppercase tracking-wider group" type="button" data-action-id="back-to-menu-1" onClick={actions?.["back-to-menu-1"]}>
      <ArrowLeft className="group-hover:-translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
                      Back to Menu
                  </button>
      </footer>
      </main>
    </>
  );
}
