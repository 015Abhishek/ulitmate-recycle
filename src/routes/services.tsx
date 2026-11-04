import { createFileRoute } from "@tanstack/react-router";
import { BIZ, CopperButton, PageHero, SERVICES } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Scrap Metal Recycling Services Sydney | Ultimate Metal Recyclers" },
      { name: "description", content: "Residential, commercial, industrial, car and e-waste scrap metal recycling across Sydney." },
      { property: "og:title", content: "Our Services | Ultimate Metal Recyclers" },
      { property: "og:description", content: "Every kind of scrap metal recycling, from home pickups to industrial clearances." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero title="Our Services" sub="From a single fridge to a full factory clearance — we handle every kind of scrap metal." />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <div key={s.t} className="rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-copper">
            <span className="font-display text-3xl text-copper">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl">{s.t}</h3>
            <p className="mt-2 text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
      <div className="pb-20 text-center"><CopperButton href={BIZ.tel}>Book a pickup</CopperButton></div>
    </>
  );
}
