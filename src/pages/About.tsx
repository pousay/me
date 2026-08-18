import { Plate } from "../components/content/Plate";

const SPECS: Array<[string, string]> = [
  ["Name", "Pourya Sharifi"],
  ["Role", "Web Developer & AI Enthusiast"],
  ["Nationality", "Iranian"],
  ["Age", "20 — b. Sep 30, 2006"],
  ["Hobbies", "Movies & Series, Hanging Out"],
];

const TAGLINES = [
  "Currently working on ML & Fullstack development",
  "Think, Write, Create and Celebrate",
];

const LANGUAGES: Array<[string, number]> = [
  ["English", 4],
  ["Kurdish", 5],
  ["Persian", 5],
];

export function About() {
  return (
    <div className="w-full max-w-2xl mx-auto text-left grid gap-5">
      <div className="grid gap-5 md:grid-cols-[auto,1fr]">
        {/* monogram medallion stands in for a photo — swap for a real
            <img src="/assets/me3.png" /> whenever you want */}
        <div className="w-full flex justify-center">
          <div className="mx-auto md:mx-0 shrink-0 w-24 h-24 rounded-full border-2 border-[#e8b84b] bg-[#0f1c2e] flex items-center justify-center">
            <span className="font-mono text-2xl tracking-widest text-[#e8b84b]">
              PS
            </span>
          </div>
        </div>

        <Plate sheet="Occupant Specification — Sheet A-01" title="About Me">
          <dl className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-2 font-mono text-sm mb-5">
            {SPECS.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-[#5a7a8c] uppercase text-xs tracking-[0.15em] pt-0.5">
                  {k}
                </dt>
                <dd className="text-[#eaf3f8]">{v}</dd>
              </div>
            ))}
          </dl>

          <ul className="space-y-1.5">
            {TAGLINES.map((line) => (
              <li key={line} className="font-mono text-sm text-[#cfe3ee]">
                <span className="text-[#00b81c] mr-2">»</span>
                {line}
              </li>
            ))}
          </ul>
        </Plate>
      </div>

      <Plate sheet="Foundation Record — Sheet A-02" title="Education">
        <p className="font-mono text-sm text-[#eaf3f8] mb-1">
          B.Sc. Computer Engineering — Software
        </p>
        <p className="font-mono text-xs text-[#5a7a8c] uppercase tracking-widest mb-1">
          Razi University, Kermanshah
        </p>
        <p className="font-mono text-xs text-[#5a7a8c]">Fall 2025 — present</p>
      </Plate>

      <Plate sheet="Structural Load — Sheet A-03" title="Languages">
        <div className="grid gap-2.5">
          {LANGUAGES.map(([lang, level]) => (
            <div
              key={lang}
              className="flex items-center justify-between font-mono text-sm"
            >
              <span className="text-[#cfe3ee]">{lang}</span>
              <span
                className="tracking-[0.2em] text-[#e8b84b]"
                aria-label={`${level} of 5`}
              >
                {"●".repeat(level)}
                <span className="text-[#2a4459]">{"●".repeat(5 - level)}</span>
              </span>
            </div>
          ))}
        </div>
      </Plate>
    </div>
  );
}
