import { Plane } from "lucide-react";
import { flightDeals, formatIDR } from "@/data/travel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

export function FlightDeals() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Flight deals"
          title="Fares dropping right now"
          description="Live economy fares, one adult, including taxes."
        />
        <div className="mt-8 space-y-3">
          {flightDeals.map((f) => (
            <article
              key={f.id}
              className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-primary/40 lg:grid-cols-[1.2fr_2fr_auto] lg:items-center"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Plane className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{f.airline}</p>
                  <p className="text-xs text-muted-foreground">{f.code}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 items-center gap-2 text-center">
                <div>
                  <p className="font-display text-lg font-semibold">{f.departure}</p>
                  <p className="text-xs text-muted-foreground">{f.from}</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p>{f.duration}</p>
                  <div className="my-1 h-px w-full bg-border" />
                  <p>Direct</p>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">{f.arrival}</p>
                  <p className="text-xs text-muted-foreground">{f.to}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
                <div className="text-right">
                  {f.badge && (
                    <Badge variant="secondary" className="mb-1 rounded-full text-[11px]">
                      {f.badge}
                    </Badge>
                  )}
                  <p className="font-display text-lg font-bold text-primary">{formatIDR(f.price)}</p>
                </div>
                <Button variant="outline" className="rounded-xl">
                  Select
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
