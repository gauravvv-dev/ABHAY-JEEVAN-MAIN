import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/SiteLayout";
import { HeartPulse, Baby, Bone, Activity, Siren, Microscope, ShieldCheck, ClipboardCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vardan Hospital & Maternity Centre, Prayagraj" },
      { name: "description", content: "Explore the medical services at Vardan Hospital & Maternity Centre, Jhusi — general medicine, pediatrics, orthopedics, gynecology, emergency care, diagnostics and preventive health." },
      { property: "og:title", content: "Hospital Services in Prayagraj — Vardan Hospital & Maternity Centre" },
      { property: "og:description", content: "Comprehensive multi-specialty care under one roof." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: HeartPulse, name: "General Medicine", desc: "Adult medicine for fevers, infections, diabetes, hypertension and chronic disease management.", benefits: ["Same-day consultations","Long-term care plans","Lifestyle counseling"], related: ["Health checkups", "Diagnostics"] },
  { icon: Baby, name: "Pediatrics", desc: "Compassionate care for newborns, infants and adolescents — from vaccinations to acute illness.", benefits: ["Immunization schedules","Growth monitoring","Pediatric emergencies"], related: ["Vaccinations", "Nutrition"] },
  { icon: Bone, name: "Orthopedics", desc: "Diagnosis and treatment of fractures, joint pain, spine conditions and sports injuries.", benefits: ["Fracture management","Joint replacement","Physiotherapy referrals"], related: ["Diagnostic imaging", "Pain management"] },
  { icon: Activity, name: "Gynecology", desc: "Women's health, prenatal care, safe deliveries and minimally invasive surgeries.", benefits: ["Antenatal care","Safe deliveries","Menstrual & menopausal care"], related: ["Diagnostics", "Preventive care"] },
  { icon: Siren, name: "Emergency Services", desc: "Round-the-clock emergency response with trained doctors, rapid triage and stabilization.", benefits: ["24/7 availability","Trauma response","Critical care transfers"], related: ["ICU", "Diagnostics"] },
  { icon: Microscope, name: "Diagnostic Services", desc: "In-house pathology, ultrasound and digital X-ray to support quick, accurate decisions.", benefits: ["Same-day reporting","Digital imaging","Experienced technicians"], related: ["Health checkups"] },
  { icon: ShieldCheck, name: "Preventive Healthcare", desc: "Routine screenings, vaccinations and lifestyle guidance for long-term wellbeing.", benefits: ["Annual checkups","Vaccinations","Health risk reviews"], related: ["General medicine"] },
  { icon: ClipboardCheck, name: "Health Checkups", desc: "Affordable, structured packages tailored to age, gender and lifestyle.", benefits: ["Basic to executive packages","Personalized reports","Doctor consultation included"], related: ["Diagnostics", "Preventive care"] },
];

function ServicesPage() {
  return (
    <div>
      <PageHeader eyebrow="Our Services" title="Specialist care, made accessible." subtitle="Comprehensive medical services across general and emergency specialties — under one trusted roof." />
      <section className="py-20">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {services.map((s,i) => (
            <motion.div key={s.name} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(i%2)*0.06}}
              className="group rounded-3xl bg-white border border-border p-8 hover:border-brand-accent hover:shadow-xl hover:shadow-brand/5 transition">
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                  <div className="mt-5 grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand font-semibold mb-2">Benefits</div>
                      <ul className="text-sm space-y-1.5 text-muted-foreground">
                        {s.benefits.map(b => <li key={b} className="flex gap-2"><span className="text-brand-accent">•</span>{b}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand font-semibold mb-2">Related</div>
                      <ul className="text-sm space-y-1.5 text-muted-foreground">
                        {s.related.map(r => <li key={r} className="flex gap-2"><span className="text-brand-accent">•</span>{r}</li>)}
                      </ul>
                    </div>
                  </div>
                  <Link to="/appointment" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                    Book this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
