import { Link } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
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
    <a href={href} className="copper-button inline-flex items-center gap-2 rounded-full bg-copper px-8 py-3 font-display text-sm font-semibold uppercase text-primary-foreground shadow-copper">
      {children}
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className={`site-header fixed inset-x-0 top-0 z-50 ${scrolled ? "is-scrolled" : ""}`}>
      <div className="mt-3 flex max-w-7xl items-center justify-between rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-header)] px-4 py-1.5 mx-3 xl:mx-auto backdrop-blur-md header-bar">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Ultimate Metal Recyclers" className="h-14 w-14 object-contain" />
          <span className="hidden font-display text-lg uppercase leading-tight sm:block">
            Ultimate Metal<br /><span className="text-copper">Recyclers</span>
          </span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => n.to === "/services" ? (
            <div key={n.to} className="nav-drop relative">
              <Link to={n.to} activeOptions={{ exact: true }} className="nav-link flex items-center gap-1 font-display text-sm uppercase text-foreground/80 transition hover:text-foreground [&.active]:text-primary">
                {n.label} <ChevronDown className="nav-chevron h-4 w-4" />
              </Link>
              <div className="nav-menu absolute left-1/2 top-full pt-4">
                <div className="glass-panel w-72 rounded-2xl border bg-card/95 p-2">
                  {SERVICES.map((s, i) => (
                    <Link key={s.t} to="/services" hash={`service-${i}`} className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition hover:bg-primary/10 hover:text-primary">
                      {s.t}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="nav-link font-display text-sm uppercase text-foreground/80 transition hover:text-foreground [&.active]:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={BIZ.tel} className="copper-button flex items-center gap-2 rounded-full bg-copper px-4 py-2 font-display text-sm text-primary-foreground shadow-copper">
          <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{BIZ.phone}</span>
        </a>
      </div>
      <nav className="mx-3 mt-2 flex justify-center gap-5 rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-header)] py-2 backdrop-blur-md md:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="nav-link font-display text-xs uppercase text-muted-foreground [&.active]:text-primary">{n.label}</Link>
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
    <section className="page-hero relative overflow-hidden border-b border-border pb-16 pt-40 md:pb-20 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-1 bg-copper" />
      <div data-reveal className="relative mx-auto max-w-7xl px-4">
        <h1 className="text-5xl font-bold md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{sub}</p>
      </div>
    </section>
  );
}

export function MotionEffects() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll<HTMLElement>("main [data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("reveal-pending");
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${(index % 3) * 80}ms`);
      element.classList.add("reveal-pending");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("reveal-pending", "reveal-visible"));
    };
  }, [pathname]);
  return null;
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
