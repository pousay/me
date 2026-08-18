export type RoomId = "about" | "skills" | "works" | "contact";

export interface Point {
  x: number;
  y: number;
}

export type OpenHandler = (id: RoomId, origin: Point) => void;
