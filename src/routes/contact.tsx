import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/SiteLayout";
import { Phone, Mail, MapPin, Siren, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abhay Jeevan Hospital, Jhusi, Prayagraj" },
      { name: "description", content: "Contact Abhay Jeevan Hospital — address, phone, email and emergency line. Located in Jhusi, Prayagraj, Uttar Pradesh." },
      { property: "og:title", content: "Contact Abhay Jeevan Hospital" },
      { property: "og:description", content: "Get in touch with our team in Jhusi, Prayagraj." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <PageHeader eyebrow="Contact Us" title="We're here, whenever you need us." subtitle="Visit, call, or send us a message — our team responds promptly during all hours." />

      <section className="py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Address", text: "Main Road, Jhusi, Prayagraj, Uttar Pradesh 211019, India" },
              { icon: Phone, title: "Phone", text: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: Mail, title: "Email", text: "care@abhayjeevan.in", href: "mailto:care@abhayjeevan.in" },
              { icon: Clock, title: "OPD Hours", text: "Mon – Sun · 9:00 AM to 8:00 PM" },
              { icon: Siren, title: "Emergency (24/7)", text: "+91 98765 43210", href: "tel:+919876543210", accent: true },
            ].map((c, i) => (
              <motion.div key={c.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
                className={`flex gap-5 p-6 rounded-2xl border ${c.accent ? "bg-brand text-brand-foreground border-brand" : "bg-white border-border"}`}>
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${c.accent ? "bg-white/15" : "bg-brand-soft text-brand-accent"}`}>
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className={`text-xs uppercase tracking-widest font-semibold mb-1 ${c.accent ? "text-white/70" : "text-brand-accent"}`}>{c.title}</div>
                  {c.href ? <a href={c.href} className="text-lg font-semibold break-words">{c.text}</a> : <div className="text-lg font-semibold break-words">{c.text}</div>}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            {sent ? (
              <div className="rounded-3xl bg-white border border-border p-10 text-center">
                <CheckCircle2 className="h-12 w-12 mx-auto text-brand-accent" />
                <h3 className="text-2xl font-bold mt-4">Message sent</h3>
                <p className="text-muted-foreground mt-2">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-3xl bg-white border border-border p-8 shadow-xl shadow-brand/5">
                <h3 className="text-2xl font-bold">Send us a message</h3>
                <p className="text-sm text-muted-foreground mt-1">We'll respond within one business day.</p>
                <div className="grid gap-5 mt-6">
                  <Input label="Your name" name="name" required />
                  <Input label="Email" name="email" type="email" required />
                  <Input label="Phone" name="phone" type="tel" />
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea name="msg" rows={5} required className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand-accent" />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">Send Message</button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-brand/5">
            <iframe title="Hospital location" src="https://www.google.com/maps?q=Jhusi,Prayagraj,Uttar+Pradesh&output=embed" className="w-full h-[460px]" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}
function Input({ label, name, type="text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand-accent" />
    </div>
  );
}
