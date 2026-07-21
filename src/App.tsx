import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Printer,
} from "lucide-react";
import Portfolio from "./components/Portfolio";
import ServicesList from "./components/ServicesList";
import {
  BRAND_NAME,
  TAGLINE,
  LOCATION,
  PHONE,
  EMAIL,
  TELEGRAM,
  TELEGRAM_URL,
  ADDRESS,
  HOURS,
  NAV_LINKS,
  BRAND_LOGO_URL,
} from "./constants";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 antialiased">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1A1A1A",
            color: "#FAF9F5",
            border: "1px solid #2A2A2A",
            borderRadius: "12px",
          },
        }}
      />

      {/* ============ NAVIGATION ============ */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 shadow-sm backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
          >
            <img
              src={BRAND_LOGO_URL}
              alt="Senaf Printing - Professional Printing Services in Sululta, Ethiopia"
              className="h-9 w-auto object-contain"
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
              >
                {link.label}
              </button>
            ))}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-stone-800"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-700 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-stone-100 bg-white md:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium text-stone-600 transition-colors hover:bg-stone-50"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block w-full rounded-full bg-stone-900 px-5 py-2.5 text-center text-sm font-medium text-white"
                >
                  Start a Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Large decorative letter */}
        <div className="pointer-events-none absolute -right-20 -top-20 select-none text-[30rem] font-serif font-bold leading-none text-stone-100/50 md:text-[40rem]">
          S
        </div>

        {/* Print grid overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,hsla(42,20%,93%,0.6)_1px,transparent_1px),linear-gradient(0deg,hsla(42,20%,93%,0.6)_1px,transparent_1px)] bg-[length:4rem_4rem]" />

        {/* CMYK accent bars */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex h-1.5">
          <div className="h-full w-1/4 bg-cyan-500" />
          <div className="h-full w-1/4 bg-pink-500" />
          <div className="h-full w-1/4 bg-yellow-400" />
          <div className="h-full w-1/4 bg-stone-900" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-24 text-center md:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-6 inline-block rounded-full border border-stone-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-stone-500 backdrop-blur-sm">
                {LOCATION}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl leading-tight text-stone-900 md:text-7xl lg:text-8xl"
            >
              {BRAND_NAME}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-lg leading-relaxed text-stone-500 md:text-xl"
            >
              {TAGLINE}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-stone-400"
            >
              Premium CMYK printing services in Sululta, Ethiopia. From banners and yearbooks to custom branding — we bring your vision to paper.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button
                onClick={() => scrollTo("#services")}
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white transition-all hover:bg-stone-800"
              >
                Our Services <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-medium text-stone-700 transition-all hover:border-stone-400 hover:bg-stone-50"
              >
                <Send className="h-4 w-4" />
                DM us on Telegram
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-16 flex flex-col items-center gap-2 text-stone-400"
            >
              <span className="text-xs font-medium uppercase tracking-widest">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO ============ */}
      <Portfolio />

      {/* ============ SERVICE CATALOG ============ */}
      <ServicesList />

      {/* ============ CONTACT ============ */}
      <section id="contact" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsla(42,20%,93%,0.5)_1px,transparent_1px),linear-gradient(0deg,hsla(42,20%,93%,0.5)_1px,transparent_1px)] bg-[length:4rem_4rem] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
              Get in Touch
            </span>
            <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
              Contact Us
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-stone-500">
              Have a question or need a custom quote? We're here to help.
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Contact info cards */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all hover:border-stone-300 hover:shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Address
                  </span>
                  <p className="mt-0.5 text-sm text-stone-700">{ADDRESS}</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all hover:border-stone-300 hover:shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Phone
                  </span>
                  <a
                    href={`tel:${PHONE}`}
                    className="mt-0.5 block text-sm text-stone-700 transition-colors hover:text-stone-900"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all hover:border-stone-300 hover:shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Email
                  </span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-0.5 block text-sm text-stone-700 transition-colors hover:text-stone-900"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all hover:border-stone-300 hover:shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Hours
                  </span>
                  <p className="mt-0.5 text-sm text-stone-700">{HOURS}</p>
                </div>
              </div>

              {/* Social / direct messaging */}
              <div className="flex gap-3 pt-2">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-stone-800"
                >
                  <Send className="h-4 w-4" /> Telegram
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-700 transition-all hover:border-stone-400"
                >
                  <Phone className="h-4 w-4" /> Call Us
                </a>
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100"
            >
              <div className="flex h-full min-h-[300px] items-center justify-center bg-stone-100">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-stone-300" />
                  <p className="mt-2 text-sm text-stone-400">
                    Sululta, Ethiopia
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-medium text-stone-500 underline underline-offset-2 hover:text-stone-700"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_LOGO_URL}
                alt="Senaf Printing - Professional Printing Services in Sululta, Ethiopia"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-stone-400">
              &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved. {LOCATION}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}