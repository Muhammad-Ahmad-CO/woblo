import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Reveal } from "./Reveal";

const AWARDS = [
  { name: "CSSDA", count: "26" },
  { name: "Awwwards", count: "18" },
  { name: "Behance", count: "05" },
  { name: "FWA", count: "11" },
  { name: "AWS", count: "07" },
];

function Counter({ to, duration = 1600 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{value}</span>;
}

export function Achievements() {
  return (
    <section id="awards" className="bg-ink px-4 py-20 text-ink-foreground md:px-8 md:py-28">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <Reveal>
          <h2 className="display text-[13vw] md:text-[7vw]">Achievements</h2>
        </Reveal>
        <span className="label text-ink-foreground/60">All awards →</span>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <ul className="flex flex-wrap gap-x-10 gap-y-8">
          {AWARDS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.06}>
              <li data-cursor="AWARD" className="group flex items-start gap-2">
                <span className="display text-4xl transition-colors group-hover:text-acid md:text-6xl">
                  {a.name}
                </span>
                <span className="label pt-2 text-ink-foreground/60">{a.count}</span>
              </li>
            </Reveal>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center rounded-xl border border-ink-foreground/15 bg-ink-foreground/5 p-10 text-center backdrop-blur"
        >
          <span className="display text-[22vw] leading-none md:text-[10vw]">
            <Counter to={15} />
          </span>
          <span className="label mt-3 text-ink-foreground/70">( Years of work )</span>
          <p className="mt-6 max-w-xs text-sm text-ink-foreground/70">
            Among the creativity rating of design studios of the region — a team of 40 designers,
            developers and 3D artists.
          </p>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-col items-center gap-4 text-center">
        <span className="label text-ink-foreground/60">( People )</span>
        <p className="max-w-lg text-lg">
          Eager to transform the digital world and make it better with each new project.
        </p>
      </div>
    </section>
  );
}
