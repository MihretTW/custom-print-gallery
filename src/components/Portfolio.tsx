import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image,
  BookOpen,
  Layers,
  Palette,
  Ribbon,
  Stamp,
  Wrench,
  Eye,
  ArrowRight,
  Send,
  Star,
} from "lucide-react";
import { TELEGRAM_URL, TELEGRAM } from "../constants";

const products = [
  {
    id: "yearbook-premium",
    title: "Premium Yearbook Collection",
    category: "yearbooks",
    description:
      "Full-color hardcover yearbooks with foil-stamped covers, custom endpapers, and perfect binding. Delivered to Sululta schools.",
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-yearbook-d8e49f5f-1784563030586.webp",
    tags: ["Hardcover", "Foil Stamping", "Full Color"],
    span: "lg:col-span-2",
  },
  {
    id: "banner-outdoor",
    title: "Outdoor Event Banner",
    category: "banners",
    description:
      "UV-resistant vinyl banner, 4×8 ft, with grommets and hemming. Used for a community festival in Sululta.",
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-banner-e327675b-1784563029569.webp",
    tags: ["UV Resistant", "Vinyl", "Large Format"],
    span: "",
  },
  {
    id: "binder-corporate",
    title: "Corporate Report Binders",
    category: "binders",
    description:
      "Leatherette A4 binders with foil debossed logos, internal pockets, and screw-post binding for a local consulting firm.",
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-binder-fab7845b-1784563029718.webp",
    tags: ["Leatherette", "Foil Deboss", "A4"],
    span: "",
  },
  {
    id: "logo-brand",
    title: "Complete Brand Identity",
    category: "logos",
    description:
      "Full brand kit including logo, stationery, business cards, and brand guidelines — delivered in print-ready vector format.",
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-logo-ae9c668b-1784563028982.webp",
    tags: ["Vector", "Stationery Set", "Brand Guide"],
    span: "",
  },
  {
    id: "invitation-wedding",
    title: "Gold Foil Wedding Invitations",
    category: "invitations",
    description:
      "Set of 100 custom wedding invitations with gold foil letterpress, cotton paper, and matching envelope liners.",
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-invitation-47416241-1784563029158.webp",
    tags: ["Foil Stamping", "Letterpress", "Cotton Paper"],
    span: "lg:col-span-2",
  },
  {
    id: "businesscard-premium",
    title: "Spot UV Business Cards",
    category: "businesscards",
    description:
      "350gsm matte cards with raised spot UV gloss on the logo — a subtle, premium feel for corporate executives.",
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-businesscard-2eadaaac-1784563033664.webp",
    tags: ["Spot UV", "Matte Laminate", "350gsm"],
    span: "",
  },
  {
    id: "custom-stamp",
    title: "Custom Rubber Stamps",
    category: "custom",
    description:
      "Self-inking and pre-inked rubber stamps for businesses — custom shapes, logos, and text layouts.",
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-custom-cmyk-91430999-1784563034199.webp",
    tags: ["Self-Inking", "Custom Shape", "Logo"],
    span: "",
  },
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "yearbooks", label: "Yearbooks" },
  { id: "banners", label: "Banners" },
  { id: "binders", label: "Binders" },
  { id: "logos", label: "Branding" },
  { id: "invitations", label: "Invitations" },
  { id: "businesscards", label: "Business Cards" },
  { id: "custom", label: "Custom" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const selected = products.find((p) => p.id === selectedProduct);

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,hsla(42,20%,93%,0.5)_1px,transparent_1px),linear-gradient(0deg,hsla(42,20%,93%,0.5)_1px,transparent_1px)] bg-[length:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition= {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1] as const,
}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
            Our Craftsmanship
          </span>
          <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-5xl lg:text-6xl">
            Products We Have Done Before
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-stone-500">
            Every piece tells a story. Browse real finished products we've
            printed for clients in Sululta and beyond.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
         transition={{
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1] as const,
}}
         
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-stone-900 text-stone-50 shadow-md"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Bento grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                layout
                className={`group relative overflow-hidden rounded-2xl bg-stone-100 cursor-pointer ${product.span}`}
                onClick={() => setSelectedProduct(product.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[3/2]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Hover quick-view */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                      <Eye className="h-4 w-4" />
                      View Details
                    </span>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="font-serif text-xl text-white md:text-2xl">
                      {product.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Product detail modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                
                transition={{
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1] as const,
}}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-serif text-2xl text-white">
                      {selected.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-relaxed text-stone-500">
                    {selected.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={TELEGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-stone-800"
                    >
                      <Send className="h-4 w-4" />
                      Request Similar Project
                    </a>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="flex items-center justify-center gap-2 rounded-full border border-stone-200 px-5 py-3 text-sm font-medium text-stone-600 transition-all hover:border-stone-300"
                    >
                      Browse More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-sm text-stone-400">
            Want something similar? Let's bring your project to life.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-stone-800 hover:shadow-lg"
          >
            <Star className="h-4 w-4" />
            Start Your Project on {TELEGRAM}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
