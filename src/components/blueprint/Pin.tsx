import type { KeyboardEvent, MouseEvent } from "react";
import type { OpenHandler, Point, RoomId } from "../../types";

interface PinProps {
  cx: number;
  cy: number;
  name: string;
  id: RoomId;
  onOpen: OpenHandler;
}

const PLATE_W = 74;
const PLATE_H = 36;
const HIT_PAD = 18; // extra invisible margin around the plate for tap comfort

/**
 * A brass switch-plate marker placed inside a room — now a rectangular
 * panel (like a real wall switch plate) with mounting screws in the
 * corners and a "CLICK" engraving. Clicking/tapping it reports the
 * pointer's screen position so the page-open animation can originate
 * from the exact spot the user touched.
 */
export function Pin({ cx, cy, name, id, onOpen }: PinProps) {
  const handleActivate = (originPoint: Point) => onOpen(id, originPoint);

  const left = cx - PLATE_W / 2;
  const top = cy - PLATE_H / 2;

  return (
    <g
      className="group focus:outline-none cursor-pointer"
      onClick={(e: MouseEvent) =>
        handleActivate({ x: e.clientX, y: e.clientY })
      }
      tabIndex={0}
      role="button"
      aria-label={`Open ${name}`}
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          const rect = e.currentTarget.getBoundingClientRect();
          handleActivate({
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          });
        }
      }}
    >
      {/* invisible larger hit-area for comfortable tap/click */}
      <rect
        x={left - HIT_PAD}
        y={top - HIT_PAD}
        width={PLATE_W + HIT_PAD * 2}
        height={PLATE_H + HIT_PAD * 2}
        fill="transparent"
      />

      {/* pulsing outline ring, echoing a breaker sending current */}
      <rect
        x={left}
        y={top}
        width={PLATE_W}
        height={PLATE_H}
        rx="4"
        className="fill-none stroke-[#e8b84b] opacity-0 group-hover:opacity-60"
        strokeWidth="1"
      >
        <animate
          attributeName="x"
          values={`${left};${left - 7}`}
          dur="1.3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values={`${top};${top - 5}`}
          dur="1.3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="width"
          values={`${PLATE_W};${PLATE_W + 14}`}
          dur="1.3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          values={`${PLATE_H};${PLATE_H + 10}`}
          dur="1.3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.6;0"
          dur="1.3s"
          repeatCount="indefinite"
        />
      </rect>

      {/* switch plate body */}
      <rect
        x={left}
        y={top}
        width={PLATE_W}
        height={PLATE_H}
        rx="4"
        className="fill-[#0f1c2e] stroke-[#e8b84b] transition-all duration-300 group-hover:stroke-[2.5]"
        strokeWidth="1.5"
      />

      {/* mounting screws, corner detail for an "elite hardware" read */}
      {[
        [left + 7, top + 7],
        [left + PLATE_W - 7, top + 7],
        [left + 7, top + PLATE_H - 7],
        [left + PLATE_W - 7, top + PLATE_H - 7],
      ].map(([sx, sy], i) => (
        <g key={i}>
          <circle cx={sx} cy={sy} r="2" className="fill-[#5a7a8c] opacity-70" />
          <line
            x1={sx - 1.3}
            y1={sy}
            x2={sx + 1.3}
            y2={sy}
            stroke="#0f1c2e"
            strokeWidth="0.6"
          />
        </g>
      ))}

      {/* engraved CLICK label */}
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        className="fill-[#e8b84b] font-mono opacity-80 group-hover:opacity-100 transition-opacity select-none"
        style={{ fontSize: 11, letterSpacing: "0.2em" }}
      >
        CLICK
      </text>

      {/* room name, revealed on hover/focus below the plate */}
      <text
        x={cx}
        y={top + PLATE_H + 20}
        textAnchor="middle"
        className="fill-[#e8b84b] font-mono uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none"
        style={{ fontSize: 11, letterSpacing: "0.15em" }}
      >
        {name}
      </text>
    </g>
  );
}
