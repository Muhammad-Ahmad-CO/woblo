import { Reveal } from "./Reveal";
import sites from "@/assets/svc-sites.jpg";
import interfaces from "@/assets/svc-interfaces.jpg";
import graphics from "@/assets/svc-graphics.jpg";

const SERVICES = [
  {
    title: "Sites",
    img: sites,
    text: "We make websites not like everyone else's — with elaborate animation, high-quality content and a creative concept.",
  },
  {
    title: "Interfaces",
    img: interfaces,
    text: "Web and mobile applications for modern products and services that need to stand out from competitors or surprise a sophisticated user.",
  },
  {
    title: "Graphics",
    img: graphics,
    text: "Graphic content of any complexity for websites, games, apps, social media, and other marketing communication channels.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="display text-[13vw] md:text-[7vw]">Major services</h2>
      </Reveal>

      <div className="mt-12 grid gap-px bg-foreground/12 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <article
              data-cursor="LEARN MORE"
              className="group flex h-full flex-col gap-6 bg-background p-6 transition-colors hover:bg-foreground hover:text-background md:p-8"
            >
              <h3 className="display text-4xl md:text-5xl">{s.title}</h3>
              <div className="overflow-hidden rounded-md">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-sm leading-relaxed opacity-80">{s.text}</p>
              <span className="label mt-auto inline-flex items-center gap-2">Learn more ↗</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
