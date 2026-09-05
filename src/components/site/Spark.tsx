import { Reveal } from "./Reveal";
import eye from "@/assets/spark-eye.jpg";

export function Spark() {
  return (
    <section id="spark" className="bg-acid px-4 py-20 text-acid-foreground md:px-8 md:py-28">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="display text-[14vw] md:text-[8vw]">Visual ideas</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <img
            src={eye}
            alt="Macro photo of an eye with a starburst reflection"
            width={1200}
            height={800}
            loading="lazy"
            className="my-4 w-[70vw] max-w-[520px] rounded-md object-cover md:my-2"
          />
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="display text-[14vw] md:text-[8vw]">In 5 days</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl text-base md:text-lg">
            Start your project with an idea. "Spark" is a visual concept we create in 5 days. It
            becomes the basis for the website, advertising campaign, video and identity.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="#contacts"
            data-cursor="SPARK"
            className="mt-10 inline-flex items-center gap-3 border border-acid-foreground bg-acid-foreground px-6 py-4 text-acid transition-colors hover:bg-transparent hover:text-acid-foreground"
          >
            <span className="label">View details</span>
            <span>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
