import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/SiteLayout";
import building from "@/assets/building.jpg";
import reception from "@/assets/reception.jpg";
import room from "@/assets/room.jpg";
import icu from "@/assets/icu.jpg";
import diag from "@/assets/diagnostics.jpg";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Abhay Jeevan Hospital, Prayagraj" },
      { name: "description", content: "Photos of Abhay Jeevan Hospital — building, reception, treatment rooms, equipment and our healthcare team in Jhusi, Prayagraj." },
      { property: "og:title", content: "Gallery — Abhay Jeevan Hospital" },
      { property: "og:description", content: "Step inside our hospital." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: building, label: "Hospital Building", cat: "Building" },
  { src: reception, label: "Reception Area", cat: "Reception" },
  { src: room, label: "Patient Room", cat: "Patient Care" },
  { src: icu, label: "Intensive Care Unit", cat: "Equipment" },
  { src: diag, label: "Diagnostic Imaging", cat: "Equipment" },
  { src: team, label: "Healthcare Team", cat: "Team" },
];

function GalleryPage() {
  return (
    <div>
      <PageHeader eyebrow="Gallery" title="A look inside Abhay Jeevan Hospital." subtitle="From our welcoming reception to advanced diagnostics — every space is designed around the patient." />
      <section className="py-20">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((it, i) => (
              <motion.figure key={it.label} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(i%3)*0.06}}
                className="group rounded-2xl overflow-hidden border border-border bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={it.src} alt={it.label} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
                </div>
                <figcaption className="p-5 flex items-center justify-between">
                  <span className="font-semibold">{it.label}</span>
                  <span className="text-xs uppercase tracking-widest text-brand-accent">{it.cat}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
