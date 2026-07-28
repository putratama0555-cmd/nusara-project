import { Plane, Building2, TrainFront, Bus, Car, Ticket, Search, ShieldCheck, Star } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tabs = [
  { value: "flights", label: "Flights", icon: Plane },
  { value: "hotels", label: "Hotels", icon: Building2 },
  { value: "trains", label: "Trains", icon: TrainFront },
  { value: "bus", label: "Bus", icon: Bus },
  { value: "car", label: "Car", icon: Car },
  { value: "activities", label: "Activities", icon: Ticket },
];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <Label className="text-xs font-medium text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

const inputClass = "h-11 rounded-xl bg-background";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="Aerial view of a turquoise bay with limestone cliffs at sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/15 px-3 py-1 text-xs font-medium text-background backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" /> Best price guarantee on 500+ airlines
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-background sm:text-5xl lg:text-6xl">
            One journey, one checkout
          </h1>
          <p className="mt-4 max-w-xl text-base text-background/85 sm:text-lg">
            Flights, hotels, trains, buses, cars, holiday packages and attractions — searched together and
            confirmed instantly.
          </p>
        </div>

        <div id="search" className="mt-8 rounded-3xl glass-card p-3 sm:p-5">
          <Tabs defaultValue="flights">
            <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 rounded-2xl bg-secondary/70 p-1">
              {tabs.map((t) => (
                <TabsTrigger
                  key={t.value}
                  value={t.value}
                  className="gap-2 rounded-xl px-3 py-2 text-sm data-[state=active]:shadow-soft"
                >
                  <t.icon className="h-4 w-4" />
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="flights" className="mt-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
                <Field label="From">
                  <Input className={inputClass} defaultValue="Jakarta (CGK)" />
                </Field>
                <Field label="To">
                  <Input className={inputClass} defaultValue="Denpasar (DPS)" />
                </Field>
                <Field label="Departure">
                  <Input type="date" className={inputClass} defaultValue="2026-08-14" />
                </Field>
                <Field label="Return">
                  <Input type="date" className={inputClass} defaultValue="2026-08-21" />
                </Field>
                <Field label="Passengers">
                  <Select defaultValue="2">
                    <SelectTrigger className={inputClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} passenger{n > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Cabin class">
                  <Select defaultValue="economy">
                    <SelectTrigger className={inputClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Economy</SelectItem>
                      <SelectItem value="premium">Premium economy</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="first">First</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <Button size="lg" className="mt-5 h-12 w-full rounded-xl text-base lg:w-auto lg:px-10">
                <Search className="h-4 w-4" /> Search flights
              </Button>
            </TabsContent>

            <TabsContent value="hotels" className="mt-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <Field label="Destination">
                  <Input className={inputClass} defaultValue="Ubud, Bali" />
                </Field>
                <Field label="Check-in">
                  <Input type="date" className={inputClass} defaultValue="2026-08-14" />
                </Field>
                <Field label="Check-out">
                  <Input type="date" className={inputClass} defaultValue="2026-08-17" />
                </Field>
                <Field label="Guests">
                  <Select defaultValue="2">
                    <SelectTrigger className={inputClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} guest{n > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Rooms">
                  <Select defaultValue="1">
                    <SelectTrigger className={inputClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4].map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} room{n > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <Button size="lg" className="mt-5 h-12 w-full rounded-xl text-base lg:w-auto lg:px-10">
                <Search className="h-4 w-4" /> Search hotels
              </Button>
            </TabsContent>

            {["trains", "bus", "car", "activities"].map((value) => (
              <TabsContent key={value} value={value} className="mt-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Field label={value === "activities" ? "City" : "From"}>
                    <Input className={inputClass} defaultValue="Bandung" />
                  </Field>
                  <Field label={value === "activities" ? "Category" : "To"}>
                    <Input className={inputClass} defaultValue={value === "activities" ? "Theme park" : "Yogyakarta"} />
                  </Field>
                  <Field label="Date">
                    <Input type="date" className={inputClass} defaultValue="2026-08-14" />
                  </Field>
                  <Field label={value === "car" ? "Rental days" : "Travellers"}>
                    <Select defaultValue="2">
                      <SelectTrigger className={inputClass}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <SelectItem key={n} value={String(n)}>
                            {n}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Button size="lg" className="mt-5 h-12 w-full rounded-xl text-base lg:w-auto lg:px-10">
                  <Search className="h-4 w-4" /> Search
                </Button>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: "4.9", v: "App store rating", icon: true },
            { k: "500+", v: "Airline partners" },
            { k: "1.2M", v: "Hotels worldwide" },
            { k: "24/7", v: "Human support" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl glass-card px-4 py-3">
              <dt className="flex items-center gap-1 font-display text-xl font-semibold text-foreground">
                {s.k}
                {s.icon && <Star className="h-4 w-4 fill-accent text-accent" />}
              </dt>
              <dd className="text-xs text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
