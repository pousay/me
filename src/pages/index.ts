import type { ComponentType } from "react";
import { About } from "./About";
import { Skills } from "./Skills";
import { Works } from "./Works";
import { Contact } from "./Contact";
import type { RoomId } from "../types";

interface PageEntry {
  title: string;
  Component: ComponentType;
}

// Maps a room/pin id to its page component and a display title
// used in the overlay header.
export const PAGES: Record<RoomId, PageEntry> = {
  about: { title: "About Me", Component: About },
  skills: { title: "My Skills", Component: Skills },
  works: { title: "My Works", Component: Works },
  contact: { title: "Contact", Component: Contact },
};
