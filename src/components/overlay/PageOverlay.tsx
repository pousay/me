import { useEffect, useState, type ReactNode } from "react";
import { LightningBolt } from "./LightningBolt";
import type { Point } from "../../types";
import "./overlay.css";

// Phases of the open/close sequence:
//   strike  -> bolt travels from the clicked pin to the panel
//   flash   -> brief full-screen flash marks the "hit"
//   open    -> backdrop + panel power on and stay visible
//   closing -> panel + backdrop power down, then unmount
const PHASE = {
  STRIKE: "strike",
  FLASH: "flash",
  OPEN: "open",
  CLOSING: "closing",
} as const;

type Phase = (typeof PHASE)[keyof typeof PHASE];

interface PageOverlayProps {
  title: string;
  origin: Point;
  onClose: () => void;
  children: ReactNode;
}

export function PageOverlay({
  title,
  origin,
  onClose,
  children,
}: PageOverlayProps) {
  const [phase, setPhase] = useState<Phase>(PHASE.STRIKE);

  const handleClose = () => setPhase(PHASE.CLOSING);

  useEffect(() => {
    if (phase !== PHASE.CLOSING) return;
    const timer = setTimeout(onClose, 260);
    return () => clearTimeout(timer);
  }, [phase, onClose]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {phase === PHASE.STRIKE && origin && (
        <LightningBolt origin={origin} onTraced={() => setPhase(PHASE.FLASH)} />
      )}

      {phase === PHASE.FLASH && (
        <div
          className="fixed inset-0 z-30 bg-[#e8f4ff] bp-flash pointer-events-none"
          onAnimationEnd={() => setPhase(PHASE.OPEN)}
        />
      )}

      {(phase === PHASE.OPEN || phase === PHASE.CLOSING) && (
        <div
          className={`fixed inset-0 z-20 flex items-center justify-center px-6 bg-[#0a1420]/95 backdrop-blur-sm ${
            phase === PHASE.OPEN ? "bp-backdrop-enter" : "bp-backdrop-exit"
          }`}
          onClick={handleClose}
        >
          <div
            className={`relative bg-[#0f1c2e] border overflow-x-hidden border-[#3fa9dc] rounded-sm max-w-xl w-full max-h-[85vh] overflow-y-auto bp-scroll p-8 md:p-10 text-center shadow-[0_0_60px_rgba(63,169,220,0.15)] ${
              phase === PHASE.OPEN ? "bp-panel-enter" : "bp-panel-exit"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 p-5 -m-1 text-[#5a7a8c] hover:text-[#e8b84b] font-mono text-xs tracking-widest uppercase transition-colors"
              aria-label="Close"
            >
              close ✕
            </button>

            <p className="font-mono text-[11px] tracking-[0.3em] text-[#3fa9dc] uppercase mb-4">
              {title}
            </p>
            <div className="text-2xl text-[#eaf3f8]">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
