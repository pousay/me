// Shared visual language for the blueprint floor plan.
export interface BlueprintTheme {
  background: string;
  fill: string;
  wall: string;
  wallWidth: number;
  grid: string;
  accent: string;
  ink: string;
  paper: string;
  text: string;
}

export const BLUEPRINT_THEME: BlueprintTheme = {
  background: "#0a1420",
  fill: "#0e1c2a",
  wall: "#8fb4c9",
  wallWidth: 5,
  grid: "#3fa9dc",
  accent: "#e8b84b",
  ink: "#5a7a8c",
  paper: "#0f1c2e",
  text: "#eaf3f8",
};
