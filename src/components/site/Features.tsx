import { BadgePercent, ShieldCheck, Headphones, Zap, CalendarClock, Gift } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  { icon: BadgePercent, title: "Best price guarantee", body: "Find it cheaper within 24 hours and we refund the difference." },
  { icon: ShieldCheck, title: "Secure payment", body: "PCI-DSS compliant checkout with 3D Secure and fraud screening." },
  { icon: Headphones, title: "24/7 customer support", body: "Real people on chat and phone, in your language, any hour." },
  { icon: Zap, title: "Instant confirmation", body: "E-tickets and vouchers issued the moment payment clears." },
  { icon: CalendarClock, title: "Flexible booking", body: "Change dates or cancel eligible bookings straight from your dashboard." },
  { icon: Gift, title: "Reward points", body: "Earn on every trip and redeem against flights, stays or upgrades." },
];

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Why Nusara" title="Built for people who actually travel" />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="hover-lift rounded-2xl border border-border bg-card p-6 shadow-soft">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
              <f.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
