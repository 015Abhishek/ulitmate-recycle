import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Truck, DollarSign, Leaf } from "lucide-react";
import hero from "@/assets/hero_yard.jpg";
import copper from "@/assets/copper_close.jpg";
import truck from "@/assets/scrap_truck.jpg";
import aluminium from "@/assets/aluminium_scrap.jpg";
import carScrap from "@/assets/car_scrap.jpg";
import { BIZ, CopperButton, SERVICES } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ultimate Metal Recyclers | Cash for Scrap Metal Sydney" },
      { name: "description", content: "Sydney scrap metal recycling. Best prices for copper, aluminium, steel, brass and car scrap. Fast pickups from St Marys." },
      { property: "og:title", content: "Ultimate Metal Recyclers | Cash for Scrap Sydney" },
      { property: "og:description", content: "Best scrap metal prices in Sydney with fast, eco-friendly collection." },
    ],
  }),
  component: Index,
});

const metals = ["Copper", "Brass", "Aluminium", "Stainless Steel", "Steel", "Lead", "Car Bodies", "E-Waste"];

function Index() {
  return (
    <>
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <img src={hero} alt="Scrap metal yard in Sydney at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24">
          <p className="mb-4 font-display text-sm uppercase tracking-[0.3em] text-primary">Sydney's trusted metal recyclers</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] md:text-7xl">
            Cash for scrap.<br /><span className="text-copper">Care for the planet.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Fair prices meet responsible recycling. Residential, commercial and industrial pickups across Sydney.</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <CopperButton href={BIZ.tel}>Get a free quote</CopperButton>
            <Link to="/services" className="font-display uppercase tracking-widest text-foreground underline-offset-8 hover:underline">Our services →</Link>
          </div>
        </div>
      </section>

      <div className="bg-copper py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-2 px-4 font-display uppercase tracking-widest text-primary-foreground">
          {metals.map((m) => <span key={m}>{m}</span>)}
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 md:grid-cols-2">
        <img src={copper} alt="Sorted copper pipes and brass fittings" width={1200} height={912} loading="lazy" className="rounded-3xl w-full object-cover shadow-copper" />
        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Welcome</p>
          <h2 className="mt-3 text-4xl font-bold">Leaders in sustainable metal recycling</h2>
          <p className="mt-5 text-muted-foreground">We collect, process and recycle all ferrous and non-ferrous metals — copper, brass, aluminium, stainless steel, steel and lead. Every job is handled safely, efficiently and responsibly.</p>
          <ul className="mt-6 space-y-3">
            {["Fast collection and processing", "Competitive, transparent pricing", "Environmental responsibility"].map((t) => (
              <li key={t} className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-4xl font-bold">What we <span className="text-copper">recycle</span></h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
            <div key={s.t} className="group rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-copper hover:ring-primary">
              <span className="font-display text-3xl text-copper">0{i + 1}</span>
                <h3 className="mt-3 text-xl">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <h2 className="text-center text-4xl font-bold">Why choose us</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            { icon: DollarSign, t: "Best prices in Sydney", d: "Accurate weighing and up-to-date market rates — paid on the spot." },
            { icon: Truck, t: "Fast pickups", d: "We come to homes, businesses and job sites across Sydney." },
            { icon: Leaf, t: "Eco-driven", d: "Strict environmental and safety standards in every load." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl border-t-2 border-primary bg-card p-8 shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-copper">
              <Icon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <h2 className="text-center text-4xl font-bold">Our work in <span className="text-copper">pictures</span></h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">Real pickups, sorted metals and processed loads — every step handled at our yard.</p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: truck, alt: "Collection truck loading household scrap in a Sydney street", t: "Door-to-door pickup" },
            { src: aluminium, alt: "Baled aluminium cans ready for recycling", t: "Sorted & baled metals" },
            { src: carScrap, alt: "Scrap car bodies processed at the yard", t: "Cars processed responsibly" },
          ].map(({ src, alt, t }) => (
            <figure key={t} className="group overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border">
              <div className="overflow-hidden">
                <img src={src} alt={alt} width={1024} height={1024} loading="lazy" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="px-6 py-4 font-display text-sm uppercase tracking-widest text-muted-foreground">{t}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-steel py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-secondary-foreground md:flex-row">
          <h2 className="text-3xl font-bold md:text-4xl">Your metal has value. Turn it into cash.</h2>
          <CopperButton href={BIZ.tel}>Call {BIZ.phone}</CopperButton>
        </div>
      </section>
    </>
  );
}
