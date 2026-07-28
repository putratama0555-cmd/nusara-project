import { MapPin, Star } from "lucide-react";
import { hotels, formatIDR } from "@/data/travel";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

export function Hotels() {
  return (
    <section id="hotels" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Recommended hotels"
        title="Stays our travellers rebook"
        description="Free cancellation on most rooms, with instant confirmation."
      />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {hotels.map((h) => (
          <article key={h.id} className="hover-lift flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={h.image}
              alt={h.name}
              loading="lazy"
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: h.stars }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <h3 className="mt-2 text-base font-semibold">{h.name}</h3>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {h.location}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                  {h.rating.toFixed(1)}
                </span>
                {h.reviews.toLocaleString("en-US")} reviews
              </p>
              <p className="mt-4 font-display text-lg font-semibold">
                {formatIDR(h.pricePerNight)}
                <span className="ml-1 text-xs font-normal text-muted-foreground">/ night</span>
              </p>
              <Button className="mt-4 w-full rounded-xl">Book now</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
