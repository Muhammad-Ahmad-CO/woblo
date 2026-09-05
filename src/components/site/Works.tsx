import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./Reveal";
import furniture from "@/assets/case-furniture.jpg";
import safepoker from "@/assets/case-safepoker.jpg";
import expo from "@/assets/case-expo.jpg";
import chillbase from "@/assets/case-chillbase.jpg";
import visa from "@/assets/case-visa.jpg";

type Work = {
  title: string;
  img: string;
  tags: string[];
  status?: string;
  statusTone?: "acid" | "pink" | "orange";
  year: string;
};

const WORKS: Work[] = [
  {
    title: "Furniture for life",
    img: furniture,
    tags: ["CGI", "Sites"],
    year: "2025",
  },
  {
    title: "Safepoker",
    img: safepoker,
    tags: ["Interfaces", "CGI", "Sites"],
    status: "In progress",
    statusTone: "acid",
    year: "2025",
  },
  {
    title: "Interactive 3D exhibition map",
    img: expo,
    tags: ["Interfaces", "CGI"],
    status: "Concept",
    statusTone: "orange",
    year: "2024",
  },
  {
    title: "Chillbase",
    img: chillbase,
    tags: ["Sites", "CGI"],
    status: "Online",
    statusTone: "pink",
    year: "2024",
  },
  {
    title: "Visa center",
    img: visa,
    tags: ["Sites"],
    status: "Online",
    statusTone: "pink",
    year: "2024",
  },
];

const toneClass: Record<string, string> = {
  acid: "bg-acid text-acid-foreground",
  pink: "bg-[oklch(0.78_0.18_355)] text-ink",
  orange: "bg-[oklch(0.72_0.19_40)] text-ink-foreground",
};

export function Works() {
  return (
    <section id="cases" className="px-4 py-16 md:px-8 md:py-24">
      <div className="hair-t flex flex-wrap items-baseline justify-between gap-4 pt-6">
        <h2 className="display text-[13vw] md:text-[7vw]">Best works</h2>
        <a href="#contacts" data-cursor="ALL" className="label hover:opacity-50">
          All cases →
        </a>
      </div>

      <div className="mt-10 flex flex-col gap-20 md:gap-32">
        {WORKS.map((w, i) => (
          <WorkCard key={w.title} work={w} index={i} />
        ))}
      </div>
    </section>
  );
}

function WorkCard({ work, index }: { work: Work; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const offset = index % 2 === 0 ? "md:mr-[12%]" : "md:ml-[12%]";

  return (
    <article ref={ref} className={offset}>
      <Reveal>
        <a
          href="#contacts"
          data-cursor="CLICK ME"
          className="group relative block overflow-hidden rounded-lg bg-ink"
        >
          <div className="aspect-[16/10] overflow-hidden">
            <motion.img
              src={work.img}
              alt={work.title}
              width={1400}
              height={1000}
              loading="lazy"
              style={{ y: imgY, scale: 1.16 }}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.22]"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 md:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="display rounded-sm bg-background/90 px-3 py-1 text-lg text-foreground md:text-2xl">
                {work.title}
              </span>
              {work.status && (
                <span
                  className={`label rounded-sm px-2 py-1 ${toneClass[work.statusTone ?? "acid"]}`}
                >
                  {work.status}
                </span>
              )}
            </div>
            <div className="flex items-end justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {work.tags.map((t) => (
                  <span
                    key={t}
                    className="label rounded-full border border-ink-foreground/40 bg-ink/40 px-3 py-1 text-ink-foreground backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="label text-ink-foreground/80">#{work.year}</span>
            </div>
          </div>
        </a>
      </Reveal>
    </article>
  );
}
