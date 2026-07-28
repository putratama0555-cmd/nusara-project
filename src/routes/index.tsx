import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { PromoSection } from "@/components/site/PromoSection";
import { Destinations } from "@/components/site/Destinations";
import { Hotels } from "@/components/site/Hotels";
import { FlightDeals } from "@/components/site/FlightDeals";
import { Features } from "@/components/site/Features";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { faqs } from "@/data/travel";

const title = "Nusara — Flights, Hotels & Trips in One Booking";
const description =
  "Book flights, hotels, trains, buses, car rental, holiday packages and attractions in one checkout. Best price guarantee and instant e-tickets.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <PromoSection />
        <Destinations />
        <Hotels />
        <FlightDeals />
        <Features />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
