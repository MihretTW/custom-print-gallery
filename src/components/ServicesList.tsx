import { motion } from "framer-motion";
import {
  Megaphone,
  BookOpen,
  Layers,
  Palette,
  Ribbon,
  Stamp,
  Wrench,
  ArrowRight,
  Send,
} from "lucide-react";
import { TELEGRAM_URL, TELEGRAM } from "../constants";

const services = [
  {
    id: "banners",
    title: "Banners & Displays",
    description:
      "High-impact outdoor and indoor banners, roll-up stands, and large-format signage with UV-resistant CMYK printing.",
    icon: Megaphone,
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-200/50",
    accent: "text-cyan-600",
  },
  {
    id: "yearbooks",
    title: "Yearbooks & Publications",
    description:
      "Custom school and corporate yearbooks, magazines, and premium bound publications with foil stamping options.",
    icon: BookOpen,
    color: "from-pink-500/20 to-pink-600/10",
    border: "border-pink-200/50",
    accent: "text-pink-500",
  },
  {
    id: "binders",
    title: "Binders & Notebooks",
    description:
      "Professional hard and soft cover binders, custom notebooks, corporate report folders with personalized branding.",
    icon: Layers,
    color: "from-yellow-400/20 to-yellow-500/10",
    border: "border-yellow-300/50",
    accent: "text-yellow-600",
  },
  {
    id: "logos",
    title: "Custom Logo Design",
    description:
      "Creative brand identities, custom vector graphics, and full stationery sets — from concept to print-ready files.",
    icon: Palette,
    color: "from-stone-900/10 to-stone-800/5",
    border: "border-stone-300/50",
    accent: "text-stone-800",
  },
  {
    id: "invitations",
    title: "Invitation Cards",
    description:
      "Elegant custom invitations for graduations, weddings, birthdays, and corporate events with premium finishes.",
    icon: Ribbon,
    color: "from-rose-500/20 to-rose-600/10",
    border: "border-rose-200/50",
    accent: "text-rose-500",
  },
  {
    id: "businesscards",
    title: "Business Cards",
    description:
      "Luxury thick-stock business cards with matte, gloss, spot UV, foil accents, and custom die-cut shapes.",
    icon: Stamp,
    color: "from-emerald-500/20 to-emerald-600/10",
    border: "border-emerald-200/50",
    accent: "text-emerald-600",
  },
  {
    id: "general",
    title: "General Printing",
    description:
      "Flyers, brochures, custom stamps, booklets, and any corporate stationery — no job is too small or too complex.",
    icon: Wrench,
    color: "from-stone-500/20 to-stone-600/10",
    border: "border-stone-300/50",
    accent: "text-stone-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const,},
  },
};

export default function ServicesList() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,hsla(42,20%,93%,0.5)_1px,transparent_1px),linear-gradient(0deg,hsla(42,20%,93%,0.5)_1px,transparent_1px)] bg-[length:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] } as const,}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-5xl lg:text-6xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-stone-500">
            From one-off business cards to bulk yearbook runs — every order
            gets the same precision, care, and CMYK quality.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* Accent gradient top bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.color}`}
                />

                {/* Icon */}
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} ${service.accent}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-stone-700 transition-all hover:text-stone-900 group-hover:gap-2"
                >
                  Inquire on {TELEGRAM}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-sm text-stone-400">
            Need something else? We take custom orders too.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-stone-800 hover:shadow-lg"
          >
            <Send className="h-4 w-4" />
            DM us on {TELEGRAM}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
