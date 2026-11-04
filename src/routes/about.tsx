import { createFileRoute } from "@tanstack/react-router";
import copper from "@/assets/copper_close.jpg";
import truck from "@/assets/scrap_truck.jpg";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Ultimate Metal Recyclers Sydney" },
      { name: "description", content: "Learn about Ultimate Metal Recyclers, St Marys — integrity, innovation and sustainability in every load." },
      { property: "og:title", content: "About Ultimate Metal Recyclers" },
      { property: "og:description", content: "Sydney's trusted partner in metal recycling excellence." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero title="About Us" sub="Integrity, innovation and sustainability in every load." />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div className="space-y-5 text-muted-foreground">
          <h2 className="text-4xl font-bold text-foreground">We don't waste metal — <span className="text-copper">we transform it</span></h2>
          <p>Ultimate Metal Recyclers is one of Sydney's most trusted names in metal recycling, with experience across industrial, commercial and residential work.</p>
          <p>Our mission is to deliver reliable, eco-conscious, high-value solutions for every customer — giving metals a second life while paying fair prices.</p>
          <p>We operate with strict adherence to environmental standards and safety regulations, so every process meets the highest industry benchmarks.</p>
        </div>
        <div className="grid gap-6">
          <img src={copper} alt="Copper and brass ready for recycling" width={1200} height={912} loading="lazy" className="w-full rounded-3xl object-cover shadow-copper" />
          <img src={truck} alt="Our collection truck picking up household scrap" width={1024} height={1024} loading="lazy" className="w-full rounded-3xl object-cover shadow-copper" />
        </div>
      </section>
    </>
  );
}
