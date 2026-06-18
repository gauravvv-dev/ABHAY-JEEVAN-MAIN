import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/SiteLayout";
import { ShieldCheck, HeartHandshake, Award, Sparkles, Users, Building2 } from "lucide-react";
import building from "@/assets/building.jpg";
import team from "@/assets/team.jpg";
import reception from "@/assets/reception.jpg";
import icu from "@/assets/icu.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Abhay Jeevan Hospital, Prayagraj" },
      { name: "description", content: "Learn about Abhay Jeevan Hospital in Jhusi, Prayagraj — our mission, vision, infrastructure and commitment to patient-first healthcare." },
      { property: "og:title", content: "About Abhay Jeevan Hospital" },
      { property: "og:description", content: "Trusted multi-specialty hospital in Jhusi, Prayagraj." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="About Us" title="Healing hands. Honest care." subtitle="A community hospital with a single promise — to look after every patient like family." />

      <section className="py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <div className="eyebrow mb-3">Our Story</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Built in Jhusi, for the people of Prayagraj.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Abhay Jeevan Hospital was founded with a clear purpose: to bring reliable, affordable, multi-specialty medical care closer to the families of Jhusi and greater Prayagraj. What began as a small clinic has grown into a trusted community hospital — with experienced consultants, modern diagnostics, and a dedicated nursing team.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every protocol, every room, every conversation is designed around one principle — patients first.
            </p>
          </motion.div>
          <motion.img initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.7}}
            src={building} alt="Abhay Jeevan Hospital building" className="rounded-3xl shadow-2xl shadow-brand/15" loading="lazy" width={1600} height={900} />
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-page grid md:grid-cols-2 gap-8">
          {[
            { icon: HeartHandshake, title: "Our Mission", text: "To deliver compassionate, ethical and accessible healthcare to every patient who walks through our doors — regardless of background or means." },
            { icon: Sparkles, title: "Our Vision", text: "To be Prayagraj's most trusted community hospital — known for clinical excellence, transparent care, and a culture of kindness." },
          ].map((b,i) => (
            <motion.div key={b.title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
              className="bg-white rounded-3xl p-10 border border-border">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-accent"><b.icon className="h-5 w-5" /></div>
              <h3 className="text-2xl font-bold mt-5">{b.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <div className="eyebrow mb-3">Why Choose Us</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Quality care, without compromise.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { icon: ShieldCheck, t: "Safe protocols", d: "NABH-aligned clinical standards across every department." },
              { icon: Award, t: "Experienced doctors", d: "Specialists with decades of combined clinical practice." },
              { icon: Users, t: "Patient-first culture", d: "Time, empathy and clarity at every consultation." },
              { icon: Building2, t: "Modern infrastructure", d: "Modular ICU, digital diagnostics, comfortable rooms." },
            ].map((b,i) => (
              <motion.div key={b.t} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}}
                className="rounded-2xl p-7 border border-border bg-white hover:border-brand-accent transition">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-accent"><b.icon className="h-5 w-5" /></div>
                <h3 className="font-semibold mt-5">{b.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{b.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand text-brand-foreground">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[["15+","Specialists"],["50+","Healthcare staff"],["20,000+","Patients served"],["24/7","Emergency care"]].map(([n,l]) => (
            <div key={l}>
              <div className="font-display text-4xl lg:text-5xl font-bold text-white">{n}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/70 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="eyebrow mb-3">Our Spaces</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">Designed for healing.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[team, reception, icu].map((src, i) => (
              <motion.div key={i} initial={{opacity:0,scale:0.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.08}}
                className="overflow-hidden rounded-2xl border border-border">
                <img src={src} alt="Hospital" className="w-full h-72 object-cover hover:scale-105 transition duration-700" loading="lazy" />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery" className="btn-ghost">View full gallery</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
