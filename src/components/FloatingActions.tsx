import { Link } from "@tanstack/react-router";
import { CalendarPlus, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const waMsg = encodeURIComponent("Hello Vardan Hospital & Maternity Centre, I'd like to know more about your services.");
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <Link
        to="/appointment"
        aria-label="Book appointment"
        className="grid h-12 w-12 place-items-center rounded-full bg-brand text-brand-foreground shadow-xl hover:bg-brand-accent transition"
        style={{ animation: "pulse-ring 2.4s infinite" }}
      >
        <CalendarPlus className="h-5 w-5" />
      </Link>
      <a
        href={`https://wa.me/919876543210?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp chat"
        className="grid h-14 w-14 place-items-center rounded-full text-white shadow-xl transition"
        style={{ background: "#25D366", animation: "pulse-ring-green 2.4s infinite" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
