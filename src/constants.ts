export const BRAND_NAME = "Senaf Printing";
export const TAGLINE = "Where Ink Meets Precision";
export const LOCATION = "Sululta, Ethiopia";
export const PHONE = "+251 91 234 5678";
export const EMAIL = "hello@senafprinting.com";
export const TELEGRAM = "@Senafprinting1";
export const TELEGRAM_URL = "https://t.me/Senafprinting1";
export const ADDRESS = "Sululta Main Road, near Sululta Square, Oromia, Ethiopia";
export const HOURS = "Mon–Sat: 8:00 AM – 6:00 PM";
export const BRAND_LOGO_URL = "https://storage.googleapis.com/dala-prod-public-storage/attachments/5fc73993-4cd2-4d5d-bd58-b45a8cc14bae/1784563815219_image.png";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    id: "banners",
    title: "Banners & Signage",
    description: "High-impact vinyl banners, roll-ups, and outdoor signage with UV-resistant CMYK printing.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-banner-e327675b-1784563029569.webp",
    icon: "Image",
    sizes: ["Small (2×3 ft)", "Medium (3×6 ft)", "Large (4×8 ft)", "Custom"],
    finishes: ["Matte Laminate", "Gloss Laminate", "UV Resistant", "Standard"],
    basePrice: 350,
  },
  {
    id: "yearbooks",
    title: "Yearbooks",
    description: "Premium hardcover yearbooks with foil stamping, full-color interior, and custom binding.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-yearbook-d8e49f5f-1784563030586.webp",
    icon: "BookOpen",
    sizes: ["A5 (20 pages)", "A4 (30 pages)", "A4 (50 pages)", "Custom"],
    finishes: ["Matte Hardcover", "Gloss Hardcover", "Softcover", "Spiral Bound"],
    basePrice: 1200,
  },
  {
    id: "binders",
    title: "Binders & Reports",
    description: "Professional custom binders, corporate reports, and presentation folders with foil finishes.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-binder-fab7845b-1784563029718.webp",
    icon: "Layers",
    sizes: ["A4 (5 pcs)", "A4 (10 pcs)", "A4 (25 pcs)", "Custom"],
    finishes: ["Leatherette", "Matte Laminated", "Gloss Laminated", "Standard"],
    basePrice: 800,
  },
  {
    id: "logos",
    title: "Logo & Branding",
    description: "Custom logo design, brand identity packages, and stationery sets with professional print.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-logo-ae9c668b-1784563028982.webp",
    icon: "Palette",
    sizes: ["Basic Logo", "Logo + Stationery", "Full Brand Kit", "Custom"],
    finishes: ["Digital Only", "Print + Digital", "Premium Foil", "Standard"],
    basePrice: 1500,
  },
  {
    id: "invitations",
    title: "Invitation Cards",
    description: "Luxury wedding and event invitations with letterpress, foil stamping, and custom envelopes.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-invitation-47416241-1784563029158.webp",
    icon: "Sparkles",
    sizes: ["Set of 25", "Set of 50", "Set of 100", "Custom"],
    finishes: ["Letterpress", "Foil Stamped", "Digital Print", "Standard"],
    basePrice: 600,
  },
  {
    id: "businesscards",
    title: "Business Cards",
    description: "Premium thick-stock business cards with spot UV, foil accents, and custom shapes.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-businesscard-2eadaaac-1784563033664.webp",
    icon: "Award",
    sizes: ["100 cards", "250 cards", "500 cards", "1000 cards"],
    finishes: ["Matte + Spot UV", "Gloss + Foil", "Soft Touch", "Standard"],
    basePrice: 400,
  },
  {
    id: "custom",
    title: "Custom Print",
    description: "Anything you imagine — custom size, stock, finish, and quantity. We bring your vision to life.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8c25e179-18de-45de-b7a0-a25fdd9bbf19/senaf-custom-cmyk-91430999-1784563034199.webp",
    icon: "Wrench",
    sizes: ["Custom"],
    finishes: ["Custom"],
    basePrice: 0,
  },
] as const;

export const BRAND = {
  name: BRAND_NAME,
  tagline: TAGLINE,
  location: LOCATION,
  phone: PHONE,
  email: EMAIL,
  telegram: TELEGRAM,
  telegramUrl: TELEGRAM_URL,
  address: ADDRESS,
  hours: HOURS,
} as const;

export const PAPER_STOCK = [
  "80gsm Bond",
  "120gsm Matte",
  "170gsm Satin",
  "250gsm Gloss",
  "300gsm Card",
  "350gsm Premium",
  "Custom",
] as const;

export const FINISHING_OPTIONS = [
  "Matte Lamination",
  "Gloss Lamination",
  "Spot UV",
  "Foil Stamping",
  "Letterpress",
  "Embossing",
  "Debossing",
  "Die Cutting",
  "Rounding Corners",
  "Wire Binding",
  "Spiral Binding",
  "Perfect Binding",
] as const;

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "banners", label: "Banners" },
  { id: "yearbooks", label: "Yearbooks" },
  { id: "binders", label: "Binders" },
  { id: "logos", label: "Logos" },
  { id: "invitations", label: "Invitations" },
  { id: "businesscards", label: "Business Cards" },
  { id: "custom", label: "Custom" },
] as const;