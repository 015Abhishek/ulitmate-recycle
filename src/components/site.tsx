import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/ultimate_logo.png.asset.json";

export const BIZ = {
  phone: "+61 438 230 097",
  tel: "tel:+61438230097",
  email: "info@ultimatemetalrecyclers.com.au",
  location: "St Marys NSW 2760, Sydney",
  hours: "Monday – Saturday",
  abn: "85 687 179 513",
};

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function CopperButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded-full bg-copper px-8 py-3 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-copper transition hover:brightness-110">
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Ultimate Metal Recyclers" className="h-14 w-14 object-contain" />
          <span className="hidden font-display text-lg uppercase leading-tight sm:block">
            Ultimate Metal<br /><span className="text-copper">Recyclers</span>
          </span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="font-display text-sm uppercase tracking-widest text-muted-foreground transition hover:text-foreground [&.active]:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={BIZ.tel} className="flex items-center gap-2 font-display text-sm text-primary">
          <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{BIZ.phone}</span>
        </a>
      </div>
      <nav className="flex justify-center gap-5 border-t border-border py-2 md:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="font-display text-xs uppercase tracking-widest text-muted-foreground [&.active]:text-primary">{n.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <img src={logo.url} alt="Ultimate Metal Recyclers" className="h-24 w-24 object-contain" loading="lazy" />
          <p className="mt-4 text-muted-foreground">Cash for scrap. Care for the planet. Sydney's trusted metal recycling partner.</p>
          <p className="mt-2 text-xs text-muted-foreground">ABN: {BIZ.abn}</p>
        </div>
        <div>
          <h4 className="mb-4 text-primary">Explore</h4>
          <ul className="space-y-2">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="text-muted-foreground hover:text-foreground">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-primary">Get in touch</h4>
          <ContactList />
        </div>
      </div>
      <p className="border-t border-border py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Ultimate Metal Recyclers. All rights reserved.</p>
    </footer>
  );
}

export function ContactList() {
  const items = [
    { icon: Phone, text: BIZ.phone, href: BIZ.tel },
    { icon: Mail, text: BIZ.email, href: `mailto:${BIZ.email}` },
    { icon: MapPin, text: BIZ.location },
    { icon: Clock, text: BIZ.hours },
  ];
  return (
    <ul className="space-y-3">
      {items.map(({ icon: Icon, text, href }) => (
        <li key={text} className="flex items-start gap-3 text-muted-foreground">
          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          {href ? <a href={href} className="break-all hover:text-foreground">{text}</a> : <span>{text}</span>}
        </li>
      ))}
    </ul>
  );
}

export function PageHero({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card py-20">
      <div className="absolute inset-x-0 top-0 h-1 bg-copper" />
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-5xl font-bold md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{sub}</p>
      </div>
    </section>
  );
}

export const SERVICES = [
  { t: "Residential Scrap Collection", d: "Household appliances, garden metal, fixtures and small electronics collected from your door." },
  { t: "Commercial Scrap Recycling", d: "Office, warehouse, retail, restaurant and HVAC metal cleared fast with a buyback program." },
  { t: "Industrial Scrap Recycling", d: "Factory metal waste management and industrial alloy recycling at scale." },
  { t: "Copper & Aluminium Recovery", d: "Top rates for copper, aluminium, brass and bronze — sorted and weighed transparently." },
  { t: "Steel & Iron Recycling", d: "Ferrous metals, stainless steel, lead and tin processed responsibly." },
  { t: "Car Scrap Removal", d: "Cars, trucks, motorcycles, fleet vehicles and batteries recycled — cash paid." },
  { t: "Construction Site Removal", d: "On-site metal scrap removal to keep your builds clean and compliant." },
  { t: "Electronic Waste Recycling", d: "Safe e-waste handling with precious metal recovery." },
  { t: "Sorting & Valuation", d: "Mixed scrap sorting, processing and market price consultation." },
];
