import { createFileRoute } from "@tanstack/react-router";
import { Chrome } from "@/components/site/Chrome";
import { Cursor } from "@/components/site/Cursor";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Works } from "@/components/site/Works";
import { Spark } from "@/components/site/Spark";
import { Services } from "@/components/site/Services";
import { Achievements } from "@/components/site/Achievements";
import { Clients } from "@/components/site/Clients";
import { Contact } from "@/components/site/Contact";
import { Marquee } from "@/components/site/Marquee";
import { Process } from "@/components/site/Process";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Grain } from "@/components/site/Grain";

const TITLE = "Woblo — Creative Digital Studio for Sites, 3D & WebGL";
const DESCRIPTION =
  "Woblo is a creative studio making websites unlike everyone else's — elaborate animation, WebGL, CGI graphics, interfaces and visual concepts in 5 days.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Grain />
      <ScrollProgress />
      <Cursor />
      <Chrome />
      <Hero />
      <Manifesto />
      <div className="hair-t hair-b py-4">
        <Marquee items={["Sites", "Interfaces", "CGI", "WebGL", "Spark"]} duration={30} />
      </div>
      <Works />
      <Spark />
      <Services />
      <Process />
      <Achievements />
      <Clients />
      <Contact />
    </main>
  );
}
