import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
      <div className="hidden lg:block bg-brand text-brand-foreground text-xs">
        <div className="container-page flex items-center justify-between py-2">
          <div className="flex items-center gap-6 opacity-90">
            <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> Mon–Sun · 24/7 Emergency · OPD 9:00–20:00</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Jhusi, Prayagraj, Uttar Pradesh</span>
          </div>
          <a href="tel:+919876543210" className="inline-flex items-center gap-2 font-semibold">
            <Phone className="h-3.5 w-3.5" /> Emergency: +91 98765 43210
          </a>
        </div>
      </div>
      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-brand-foreground font-display text-xl shadow-sm">A</div>
          <div className="leading-tight">
            <div className="font-display text-lg text-brand font-bold">Abhay Jeevan</div>
            <div className="text-[11px] tracking-[0.2em] text-brand-accent font-semibold uppercase">Hospital · Prayagraj</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-brand-accent transition-colors rounded-full"
              activeProps={{ className: "text-brand-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919876543210" className="hidden xl:inline-flex items-center gap-2 text-sm font-semibold text-brand">
            <Phone className="h-4 w-4 text-brand-accent" /> +91 98765 43210
          </a>
          <Link to="/appointment" className="btn-primary">Book Appointment</Link>
        </div>
        <button className="lg:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-base font-medium border-b border-border/60">
                {n.label}
              </Link>
            ))}
            <Link to="/appointment" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">Book Appointment</Link>
          </div>
        </div>
      )}
    </header>
  );
}
