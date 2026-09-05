import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import blobGold from "@/assets/blob-gold.png";

const NAV = [
  { label: "Cases", href: "#cases" },
  { label: "About studio", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contacts", href: "#contacts" },
];

const MENU_MAIN = [
  { label: "Main", href: "#top" },
  { label: "Cases", href: "#cases" },
  { label: "About studio", href: "#about" },
  { label: "Publications", href: "#awards" },
];

const MENU_SERVICES = [
  { label: "Sites", href: "#services" },
  { label: "Interfaces", href: "#services" },
  { label: "Visuals", href: "#services" },
  { label: "Spark", href: "#spark" },
];

const MENU_FOOT = [
  { label: "Career", href: "#contacts" },
  { label: "Contacts", href: "#contacts" },
];

export function Chrome() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* top bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-4 mix-blend-difference md:px-8">
        <a href="#top" data-cursor="TOP" className="flex items-center gap-3">
          <img
            src={blobGold}
            alt="Woblo studio mark"
            width={1200}
            height={912}
            className="floaty h-9 w-auto md:h-11"
          />
          <span className="display text-lg text-white md:text-xl">Woblo</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              data-cursor="GO"
              className="label text-white/90 transition-opacity hover:opacity-50"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(true)}
          className="label text-white md:hidden"
          aria-label="Open menu"
        >
          Menu
        </button>
      </header>

      {/* left rail menu button */}
      <button
        onClick={() => setOpen(true)}
        data-cursor="OPEN"
        aria-label="Open menu"
        className={`fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-foreground/25 bg-background/70 px-4 py-2 backdrop-blur transition-all md:flex ${
          scrolled ? "opacity-100" : "opacity-90"
        } hover:bg-foreground hover:text-background`}
      >
        <span className="label">Menu</span>
      </button>

      {/* bottom-left scroll ticker */}
      <div className="pointer-events-none fixed bottom-6 left-6 z-40 hidden items-center gap-2 md:flex">
        <span className="spin-slow inline-block h-3 w-3 border border-foreground/50" />
        <span className="label text-foreground/60">{scrolled ? "Keep going" : "Scroll"}</span>
      </div>

      {/* bottom-right contact chip */}
      <a
        href="#contacts"
        data-cursor="WRITE"
        className="fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-110 md:flex"
        aria-label="Write to us"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
          <path d="M3 6h18v12H3z" strokeWidth="1.4" />
          <path d="m3 7 9 6 9-6" strokeWidth="1.4" />
        </svg>
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close menu"
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-4 left-4 flex w-[min(92vw,560px)] flex-col justify-center gap-8 overflow-y-auto bg-ink px-10 py-14 text-ink-foreground"
            >
              <button
                onClick={() => setOpen(false)}
                className="label absolute right-8 top-8 text-ink-foreground/70 hover:text-ink-foreground"
              >
                Close
              </button>

              <div className="flex flex-col items-center gap-1 text-center">
                {MENU_MAIN.map((m, i) => (
                  <MenuLink key={m.label} {...m} i={i} onClick={() => setOpen(false)} />
                ))}
              </div>

              <div className="flex flex-col items-center gap-1 text-center">
                <span className="label mb-3 text-ink-foreground/50">( Services )</span>
                {MENU_SERVICES.map((m, i) => (
                  <MenuLink key={m.label} {...m} i={i + 4} onClick={() => setOpen(false)} />
                ))}
              </div>

              <div className="flex flex-col items-center gap-1 text-center">
                {MENU_FOOT.map((m, i) => (
                  <MenuLink key={m.label} {...m} i={i + 8} onClick={() => setOpen(false)} />
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuLink({
  label,
  href,
  i,
  onClick,
}: {
  label: string;
  href: string;
  i: number;
  onClick: () => void;
}) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      data-cursor="GO"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="display text-3xl transition-colors hover:text-acid md:text-4xl"
    >
      {label}
    </motion.a>
  );
}
