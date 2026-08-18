import { useState } from "react";
import { Plate } from "../components/content/Plate";
import { Chip } from "../components/content/Chip";

interface Project {
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  live?: string;
}

const PROJECTS: Project[] = [
  {
    title: "MovieHub — Movie & Series Download Site",
    description:
      "A full movie/series download platform. Backend built with FastAPI, frontend with React + TypeScript.",
    stack: ["FastAPI", "React", "TypeScript"],
    repo: "https://github.com/pousay/moviehub",
  },
  {
    title: "Simple Photo Editor",
    description: "A lightweight, non-professional photo editing site.",
    stack: ["React", "TypeScript"],
    repo: "https://github.com/pousay/photo-editor",
    live: "https://p-simple-photo-editor.netlify.app/",
  },
  {
    title: "Personal Demo Blog",
    description: "A simple, complete demo blog built end-to-end with ReactJS.",
    stack: ["React"],
    repo: "https://github.com/pousay/weblog",
    live: "https://pousay.github.io/",
  },
  {
    title: "TodoList",
    description: "A daily task manager with light/dark mode and notifications.",
    stack: ["React", "TypeScript"],
    repo: "https://github.com/pousay/todo",
    live: "https://pousay.github.io/todo/",
  },
  {
    title: "3D MultiScreen (fork)",
    description:
      "Open a few pages of this site and place them side by side or on top of each other for a multi-window 3D effect.",
    stack: ["JavaScript"],
    repo: "https://github.com/pousay/3DMultiScreen",
    live: "https://pousay.github.io/3DMultiScreen/",
  },
  {
    title: "Simple Calculator",
    description: "A simple calculator web app.",
    stack: ["React"],
    live: "https://pousay.github.io/web-calc/",
  },
  {
    title: "Responsive One-Page Company Site",
    description:
      "A fully responsive one-page company site built with HTML, CSS, and Bootstrap.",
    stack: ["HTML", "CSS", "Bootstrap"],
    repo: "https://github.com/pousay/responsive-website",
    live: "https://pousay.github.io/responsive-website/",
  },
];

export function Works() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];

  const goPrev = () =>
    setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  const goNext = () => setIndex((i) => (i + 1) % PROJECTS.length);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Plate
        sheet={`Project Drawing ${String(index + 1).padStart(2, "0")} of ${String(
          PROJECTS.length,
        ).padStart(2, "0")} — Sheet P-${String(index + 1).padStart(2, "0")}`}
        title="My Works"
      >
        <h4 className="font-mono text-base text-[#eaf3f8] mb-2">
          {project.title}
        </h4>
        <p className="font-mono text-sm text-[#cfe3ee] mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((s) => (
            <Chip key={s} label={s} />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-2 font-mono text-xs uppercase tracking-wide">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3fa9dc] hover:text-[#e8b84b] transition-colors"
            >
              GitHub Repo →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3fa9dc] hover:text-[#e8b84b] transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>

        {/* pagination controls, blueprint-styled like a drawing set's sheet flipper */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-dashed border-[#2a4459]">
          <button
            onClick={goPrev}
            className="font-mono text-xs tracking-[0.15em] uppercase text-[#5a7a8c] hover:text-[#e8b84b] transition-colors px-3 mr-2 py-1.5 border border-[#2a4459] hover:border-[#e8b84b] rounded-sm"
          >
            ← Prev
          </button>

          <div className="flex gap-1.5">
            {PROJECTS.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? "bg-[#e8b84b]" : "bg-[#2a4459]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="font-mono text-xs tracking-[0.15em] ml-2 uppercase text-[#5a7a8c] hover:text-[#e8b84b] transition-colors px-3 py-1.5 border border-[#2a4459] hover:border-[#e8b84b] rounded-sm"
          >
            Next →
          </button>
        </div>
      </Plate>
    </div>
  );
}
