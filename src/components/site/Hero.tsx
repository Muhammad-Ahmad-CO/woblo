import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { RevealWords } from "./Reveal";
import rocks from "@/assets/rocks.jpg";
import blobGold from "@/assets/blob-gold.png";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rockY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const rockScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const blobRotate = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden">
      <div className="relative z-20 px-4 pt-28 md:px-8 md:pt-32">
        <h1 className="display max-w-[15ch] text-[13vw] leading-[0.84] md:text-[6.4vw]">
          <RevealWords text="We evoke emotions through aesthetics, WebGL and 3D" />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 max-w-sm text-base text-foreground/70 md:text-lg"
        >
          Websites, digital spaces,
          <br />
          AI and CGI graphics
        </motion.p>
      </div>

      {/* rocks band */}
      <motion.div
        style={{ y: rockY, scale: rockScale }}
        className="absolute inset-x-0 bottom-0 z-0 h-[62vh] origin-bottom"
      >
        <img
          src={rocks}
          alt="Monochrome rock formation"
          width={1920}
          height={1080}
          className="h-full w-full object-cover [mask-image:radial-gradient(120%_100%_at_50%_100%,#000_55%,transparent_100%)]"
        />
      </motion.div>

      {/* gold blob */}
      <motion.img
        src={blobGold}
        alt="Golden 3D sculpture"
        width={1200}
        height={912}
        style={{ y: blobY, rotate: blobRotate }}
        className="pointer-events-none absolute bottom-[6vh] left-1/2 z-10 w-[78vw] max-w-[900px] -translate-x-1/2 drop-shadow-2xl md:w-[52vw]"
        data-cursor="TOUCH"
      />

      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center">
        <span className="label text-foreground/50">( Scroll to explore )</span>
      </div>
    </section>
  );
}
