import { Plate } from "../components/content/Plate";
import { Chip } from "../components/content/Chip";

interface IconGroup {
  code: string;
  label: string;
  icons: string;
}

interface ChipGroup {
  code: string;
  label: string;
  tags: string[];
}

const ICON_GROUPS: IconGroup[] = [
  { code: "LEG-01", label: "Languages", icons: "python,js,ts,cpp,java" },
  {
    code: "LEG-02",
    label: "Frontend",
    icons: "react,redux,nextjs,tailwindcss,bootstrap,sass,html,css",
  },
  { code: "LEG-03", label: "Backend", icons: "fastapi" },
  { code: "LEG-04", label: "Databases", icons: "mysql,sqlite" },
  {
    code: "LEG-05",
    label: "Tools & Platform",
    icons: "git,github,vscode,vite,docker,linux",
  },
];

const CHIP_GROUPS: ChipGroup[] = [
  {
    code: "LEG-06",
    label: "Backend Toolkit",
    tags: ["Pydantic", "SQLAlchemy", "Alembic", "Celery", "Pytest", "Flake8"],
  },
  {
    code: "LEG-07",
    label: "Bots & Automation",
    tags: ["Telegram Bots — aiogram || Pyrogram || ...", "MetaTrader 5 (MQL5)"],
  },
];

export function Skills() {
  return (
    <div className="w-full max-w-2xl mx-auto grid gap-4">
      <Plate sheet="Systems Legend — Sheet S-01" title="My Skills">
        <div className="grid gap-5">
          {ICON_GROUPS.map((g) => (
            <div key={g.code}>
              <p className="font-mono text-[11px] tracking-[0.2em] text-[#5a7a8c] uppercase mb-2">
                <span className="text-[#3fa9dc]">{g.code}</span> — {g.label}
              </p>
              <img
                src={`https://skillicons.dev/icons?i=${g.icons}`}
                alt={g.label}
                className="max-w-full"
              />
            </div>
          ))}

          {CHIP_GROUPS.map((g) => (
            <div key={g.code}>
              <p className="font-mono text-[11px] tracking-[0.2em] text-[#5a7a8c] uppercase mb-2">
                <span className="text-[#3fa9dc]">{g.code}</span> — {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.tags.map((tag) => (
                  <Chip key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Plate>
    </div>
  );
}
