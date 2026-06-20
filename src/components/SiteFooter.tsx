import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import symbolLogo from "../assets/vardan-hospital-logo.png";
import wordmarkLogo from "../assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-brand text-brand-foreground mt-24">
      <div className="container-page py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img 
              src={symbolLogo} 
              alt="Vardan Hospital Symbol Logo" 
              className="h-12 w-auto object-contain" 
            />
            <img 
              src={wordmarkLogo} 
              alt="Vardan Hospital Wordmark" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          <p className="mt-5 text-sm text-white/75 leading-relaxed">
            Compassionate, family-centered healthcare for Prayagraj — combining experienced specialists with modern medical infrastructure in the heart of Jhusi.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-accent transition" aria-label="Social link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/75">
            {[
              ["About Us", "/about"],
              ["Our Doctors", "/doctors"],
              ["Gallery", "/gallery"],
              ["Book Appointment", "/appointment"],
              ["Contact", "/contact"],
            ].map(([l, t]) => (
              <li key={t}><Link to={t as string} className="hover:text-white">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-white/75">
            {["General Medicine","Pediatrics","Orthopedics","Gynecology","Emergency Care","Diagnostics"].map(s => (
              <li key={s}><Link to="/services" className="hover:text-white">{s}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">Reach Us</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-accent" /> Jhusi, Prayagraj, Uttar Pradesh 211019, India</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand-accent" /> <a href="tel:+919876543210">+91 98765 43210</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand-accent" /> <a href="mailto:care@abhayjeevan.in">care@abhayjeevan.in</a></li>
          </ul>
          <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Hospital location"
              src="https://www.google.com/maps?q=Jhusi,Prayagraj,Uttar+Pradesh&output=embed"
              className="w-full h-32 grayscale-[20%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Vardan Hospital & Maternity Centre. All rights reserved.</p>
          <p>Designed with care for the families of Prayagraj.</p>
        </div>
      </div>
    </footer>
  );
}
