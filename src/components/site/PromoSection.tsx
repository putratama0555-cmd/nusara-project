import { Sparkles } from "lucide-react";
import { promos } from "@/data/travel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "./SectionHeading";

export function PromoSection() {
  return (
    <section id="promo" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Promo"
        title="Deals running this week"
        description="Stackable discounts, cashback and vouchers across every travel product."
      />
      <Carousel opts={{ align: "start" }} className="mt-8">
        <CarouselContent className="-ml-4">
          {promos.map((p) => (
            <CarouselItem key={p.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
              <article className="hover-lift flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div>
                  <Badge className="rounded-full bg-accent text-accent-foreground hover:bg-accent">
                    <Sparkles className="mr-1 h-3 w-3" /> {p.tag}
                  </Badge>
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <code className="rounded-lg border border-dashed border-primary/40 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary">
                    {p.code}
                  </code>
                  <Button variant="ghost" className="rounded-xl text-primary hover:text-primary">
                    Claim
                  </Button>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}
