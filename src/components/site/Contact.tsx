import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";

export function Contact() {
  return (
    <footer id="contacts" className="bg-ink pt-16 text-ink-foreground">
      <Marquee items={["Let's talk", "Start a project"]} duration={26} separator="✳" />

      <div className="mt-16 grid gap-12 px-4 pb-10 md:grid-cols-3 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-2">
            <span className="label text-ink-foreground/50">( Write )</span>
            <a
              href="mailto:hello@woblo.studio"
              data-cursor="MAIL"
              className="display text-3xl hover:text-acid md:text-4xl"
            >
              hello@woblo.studio
            </a>
            <a
              href="tel:+10000000000"
              className="text-sm text-ink-foreground/70 hover:text-ink-foreground"
            >
              +1 000 000 00 00
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex flex-col gap-2">
            <span className="label text-ink-foreground/50">( Social )</span>
            {["Behance", "Instagram", "Dribbble", "Telegram"].map((s) => (
              <a
                key={s}
                href="#contacts"
                data-cursor="OPEN"
                className="text-lg text-ink-foreground/80 transition-colors hover:text-acid"
              >
                {s}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex flex-col gap-2">
            <span className="label text-ink-foreground/50">( Studio )</span>
            <p className="text-lg text-ink-foreground/80">
              Woblo — a creative digital studio building websites, interfaces and CGI worlds.
            </p>
            <a
              href="#top"
              data-cursor="TOP"
              className="label mt-4 inline-flex w-fit items-center gap-2 border border-ink-foreground/30 px-4 py-2 transition-colors hover:bg-acid hover:text-acid-foreground"
            >
              Back to top ↑
            </a>
          </div>
        </Reveal>
      </div>

      <div className="hair-t flex flex-col items-center justify-between gap-2 px-4 py-6 pb-16 text-xs text-ink-foreground/50 md:flex-row md:px-8">
        <span>© {new Date().getFullYear()} Woblo Studio</span>
        <span className="label">Made with elaborate animation</span>
      </div>
    </footer>
  );
}
