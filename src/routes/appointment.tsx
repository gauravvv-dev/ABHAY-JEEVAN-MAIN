import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/SiteLayout";
import { useState } from "react";
import { CheckCircle2, CalendarPlus } from "lucide-react";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Vardan Hospital & Maternity Centre, Prayagraj" },
      { name: "description", content: "Book a doctor's appointment at Vardan Hospital & Maternity Centre, Jhusi, Prayagraj. Choose your department and preferred date — we'll confirm shortly." },
      { property: "og:title", content: "Book an Appointment — Vardan Hospital & Maternity Centre" },
      { property: "og:description", content: "Reserve a slot online." },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
  component: AppointmentPage,
});

const departments = ["General Medicine","Pediatrics","Orthopedics","Gynecology","Emergency Care","Diagnostics","Preventive Health"];

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <PageHeader eyebrow="Book Appointment" title="Reserve your slot in seconds." subtitle="Fill in your details and our team will confirm your appointment by phone or WhatsApp." />
      <section className="py-20">
        <div className="container-page max-w-3xl">
          {submitted ? (
            <motion.div initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}}
              className="rounded-3xl bg-white border border-border p-12 text-center">
              <div className="grid h-16 w-16 mx-auto place-items-center rounded-full bg-brand-soft text-brand-accent">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mt-6">Appointment request received</h2>
              <p className="mt-3 text-muted-foreground">Thank you. Our front-desk team will reach out to confirm your time slot within a few hours.</p>
              <button onClick={() => setSubmitted(false)} className="btn-ghost mt-8">Book another</button>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="rounded-3xl bg-white border border-border p-8 lg:p-10 shadow-xl shadow-brand/5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Phone number" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" />
                <SelectField label="Department" name="department" options={departments} required />
                <Field label="Preferred date" name="date" type="date" required />
                <Field label="Preferred time" name="time" type="time" />
              </div>
              <div className="mt-5">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea name="message" rows={4} className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-brand-accent" placeholder="Briefly describe your symptoms or reason for visit." />
              </div>
              <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
                <CalendarPlus className="h-4 w-4" /> Request Appointment
              </button>
              <p className="text-xs text-muted-foreground mt-4">
                For emergencies, please call <a href="tel:+919876543210" className="text-brand-accent font-semibold">+91 98765 43210</a> directly.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input name={name} type={type} required={required} className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-brand-accent" />
    </div>
  );
}
function SelectField({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}{required && <span className="text-destructive"> *</span>}</label>
      <select name={name} required={required} defaultValue="" className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-brand-accent">
        <option value="" disabled>Select a department</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
