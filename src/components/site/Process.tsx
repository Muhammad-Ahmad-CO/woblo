import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Briefing",
    text: "We dig into your product, audience and the feeling the brand should leave behind.",
  },
  {
    n: "02",
    title: "Concept",
    text: "Art direction, references, motion language. One bold idea instead of ten safe ones.",
  },
  {
    n: "03",
    title: "Design",
    text: "Screens, type systems, 3D and CGI frames — crafted pixel by pixel.",
  },
  {
    n: "04",
    title: "Build",
    text: "WebGL, animation and clean code. Fast, responsive, alive on every scroll.",
  },
  {
    n: "05",
    title: "Launch",
    text: "We ship, measure and keep polishing. Five days from spark to live.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="process" className="px-4 py-16 md:px-8 md:py-24">
      <div className="hair-t flex flex-wrap items-baseline justify-between gap-4 pt-6">
        <h2 className="display text-[13vw] md:text-[7vw]">How we work</h2>
        <span className="label text-foreground/50">( 5 days )</span>
      </div>

      <div ref={ref} className="relative mt-12 md:pl-[38%]">
        <div className="absolute left-0 top-0 hidden h-full w-px bg-foreground/12 md:block md:left-[36%]">
          <motion.div style={{ height: lineH }} className="w-px bg-acid" />
        </div>

        <div className="flex flex-col">
          {STEPS.map((s) => (
            <Reveal key={s.n}>
              <div className="hair-b group flex items-start gap-6 py-8 transition-colors hover:bg-foreground/[0.03] md:gap-10">
                <span className="label mt-2 text-foreground/40 transition-colors group-hover:text-foreground">
                  {s.n}
                </span>
                <div>
                  <h3 className="display text-4xl transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-foreground/60 md:text-base">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
