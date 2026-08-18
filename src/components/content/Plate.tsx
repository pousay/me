import type { ReactNode } from "react";

interface PlateProps {
  sheet: string; // e.g. "SHEET A-01"
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Shared "drawing sheet" panel used across content pages — a bordered
 * plate with a sheet-number eyebrow and title, styled like a page torn
 * out of the same blueprint set as the floor plan.
 */
export function Plate({ sheet, title, children, className = "" }: PlateProps) {
  return (
    <section
      className={`text-left border border-[#2a4459] rounded-sm p-5 md:p-6 bg-[#0c1826]/60 ${className}`}
    >
      <p className="font-mono text-[10px] tracking-[0.3em] text-[#3fa9dc] uppercase mb-1">
        {sheet}
      </p>
      <h3 className="font-mono text-[15px] tracking-[0.08em] text-[#e8b84b] uppercase mb-4 pb-2 border-b border-dashed border-[#2a4459]">
        {title}
      </h3>
      {children}
    </section>
  );
}
