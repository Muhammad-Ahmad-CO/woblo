import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal, RevealWords } from "./Reveal";
import blobDark from "@/assets/blob-dark.png";

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden px-4 py-24 md:px-8 md:py-36 md:pl-24">
      <motion.img
        src={blobDark}
        alt="Dark foil infinity sculpture"
        width={1000}
        height={800}
        loading="lazy"
        style={{ y, rotate }}
        className="pointer-events-none absolute right-[6vw] top-[8%] w-[42vw] max-w-[520px] opacity-95"
      />
      <h2 className="display relative z-10 max-w-[16ch] text-[12vw] md:text-[7vw]">
        <RevealWords text="Living interactive things you want to touch again and again" />
      </h2>

      <div className="relative z-10 mt-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <Reveal>
          <a
            href="#cases"
            data-cursor="PLAY"
            className="group flex items-center gap-4 rounded-full border border-foreground/25 px-5 py-3 transition-colors hover:bg-foreground hover:text-background"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-acid text-acid-foreground transition-transform group-hover:scale-110">
              ▶
            </span>
            <span className="label">
              Watch
              <br />
              showreel
            </span>
          </a>
        </Reveal>
        <Reveal delay={0.1} className="max-w-md">
          <p className="text-lg leading-snug md:text-xl">
            We bring ideas and digital solutions to life by turning them into emotions. Because it's
            emotions that make users trust, engage, and choose.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
