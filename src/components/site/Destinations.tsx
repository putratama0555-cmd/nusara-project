import { Star } from "lucide-react";
import { destinations, formatIDR } from "@/data/travel";
import { SectionHeading } from "./SectionHeading";

export function Destinations() {
  return (
    <section id="destinations" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Popular destinations"
          title="Where travellers are heading next"
          description="Round-trip fares from Jakarta, updated hourly."
        />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <article key={d.id} className="hover-lift group overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={`${d.name}, ${d.country}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-xs font-medium backdrop-blur-md">
                  {d.country}
                </span>
              </div>
              <div className="p-4">
                <div className="flex min-w-0 items-center justify-between gap-2">
                  <h3 className="truncate text-base font-semibold">{d.name}</h3>
                  <span className="flex shrink-0 items-center gap-1 text-sm font-medium">
                    <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                    {d.rating}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {d.reviews.toLocaleString("en-US")} reviews
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  From <span className="font-display text-base font-semibold text-foreground">{formatIDR(d.priceFrom)}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
