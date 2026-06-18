import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { PageHeader } from "@/components/SiteLayout";
import { doc1, doc2 } from "@/lib/doctor-images";
import { DoctorPhoto } from "@/components/DoctorPhoto";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Doctors & Team — Abhay Jeevan Hospital, Prayagraj" },
      { name: "description", content: "Meet the doctors, nurses and support staff at Abhay Jeevan Hospital, Jhusi, Prayagraj." },
      { property: "og:title", content: "Doctors & Team — Abhay Jeevan Hospital" },
      { property: "og:description", content: "Experienced specialists committed to patient-first care." },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

const leads = [
  { img: doc1, missingFile: "src/assets/doctor1.jpg", name: "Dr. Lal Ratnakar Singh", spec: "General Medicine", exp: "Senior Consultant", qual: "MBBS, MD", opdTimings: ["Mon - Sat: 10:00 AM - 2:00 PM", "Evening: 5:00 PM - 8:00 PM"], bio: "Senior physician at Abhay Jeevan Hospital with deep expertise in internal medicine, chronic disease management, diabetes care and preventive medicine." },
  { img: doc2, missingFile: "src/assets/doctor2.jpg", name: "Dr. Anjali Singh", spec: "Gynecology & Obstetrics", exp: "Senior Consultant", qual: "MBBS, MS, DNB, FMAS, GIMP", opdTimings: ["Mon - Sat: 9:30 AM - 1:30 PM", "Evening: 4:30 PM - 7:30 PM"], bio: "Specialist in high-risk pregnancies and minimally invasive gynecological surgery, with a calm, reassuring bedside manner and a strong focus on women's preventive health." },
];

function DoctorsPage() {
  return (
    <div>
      <PageHeader eyebrow="Doctors & Team" title="The people behind your care." subtitle="From senior consultants to the nurses by your bedside — every member of our team shares one goal: your wellbeing." />

      <section className="py-20">
        <div className="container-page">
          <div className="eyebrow mb-3">Lead Doctors</div>
          <h2 className="text-3xl lg:text-4xl font-bold">Senior consultants</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {leads.map((d, i) => (
              <motion.div key={d.name} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="bg-white rounded-3xl overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden bg-brand-soft">
                  <DoctorPhoto src={d.img} alt={d.name} missingFile={d.missingFile} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold">{d.name}</h3>
                  <div className="text-sm font-semibold text-brand-accent mt-1">{d.spec} · {d.exp}</div>
                  <div className="text-xs text-muted-foreground mt-1">{d.qual}</div>
                  
                  {d.opdTimings && (
                    <div className="mt-4 p-4 bg-brand-soft/50 border border-brand-soft rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-brand-accent" />
                        <span className="text-sm font-semibold text-brand">OPD Timings</span>
                      </div>
                      <div className="space-y-1">
                        {d.opdTimings.map((timing, idx) => (
                          <div key={idx} className="text-sm text-muted-foreground">
                            {timing}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-page">
          <div className="max-w-2xl">
            <div className="eyebrow mb-3">Our Team</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Nurses, technicians & support staff.</h2>
            <p className="mt-4 text-muted-foreground">
              Behind every successful outcome at Abhay Jeevan Hospital is a coordinated team of nurses, lab technicians, pharmacists, paramedics and patient-care coordinators — many of whom have been with us since the very beginning.
            </p>
          </div>
          <motion.img initial={{opacity:0,scale:0.97}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.7}}
            src={team} alt="Healthcare team" className="rounded-3xl shadow-2xl shadow-brand/15 mt-12 w-full" loading="lazy" width={1600} height={900} />
        </div>
      </section>
    </div>
  );
}
