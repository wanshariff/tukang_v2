import type { Metadata } from "next";
import Link from "next/link";

const streams = [
  {
    id: "midnight-grooves",
    title: "Midnight Grooves – Live from Jakarta",
    creator: "Studio Lintang",
    tags: ["neo-soul", "Jakarta"],
    viewers: 1280,
  },
  {
    id: "street-art-lab",
    title: "Street Art Lab – Manila Collab Session",
    creator: "Brgy. Collective",
    tags: ["visual art", "Manila"],
    viewers: 845,
  },
  {
    id: "sonic-rainforest",
    title: "Sonic Rainforest – Borneo Soundscapes",
    creator: "Project Taksu",
    tags: ["ambient", "Borneo"],
    viewers: 562,
  },
];

const upcomingEvents = [
  {
    id: "bali-sunrise-festival",
    title: "Bali Sunrise Festival",
    date: "Aug 17, 2024",
    location: "Bali, Indonesia",
    price: "IDR 350K",
  },
  {
    id: "kl-city-lights",
    title: "KL City Lights",
    date: "Sep 6, 2024",
    location: "Kuala Lumpur, Malaysia",
    price: "MYR 180",
  },
  {
    id: "singapore-art-mix",
    title: "Singapore Art Mix",
    date: "Oct 12, 2024",
    location: "Singapore",
    price: "SGD 45",
  },
];

const marketplaceItems = [
  {
    id: "vinyl-special",
    name: "Limited Vinyl Press – Lullaby for Cities",
    creator: "The Night Hoppers",
    price: "USD 45",
  },
  {
    id: "canvas-collective",
    name: "Canvas Collective #03",
    creator: "Meraki & Co.",
    price: "USD 120",
  },
  {
    id: "digital-pass",
    name: "Digital Backstage Pass (3 months)",
    creator: "Noon Spectrum",
    price: "USD 18",
  },
];

const rewards = [
  {
    tier: "Bronze",
    points: "0 – 999",
    perks: ["Early bird ticket alerts"],
  },
  {
    tier: "Silver",
    points: "1,000 – 4,999",
    perks: ["5% merch discount", "Access to creator AMAs"],
  },
  {
    tier: "Gold",
    points: "5,000+",
    perks: ["10% merch discount", "Priority meet & greet slots", "Collector badge drops"],
  },
];

export const metadata: Metadata = {
  title: "Indie Scene Platform Blueprint",
  description:
    "Experience the Southeast Asian indie community with live streams, events, marketplaces, and gamified rewards in one platform.",
  openGraph: {
    title: "Indie Scene Platform Blueprint",
    description:
      "Experience the Southeast Asian indie community with live streams, events, marketplaces, and gamified rewards in one platform.",
    url: "/indie-platform",
    type: "website",
  },
};

export default function IndiePlatformPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16">
      <header className="space-y-6 text-balance text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
          Southeast Asian Indie Community
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Everything your scene needs—from streaming to festivals and collectibles
        </h1>
        <p className="text-lg text-slate-600 md:text-xl">
          Launch live broadcasts, sell tickets, drop limited editions, and reward fans with a
          unified platform designed for creators across the region.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <Link
            href="#streams"
            className="rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700"
          >
            Watch Live Streams
          </Link>
          <Link
            href="#events"
            className="rounded-full border border-slate-300 px-6 py-3 text-slate-900 transition hover:border-slate-900"
          >
            Browse Events
          </Link>
          <Link
            href="#marketplace"
            className="rounded-full border border-slate-300 px-6 py-3 text-slate-900 transition hover:border-slate-900"
          >
            Explore Marketplace
          </Link>
        </div>
      </header>

      <section id="streams" className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Live Now</h2>
            <p className="text-slate-600">
              Adaptive multi-bitrate streams with chat overlays, reactions, and backstage access.
            </p>
          </div>
          <Link href="#" className="text-sm font-medium text-orange-500 hover:text-orange-400">
            View all live channels →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {streams.map((stream) => (
            <article
              key={stream.id}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                  {stream.tags.join(" • ")}
                </p>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-orange-500">
                  {stream.title}
                </h3>
                <p className="text-sm text-slate-600">Hosted by {stream.creator}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>{stream.viewers.toLocaleString()} tuning in</span>
                <Link href={`#stream-${stream.id}`} className="font-medium text-orange-500">
                  Join chat →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="events" className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Events & Ticketing</h2>
            <p className="text-slate-600">
              Hybrid event infrastructure with QR ticketing, payouts, and onsite check-in tools.
            </p>
          </div>
          <Link href="#" className="text-sm font-medium text-orange-500 hover:text-orange-400">
            Discover more events →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">{event.title}</h3>
                <p className="text-sm font-medium text-orange-500">{event.date}</p>
                <p className="text-sm text-slate-600">{event.location}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>Tickets from {event.price}</span>
                <Link href={`#event-${event.id}`} className="font-medium text-orange-500">
                  Get tickets →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="marketplace" className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Creator Marketplace</h2>
            <p className="text-slate-600">
              Manage digital drops, merch fulfilment, and expiring collections in one commerce engine.
            </p>
          </div>
          <Link href="#" className="text-sm font-medium text-orange-500 hover:text-orange-400">
            Visit marketplace →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {marketplaceItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                  {item.creator}
                </p>
                <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>{item.price}</span>
                <Link href={`#item-${item.id}`} className="font-medium text-orange-500">
                  View details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="rewards" className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Gamified Rewards</h2>
            <p className="text-slate-600">
              Event-sourced points, regional leaderboards, and loyalty rewards to boost community stickiness.
            </p>
          </div>
          <Link href="#" className="text-sm font-medium text-orange-500 hover:text-orange-400">
            See reward rules →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {rewards.map((tier) => (
            <article
              key={tier.tier}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                  {tier.tier}
                </p>
                <h3 className="text-xl font-semibold text-slate-900">{tier.points} points</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-slate-900 p-10 text-white">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">
              Built with a modern, scalable media stack
            </h2>
            <p className="text-sm text-slate-300">
              NestJS microservices on AWS, event-driven rewards, and low-latency streaming via LiveKit and Mux.
              This blueprint is production-ready with observability, localization, and compliance baked in.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm font-medium">
            <Link href="mailto:studio@tadal.io" className="rounded-full bg-white px-6 py-3 text-slate-900">
              Talk to us about delivery
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/40 px-6 py-3 text-white transition hover:border-white"
            >
              Request implementation playbook
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
