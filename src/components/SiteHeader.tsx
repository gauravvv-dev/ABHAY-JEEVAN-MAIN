import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import symbolLogo from "../assets/vardan-hospital-logo.png";
import wordmarkLogo from "../assets/logo.png";

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
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-brand text-brand-foreground text-xs">
        <div className="container-page flex items-center justify-between py-1.5">
          <div className="flex items-center gap-4 opacity-90">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> Mon–Sun · 24/7 Emergency · OPD 9:00–20:00</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Jhusi, Prayagraj, Uttar Pradesh</span>
          </div>
          <a href="tel:+919876543210" className="inline-flex items-center gap-1.5 font-semibold whitespace-nowrap">
            <Phone className="h-3 w-3" /> Emergency: +91 98765 43210
          </a>
        </div>
      </div>
      
      {/* Main Navbar */}
      <div className="container-page flex items-center justify-between py-1.5 md:py-3 relative">
        {/* Left: Branding */}
        <div className="flex-shrink-0">
          {/* Mobile only logo lockup */}
          <Link to="/" className="md:hidden flex items-center gap-1.5 group">
            <img 
              src={symbolLogo} 
              alt="Vardan Hospital Symbol Logo" 
              className="w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              style={{ height: "40px" }}
            />
            <img 
              src={wordmarkLogo} 
              alt="Vardan Hospital Wordmark" 
              className="w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              style={{ height: "92px" }}
            />
          </Link>
          
          {/* Desktop only logo lockup */}
          <Link to="/" className="hidden md:flex items-center gap-2.5 group">
            <img 
              src={symbolLogo} 
              alt="Vardan Hospital Symbol Logo" 
              className="w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              style={{ height: "60px" }}
            />
            <img 
              src={wordmarkLogo} 
              alt="Vardan Hospital Wordmark" 
              className="w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              style={{ height: "88px" }}
            />
          </Link>
        </div>
        
        {/* Center: Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1 absolute left-1/2 -translate-x-1/2">
          <nav className="flex items-center gap-0.5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-brand-accent transition-colors rounded-full"
                activeProps={{ className: "text-brand-accent" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Right: Phone + CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a href="tel:+919876543210" className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-brand whitespace-nowrap">
            <Phone className="h-3.5 w-3.5 text-brand-accent" /> +91 98765 43210
          </a>
          <Link to="/appointment" className="btn-primary px-4 py-2 text-sm whitespace-nowrap">Book Appointment</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden p-1.5 -mr-1.5" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
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
