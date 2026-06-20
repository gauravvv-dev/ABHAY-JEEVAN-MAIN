import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CalendarPlus, Siren, Stethoscope, PhoneCall,
  HeartPulse, Baby, Bone, Activity, Microscope, Sparkles,
  MapPin, Phone, Star, Quote, ShieldCheck, Clock,
} from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.png";
import heroDoctorMobile from "@/assets/hero-doctor-mobile.png";
import teamImg from "@/assets/team.jpg";
import doc1Asset from "@/assets/doctor1.jpg";
import doc2Asset from "@/assets/doctor2.jpg";
import doc3Asset from "@/assets/doctor3.jpg";

const doc1 = doc1Asset;
const doc2 = doc2Asset;
const doc3 = doc3Asset;
import icuImg from "@/assets/icu.jpg";
import roomImg from "@/assets/room.jpg";
import receptionImg from "@/assets/reception.jpg";
import diagImg from "@/assets/diagnostics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vardan Hospital & Maternity Centre | Trusted Healthcare in Jhusi, Prayagraj" },
      { name: "description", content: "Vardan Hospital & Maternity Centre in Jhusi, Prayagraj — expert doctors, 24/7 emergency, diagnostics, pediatrics, gynecology and orthopedics under one roof." },
      { property: "og:title", content: "Vardan Hospital & Maternity Centre | Trusted Healthcare in Jhusi, Prayagraj" },
      { property: "og:description", content: "Compassionate, family-centered care in Prayagraj. Book an appointment today." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const departments = [
  { icon: HeartPulse, name: "General Medicine", desc: "Comprehensive primary care for adults and seniors." },
  { icon: Bone, name: "Orthopedics", desc: "Bone, joint and spine care with modern surgical options." },
  { icon: Baby, name: "Pediatrics", desc: "Gentle, attentive care for newborns to teenagers." },
  { icon: Activity, name: "Gynecology", desc: "Women's health, prenatal care and safe deliveries." },
  { icon: Siren, name: "Emergency Care", desc: "24×7 trauma response with rapid stabilization." },
  { icon: Microscope, name: "Diagnostics", desc: "In-house lab, imaging and pathology services." },
];

const facilities = [
  { img: icuImg, name: "Intensive Care Unit", desc: "Advanced monitoring and round-the-clock intensivist coverage." },
  { img: roomImg, name: "Private Patient Rooms", desc: "Quiet, sunlit rooms designed for restful recovery." },
  { img: diagImg, name: "Imaging & Diagnostics", desc: "Digital X-ray, ultrasound and CT under one roof." },
  { img: receptionImg, name: "Welcoming Reception", desc: "Calm, efficient check-in and patient assistance." },
];

const testimonials = [
  { name: "Anita Verma", role: "Patient, Jhusi", text: "From the front desk to the doctors, every step felt warm and reassuring. My mother received excellent care during her surgery." },
  { name: "Rajesh Singh", role: "Father of patient", text: "We rushed in at midnight and the emergency team was ready. Quick, clean, professional — exactly what a family needs in a crisis." },
  { name: "Pooja Mishra", role: "Patient, Prayagraj", text: "Modern facilities, fair pricing and doctors who actually listen. Easily the best hospital experience I've had in years." },
];

function HomePage() {
  return (
    <div>
      {/* HERO WRAPPER WITH QUICK ACTION CARDS */}
      <div className="relative">
        {/* HERO - DESKTOP */}
        <section className="relative overflow-hidden bg-brand-soft hidden lg:block">
          <div className="absolute inset-0">
            <img
              src={heroDoctor}
              alt="Doctor at Vardan Hospital & Maternity Centre"
              className="w-full h-full object-cover object-right [filter:contrast(1.08)_saturate(1.15)_brightness(1.02)]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 via-40% to-transparent to-60%" />
          </div>
          <div className="container-page relative pt-28 pb-36 grid lg:grid-cols-2 gap-10">
            <motion.div {...fadeUp} className="max-w-xl">
              <div className="eyebrow mb-5">Caring for Life</div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.05]">
                Compassionate Healthcare<br />
                <span className="text-brand-accent">for Every Family.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                Trusted medical care in Jhusi, Prayagraj — combining experienced specialists, modern infrastructure and a patient-first approach since our doors first opened.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/appointment" className="btn-primary"><CalendarPlus className="h-4 w-4" /> Book Appointment</Link>
                <Link to="/contact" className="btn-ghost"><PhoneCall className="h-4 w-4" /> Contact Hospital</Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-accent" /> NABH-aligned protocols</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-accent" /> 24/7 Emergency</div>
                <div className="flex items-center gap-2"><Star className="h-4 w-4 text-brand-accent" /> 4.8 / 5 patient rating</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HERO - MOBILE */}
        <section className="relative overflow-hidden bg-brand-soft lg:hidden">
          <motion.div {...fadeUp} className="w-screen -mx-[calc((100vw-100%)/2)]">
            <img
              src={heroDoctorMobile}
              alt="Doctors at Vardan Hospital & Maternity Centre"
              className="w-full h-[70vw] min-h-[300px] max-h-[500px] object-cover object-top"
              loading="lazy"
            />
          </motion.div>

          <motion.div {...fadeUp} className="px-6 pt-6 pb-8 text-center">
            <div className="eyebrow mb-2">Caring for Life</div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-[1.15]">
              Compassionate <br />
              Healthcare{" "}
              <span className="text-brand-accent">for Every Family.</span>
            </h1>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs mx-auto">
              Expert specialists, modern facilities, and 24/7 emergency care —
              trusted by families across Prayagraj.
            </p>
            <div className="mt-6 flex flex-col gap-3 max-w-xs mx-auto">
              <Link to="/appointment" className="btn-primary w-full justify-center">
                <CalendarPlus className="h-4 w-4" /> Book Appointment
              </Link>
              <Link to="/contact" className="btn-ghost w-full justify-center">
                <PhoneCall className="h-4 w-4" /> Contact Hospital
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Quick action cards overlap */}
        <div className="container-page relative py-6 lg:py-0 lg:-mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {[
              { icon: CalendarPlus, title: "Book Appointment", desc: "Reserve a slot online", to: "/appointment", tone: "brand" },
              { icon: Siren, title: "Emergency", desc: "24/7 rapid response", to: "/contact", tone: "accent" },
              { icon: Stethoscope, title: "Find a Doctor", desc: "Meet our specialists", to: "/doctors", tone: "soft" },
              { icon: PhoneCall, title: "Contact Us", desc: "+91 98765 43210", to: "/contact", tone: "soft" },
            ].map((a, i) => (
              <motion.div key={a.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link to={a.to} className={`group block rounded-2xl p-4 lg:p-6 shadow-lg shadow-brand/5 border border-border bg-white hover:-translate-y-1 transition-all`}>
                  <div className={`grid h-10 w-10 lg:h-12 lg:w-12 place-items-center rounded-xl mb-3 lg:mb-4 ${a.tone === "brand" ? "bg-brand text-brand-foreground"
                      : a.tone === "accent" ? "bg-destructive text-white"
                        : "bg-brand-soft text-brand-accent"
                    }`}>
                    <a.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                  </div>
                  <div className="font-semibold text-brand text-sm lg:text-base leading-snug">{a.title}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{a.desc}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <div className="eyebrow mb-3">About Vardan Hospital & Maternity Centre</div>
            <h2 className="text-3xl lg:text-4xl font-bold">A hospital built on trust, in the heart of Jhusi.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Vardan Hospital & Maternity Centre is a multi-specialty healthcare centre serving the families of Prayagraj and surrounding regions. We bring together specialist doctors, dedicated nursing staff and modern medical infrastructure under one roof — so every patient receives timely, honest and complete care.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[["15+", "Specialists"], ["20K+", "Patients served"], ["24/7", "Emergency care"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl font-display font-bold text-brand-accent">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-ghost mt-8">Learn more about us</Link>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand-soft" />
            <img src={receptionImg} alt="Hospital reception" className="relative rounded-3xl shadow-2xl shadow-brand/15" loading="lazy" width={1200} height={800} />
          </motion.div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="container-page">
          <motion.div {...fadeUp} className="max-w-2xl">
            <div className="eyebrow mb-3">Our Departments</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Specialist care for every stage of life.</h2>
            <p className="mt-4 text-muted-foreground">From routine consultations to advanced procedures, our departments work together to deliver coordinated, evidence-based care.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {departments.map((d, i) => (
              <motion.div key={d.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl bg-white p-7 border border-border hover:border-brand-accent hover:shadow-xl hover:shadow-brand/5 transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mt-5">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTHCARE TEAM */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <div className="eyebrow mb-3">Our People</div>
            <h2 className="text-3xl lg:text-5xl font-bold">Meet Our Dedicated Healthcare Team</h2>
            <p className="mt-4 text-muted-foreground">Doctors, nurses, technicians and support staff — united by a single mission: better outcomes, kinder care.</p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="relative mt-12">
            <img src={teamImg} alt="Vardan Hospital & Maternity Centre healthcare team" className="rounded-3xl shadow-2xl shadow-brand/15 w-full" loading="lazy" width={1600} height={900} />
          </motion.div>
        </div>
      </section>

      {/* LEAD DOCTORS */}
      <section className="py-20 lg:py-24 bg-brand-soft">
        <div className="container-page">
          <motion.div {...fadeUp} className="max-w-2xl">
            <div className="eyebrow mb-3">Lead Doctors</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Experienced specialists you can trust.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              { img: doc1, name: "Dr. A.P. Singh", spec: "Gastro & Laparoscopic Surgery", exp: "Senior Consultant", qual: "MBBS, MS", opdTimings: ["Mon - Sat: 9:00 AM - 2:00 PM", "Evening: 5:00 PM - 8:00 PM"], bio: "Specialist in Laparoscopic Gall Bladder & Appendix Surgery, Hernia & Colorectal Treatments, Laser Piles Fissure & Fistula Surgery and Endoscopy & Liver Care at Vardan Hospital & Maternity Centre." },

              { img: doc2, name: "Dr. Pramesh Srivastava", spec: "General Medicine", exp: "Senior Consultant", qual: "MBBS, MD", opdTimings: ["Mon - Sat: 9:00 AM - 2:00 PM", "Evening: 5:00 PM - 8:00 PM"], bio: "Specialist in diagnosis and treatment of fever, viral and bacterial infections, seasonal illness and comprehensive patient care at Vardan Hospital & Maternity Centre." },

              { img: doc3, name: "Dr. Abhishek Singh", spec: "General Medicine", exp: "MD Physician", qual: "MD", opdTimings: ["Mon - Sat: 9:00 AM - 2:00 PM", "Evening: 5:00 PM - 8:00 PM"], bio: "Dedicated MD Physician providing comprehensive healthcare with expert consultation, advanced medical diagnostics and compassionate patient care at Vardan Hospital & Maternity Centre." },
            ].map((d, i) => (
              <motion.div key={d.name} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-brand/5 grid sm:grid-cols-[200px_1fr]">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover" loading="lazy" width={800} height={1024} />
                <div className="p-7">
                  <h3 className="text-xl font-semibold">{d.name}</h3>
                  <div className="text-sm text-brand-accent font-medium mt-1">{d.spec}</div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{d.bio}</p>
                  <Link to="/doctors" className="text-sm font-semibold text-brand-accent mt-4 inline-block">View profile →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <motion.div {...fadeUp} className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div className="max-w-xl">
              <div className="eyebrow mb-3">Facilities</div>
              <h2 className="text-3xl lg:text-4xl font-bold">Built for outcomes. Designed for comfort.</h2>
            </div>
            <Link to="/gallery" className="btn-ghost">Explore gallery</Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((f, i) => (
              <motion.div key={f.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.06 }} className="group rounded-2xl overflow-hidden border border-border bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold">{f.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="container-page">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <div className="eyebrow mb-3">Patient Stories</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Real care, in their words.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-white p-7 border border-border relative">
                <Quote className="absolute top-6 right-6 h-6 w-6 text-brand-soft" />
                <div className="flex gap-1 text-brand-accent mb-4">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="py-12">
        <div className="container-page">
          <motion.div {...fadeUp} className="rounded-3xl bg-brand text-brand-foreground p-8 lg:p-12 grid lg:grid-cols-[1fr_auto] gap-6 items-center overflow-hidden relative">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-accent/30 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-accent font-semibold">
                <Siren className="h-4 w-4" /> 24/7 Emergency
              </div>
              <h3 className="text-white text-2xl lg:text-3xl font-bold mt-3">In an emergency, every minute matters.</h3>
              <p className="text-white/75 mt-2 max-w-xl">Our emergency team is ready around the clock to respond, stabilize and care for you.</p>
            </div>
            <a href="tel:+919876543210" className="btn-primary relative whitespace-nowrap"><Phone className="h-4 w-4" /> Call +91 98765 43210</a>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-24">
        <div className="container-page">
          <motion.div {...fadeUp} className="mb-8">
            <div className="eyebrow mb-3">Visit Us</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Find Vardan Hospital & Maternity Centre</h2>
            <p className="text-muted-foreground mt-3 inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-accent" /> Jhusi, Prayagraj, Uttar Pradesh 211019</p>
          </motion.div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-brand/5">
            <iframe
              title="Vardan Hospital & Maternity Centre location"
              src="https://www.google.com/maps?q=Jhusi,Prayagraj,Uttar+Pradesh&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
