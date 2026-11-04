import { createFileRoute } from "@tanstack/react-router";
import { BIZ, ContactList, CopperButton, PageHero } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Ultimate Metal Recyclers Sydney" },
      { name: "description", content: "Call +61 438 230 097 for a fast scrap metal quote or pickup in Sydney." },
      { property: "og:title", content: "Contact Ultimate Metal Recyclers" },
      { property: "og:description", content: "Get a free scrap metal quote or book a pickup today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero title="Contact Us" sub="Need a fast quote or a pickup? Reach out — we respond promptly." />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2">
        <div data-reveal className="glass-panel rounded-3xl border-t-2 border-primary p-8 ring-1 ring-border">
          <h2 className="mb-6 text-2xl">Get in touch</h2>
          <ContactList />
          <p className="mt-6 text-xs text-muted-foreground">ABN: {BIZ.abn}</p>
          <div className="mt-8"><CopperButton href={BIZ.tel}>Call now</CopperButton></div>
        </div>
        <iframe
          data-reveal
          title="Map of St Marys NSW"
          src="https://www.google.com/maps?q=St+Marys+NSW+2760&output=embed"
          className="h-full min-h-80 w-full rounded-3xl border-0 grayscale shadow-sm ring-1 ring-border"
          loading="lazy"
        />
      </section>
    </>
  );
}
