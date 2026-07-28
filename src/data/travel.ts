import bali from "@/assets/dest-bali.jpg";
import tokyo from "@/assets/dest-tokyo.jpg";
import singapore from "@/assets/dest-singapore.jpg";

export type Destination = {
  id: string;
  name: string;
  country: string;
  image: string;
  priceFrom: number;
  rating: number;
  reviews: number;
};

export const destinations: Destination[] = [
  { id: "bali", name: "Bali", country: "Indonesia", image: bali, priceFrom: 1250000, rating: 4.9, reviews: 12480 },
  { id: "tokyo", name: "Tokyo", country: "Japan", image: tokyo, priceFrom: 4890000, rating: 4.8, reviews: 9312 },
  { id: "singapore", name: "Singapore", country: "Singapore", image: singapore, priceFrom: 1890000, rating: 4.7, reviews: 15220 },
  { id: "bangkok", name: "Bangkok", country: "Thailand", image: bali, priceFrom: 1640000, rating: 4.6, reviews: 8740 },
  { id: "seoul", name: "Seoul", country: "South Korea", image: tokyo, priceFrom: 4210000, rating: 4.8, reviews: 7025 },
  { id: "dubai", name: "Dubai", country: "UAE", image: singapore, priceFrom: 5320000, rating: 4.7, reviews: 6480 },
  { id: "paris", name: "Paris", country: "France", image: tokyo, priceFrom: 8940000, rating: 4.9, reviews: 11930 },
  { id: "london", name: "London", country: "United Kingdom", image: singapore, priceFrom: 9210000, rating: 4.6, reviews: 10410 },
];

export type Promo = {
  id: string;
  tag: string;
  title: string;
  description: string;
  code: string;
};

export const promos: Promo[] = [
  { id: "p1", tag: "Flash Sale", title: "Up to 50% off domestic flights", description: "Every Friday 12.00–15.00 for selected routes.", code: "FLASH50" },
  { id: "p2", tag: "Cashback", title: "20% cashback on hotels", description: "Max IDR 500K back to your Nusara wallet.", code: "STAY20" },
  { id: "p3", tag: "Voucher", title: "IDR 300K off holiday packages", description: "Minimum spend IDR 5M, all destinations.", code: "TRIP300" },
  { id: "p4", tag: "New User", title: "First booking discount", description: "Flat 15% off your first flight or train ticket.", code: "HELLO15" },
  { id: "p5", tag: "Weekend", title: "Car rental from IDR 249K/day", description: "Free driver for bookings over 3 days.", code: "DRIVE249" },
];

export type Hotel = {
  id: string;
  name: string;
  location: string;
  stars: number;
  rating: number;
  reviews: number;
  pricePerNight: number;
  image: string;
};

export const hotels: Hotel[] = [
  { id: "h1", name: "Ubud Canopy Retreat", location: "Ubud, Bali", stars: 5, rating: 9.2, reviews: 2140, pricePerNight: 1850000, image: bali },
  { id: "h2", name: "Marina Bay Skyline Suites", location: "Downtown, Singapore", stars: 5, rating: 9.0, reviews: 3320, pricePerNight: 3240000, image: singapore },
  { id: "h3", name: "Shibuya Lantern Hotel", location: "Shibuya, Tokyo", stars: 4, rating: 8.8, reviews: 1875, pricePerNight: 2110000, image: tokyo },
  { id: "h4", name: "Seminyak Tide Resort", location: "Seminyak, Bali", stars: 4, rating: 8.6, reviews: 1490, pricePerNight: 1320000, image: bali },
];

export type FlightDeal = {
  id: string;
  airline: string;
  code: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  badge?: string;
};

export const flightDeals: FlightDeal[] = [
  { id: "f1", airline: "Nusara Air", code: "NS 210", from: "CGK", to: "DPS", departure: "06:20", arrival: "09:15", duration: "1h 55m", price: 890000, badge: "Best price" },
  { id: "f2", airline: "Skyline Wings", code: "SW 884", from: "CGK", to: "SIN", departure: "08:40", arrival: "11:30", duration: "1h 50m", price: 1420000, badge: "Flash sale" },
  { id: "f3", airline: "Pacific Blue", code: "PB 117", from: "DPS", to: "HND", departure: "23:10", arrival: "07:45", duration: "7h 35m", price: 4680000 },
  { id: "f4", airline: "Nusara Air", code: "NS 502", from: "SUB", to: "KUL", departure: "13:05", arrival: "16:20", duration: "3h 15m", price: 1780000, badge: "Cashback" },
  { id: "f5", airline: "Aurora Jet", code: "AJ 909", from: "CGK", to: "ICN", departure: "21:55", arrival: "07:10", duration: "7h 15m", price: 5240000 },
];

export const testimonials = [
  { id: "t1", name: "Andini Prameswari", role: "Frequent flyer, Jakarta", quote: "I rebooked a delayed flight in under two minutes from my phone. The refund landed the same day." },
  { id: "t2", name: "Marcus Tan", role: "Family traveller, Singapore", quote: "Booked flights, hotel and airport transfer in one checkout. The itinerary arrived as a single clean e-ticket." },
  { id: "t3", name: "Rina Halim", role: "Business traveller, Surabaya", quote: "Price alerts saved my team around 30% on quarterly trips. Invoices are automatic, which finance loves." },
  { id: "t4", name: "Kevin Wardhana", role: "Weekend explorer, Bandung", quote: "The attraction passes are genuinely cheaper than the gate, and QR entry worked everywhere." },
];

export const faqs = [
  { q: "How do I get my e-ticket?", a: "Your e-ticket is issued instantly after payment is confirmed and is available in My Booking, by email, and as a downloadable PDF with a scannable QR code." },
  { q: "Can I change or cancel a booking?", a: "Flexible fares can be changed or cancelled directly from My Booking. Refund eligibility and any fees are shown before you confirm the change." },
  { q: "Which payment methods are supported?", a: "Credit and debit cards, virtual accounts, bank transfer, QRIS, major e-wallets, and Pay Later for eligible accounts." },
  { q: "Is the Best Price Guarantee real?", a: "Yes. Find the same flight or room cheaper elsewhere within 24 hours of booking and we refund the difference as reward points." },
  { q: "Do you support group and corporate bookings?", a: "Groups of ten or more get a dedicated agent, consolidated invoicing, and flexible name changes up to 48 hours before departure." },
];

export const formatIDR = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
