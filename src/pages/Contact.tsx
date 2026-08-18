import { Plate } from "../components/content/Plate";

interface Connection {
  code: string;
  label: string;
  href: string;
  icon: string;
}

const CONNECTIONS: Connection[] = [
  {
    code: "CN-01",
    label: "pouryathesaymon@gmail.com",
    href: "mailto:pouryathesaymon@gmail.com",
    icon: "mail",
  },
  {
    code: "CN-02",
    label: "Telegram",
    href: "https://t.me/Better_ring_fring",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/3840px-Telegram_logo.svg.png",
  },
  {
    code: "CN-03",
    label: "Instagram",
    href: "https://www.instagram.com/p0urya.sh/",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWpidznw6EtlGaj7MIfNrsSJANyKluOYUq1F5zPbulQ&s",
  },
  {
    code: "CN-04",
    label: "GitHub",
    href: "https://github.com/pousay",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd43NPXZcOp-N1vst9Acu-2IV7ZqJ3zQiOJpoW5YOOyg&s=10",
  },
  {
    code: "CN-05",
    label: "Phone",
    href: "tel:+989033138960",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iipKT5aA4Hn3zkidQMyCR6qtMLYQ2f3iKqIa9-Fdzg&s=10",
  },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="none">
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        stroke="#e8b84b"
        strokeWidth="1.6"
      />
      <path
        d="M3 6l9 7 9-7"
        stroke="#e8b84b"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Contact() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Plate sheet="External Connections — Sheet C-01" title="Message Me Via">
        <ul className="grid gap-3">
          {CONNECTIONS.map((c) => (
            <li key={c.code}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="items-center grid align-middle justify-center border border-[#2a4459] h-fit w-full rounded-sm px-4 py-3 hover:border-[#e8b84b] transition-colors group"
              >
                <div className="flex w-50 align-middle  justify-between px-10">
                  <span className="font-mono text-[12px] mt-2.25 tracking-[0.2em] text-[#3fa9dc] w-14 shrink-0">
                    {c.code}
                  </span>
                  {c.icon === "mail" ? (
                    <MailIcon />
                  ) : (
                    <img
                      src={c.icon}
                      alt={c.label}
                      className="h-8 w-8 shrink-0 object-contain rounded-full"
                    />
                  )}
                </div>
                <span className="font-mono w-full  text-center text-[13px] text-[#eaf3f8] group-hover:text-[#e8b84b] transition-colors truncate">
                  {c.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Plate>
    </div>
  );
}
