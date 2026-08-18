export interface GuestbookEntry {
  name: string;
  message: string;
}

const API_BASE = import.meta.env.VITE_PROXY ?? "";

export const GUESTBOOK_ENDPOINT = `${API_BASE}/api/contacts/contact`;

export async function submitGuestbookEntry(
  entry: GuestbookEntry,
): Promise<void> {
  const res = await fetch(GUESTBOOK_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });

  if (!res.ok) {
    throw new Error(`Guestbook submission failed (${res.status})`);
  }
}
