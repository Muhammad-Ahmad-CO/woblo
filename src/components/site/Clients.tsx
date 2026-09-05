import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";

const CLIENTS = ["McDonald's", "Niko", "Darkside", "Gazprom", "Yandex", "Rosbank", "Lamoda"];

export function Clients() {
  return (
    <section className="overflow-hidden py-20 md:py-28">
      <div className="px-4 md:px-8">
        <Reveal>
          <h2 className="display text-[13vw] md:text-[7vw]">Key clients</h2>
        </Reveal>
      </div>

      <div className="mt-10 hair-t hair-b py-6">
        <Marquee items={CLIENTS} duration={34} />
      </div>

      <div className="mt-10 px-4 text-center md:px-8">
        <Reveal delay={0.08}>
          <p className="mx-auto max-w-xl text-base md:text-lg">
            We are able to work and make friends with internal teams of large companies, to realize
            and develop projects and creative ideas together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
