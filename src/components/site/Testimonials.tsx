import { Quote } from "lucide-react";
import { testimonials } from "@/data/travel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What travellers tell us" />
        <Carousel opts={{ align: "start", loop: true }} className="mt-8">
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <Quote className="h-6 w-6 text-primary" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
