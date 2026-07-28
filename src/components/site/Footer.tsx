import { Compass, Instagram, Twitter, Facebook, Youtube, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const columns = [
  { title: "Company", links: ["About", "Careers", "Blog", "Partners"] },
  { title: "Products", links: ["Flights", "Hotels", "Trains", "Bus & Travel", "Car Rental"] },
  { title: "Support", links: ["Help Center", "Contact", "Refund Status", "Booking Guide"] },
  { title: "Legal", links: ["Terms", "Privacy", "Cookies", "Security"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Compass className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold">Nusara</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              An all-in-one travel platform for flights, stays and everything between.
            </p>
            <div className="mt-5 flex gap-2">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social media"
                  className="grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">© 2026 Nusara Travel. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="rounded-xl">
              <Apple className="h-4 w-4" /> App Store
            </Button>
            <Button variant="outline" className="rounded-xl">
              <Smartphone className="h-4 w-4" /> Google Play
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
