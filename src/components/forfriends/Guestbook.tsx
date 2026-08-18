import { useState } from "react";
import { submitGuestbookEntry } from "../../lib/guestbook";
import "./forfriends.css";

type Status = "idle" | "sending" | "sent" | "error";

export function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const canSend = name.trim().length > 0 && message.trim().length > 0;

  const handleSend = async () => {
    if (!canSend || status === "sending") return;
    setStatus("sending");
    try {
      await submitGuestbookEntry({ name: name.trim(), message: message.trim() });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="guestbook-reveal text-center py-4">
        <p className="font-mono text-sm text-[#00b81c]">
          Sent — thank you, {name.trim()}. 🫶
        </p>
      </div>
    );
  }

  return (
    <div className="guestbook-reveal grid gap-3 text-left">
      <p className="font-mono text-[11px] tracking-[0.2em] text-[#3fa9dc] uppercase text-center mb-1">
        All lit — say hi
      </p>

      <div>
        <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-[#5a7a8c] mb-1">
          Your name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Who's this?"
          className="w-full bg-[#0c1826] border border-[#2a4459] rounded-sm px-3 py-2 font-mono text-sm text-[#eaf3f8] outline-none focus:border-[#e8b84b] transition-colors"
        />
      </div>

      <div>
        <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-[#5a7a8c] mb-1">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say whatever you want..."
          rows={4}
          className="w-full bg-[#0c1826] border border-[#2a4459] rounded-sm px-3 py-2 font-mono text-sm text-[#eaf3f8] outline-none focus:border-[#e8b84b] transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="font-mono text-xs text-[#ef4444]">
          Couldn't send that — mind trying again?
        </p>
      )}

      <button
        onClick={handleSend}
        disabled={!canSend || status === "sending"}
        className="mt-1 font-mono text-xs tracking-[0.2em] uppercase px-4 py-2.5 border border-[#e8b84b] text-[#e8b84b] rounded-sm hover:bg-[#e8b84b] hover:text-[#0f1c2e] transition-colors disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#e8b84b] disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send"}
      </button>
    </div>
  );
}
