import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Check,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  Image,
  BookOpen,
  Layers,
  Palette,
  Sparkles,
  Award,
  Wrench,
} from "lucide-react";
import { BRAND, SERVICES, PAPER_STOCK, FINISHING_OPTIONS } from "../constants";
import { toast } from "sonner";

const iconMap: Record<string, React.ElementType> = {
  Image,
  BookOpen,
  Layers,
  Palette,
  Sparkles,
  Award,
  Wrench,
};

const steps = ["Service", "Specs", "Details", "Review"];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    service: "",
    quantity: "",
    paperStock: "",
    finishing: [] as string[],
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field: string, value: string | string[]) =>
    setForm((f) => ({ ...f, [field]: value }));

  const toggleFinishing = (opt: string) => {
    setForm((f) => ({
      ...f,
      finishing: f.finishing.includes(opt)
        ? f.finishing.filter((o) => o !== opt)
        : [...f.finishing, opt],
    }));
  };

  const canProceed = () => {
    if (step === 0) return form.service !== "";
    if (step === 1) return form.quantity !== "" && parseInt(form.quantity) > 0;
    if (step === 2) return form.name !== "" && form.email !== "";
    return true;
  };

  const handleSubmit = async () => {
    setSending(true);
    try {
      const lines = [
        `*New Quote Request — Senaf Printing*`,
        ``,
        `*Service:* ${form.service}`,
        `*Quantity:* ${form.quantity}`,
        ``,
        `*Paper Stock:* ${form.paperStock || "—"}`,
        `*Finishing:* ${form.finishing.join(", ") || "—"}`,
        ``,
        `*Contact:* ${form.name}`,
        `*Email:* ${form.email}`,
        `*Phone:* ${form.phone || "—"}`,
        ``,
        `*Message:* ${form.message || "—"}`,
      ];
      const text = lines.join(String.fromCharCode(10));

      // Send via Telegram
      const telegramToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
      if (telegramToken && telegramChatId) {
        const tgRes = await fetch(
          `https://api.telegram.org/bot${telegramToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text,
              parse_mode: "Markdown",
            }),
          }
        );
        if (!tgRes.ok) {
          const errData = await tgRes.json();
          throw new Error(errData.description || "Telegram send failed");
        }
      }

      // Send via Email (using FormSubmit or similar)
      const emailEndpoint = import.meta.env.VITE_EMAIL_ENDPOINT;
      if (emailEndpoint) {
        const emailRes = await fetch(emailEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            service: form.service,
            quantity: form.quantity,
            message: form.message,
          }),
        });
        if (!emailRes.ok) {
          const errData = await emailRes.json();
          throw new Error(errData.message || "Email send failed");
        }
      }

      setSent(true);
      toast.success("Request sent successfully! We'll be in touch soon.");
    } catch (error: any) {
      toast.error(error.message || "Failed to send request");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-stone-100/80 border border-stone-200 rounded-lg px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all duration-200";

  return (
    <section id="quote" className="relative py-24 md:py-32 bg-stone-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-cyan-600 font-medium mb-4">
            Get a Quote
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
            Start Your{" "}
            <span className="text-cyan-600">Print Project</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Tell us what you need, and we'll prepare a tailored quote within
            24 hours.
          </p>
        </motion.div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-2">
              Request Received!
            </h3>
            <p className="text-stone-500">
              Thank you, {form.name}. We'll review your project and get back
              to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Steps Indicator */}
            <div className="flex items-center justify-center gap-2 mb-10">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      i <= step
                        ? "bg-cyan-600 text-white"
                        : "bg-stone-200 text-stone-400"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:block ${
                      i <= step ? "text-stone-800" : "text-stone-400"
                    }`}
                  >
                    {s}
                  </span>
                  {i < steps.length - 1 && (
                    <div
                      className={`w-8 h-px ${
                        i < step ? "bg-cyan-600" : "bg-stone-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-10 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 0: Service Selection - Visual Card Grid */}
                  {step === 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900 mb-6">
                        What service do you need?
                      </h3>
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        {SERVICES.map((s) => {
                          const Icon = iconMap[s.icon] || Image;
                          const isSelected = form.service === s.title;
                          return (
                            <motion.button
                              key={s.id}
                              variants={cardVariants}
                              onClick={() => update("service", s.title)}
                              className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 text-left ${
                                isSelected
                                  ? "border-cyan-500 bg-cyan-50/50 shadow-md shadow-cyan-500/10"
                                  : "border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm"
                              }`}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {/* Image background */}
                              <div className="relative h-28 overflow-hidden sm:h-32">
                                <img
                                  src={s.image}
                                  alt={s.title}
                                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                {/* Icon badge */}
                                <div
                                  className={`absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 ${
                                    isSelected
                                      ? "bg-cyan-500 text-white"
                                      : "bg-white/20 text-white"
                                  }`}
                                >
                                  <Icon className="h-4 w-4" />
                                </div>
                                {/* Price tag */}
                                <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-stone-800 backdrop-blur-sm">
                                  {s.basePrice > 0
                                    ? `From ${s.basePrice} ETB`
                                    : "Custom"}
                                </span>
                              </div>
                              {/* Card content */}
                              <div className="p-3.5">
                                <h4 className="text-sm font-semibold text-stone-900">
                                  {s.title}
                                </h4>
                                <p className="mt-0.5 text-xs leading-relaxed text-stone-500">
                                  {s.description}
                                </p>
                              </div>
                              {/* Selected checkmark */}
                              {isSelected && (
                                <div className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-white shadow-sm">
                                  <Check className="h-3.5 w-3.5" />
                                </div>
                              )}
                            </motion.button>
                          );
                        })}
                      </motion.div>
                    </div>
                  )}

                  {/* Step 1: Specs */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900 mb-6">
                        Project Specifications
                      </h3>
                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            Quantity
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={form.quantity}
                            onChange={(e) =>
                              update("quantity", e.target.value)
                            }
                            className={inputClass}
                            placeholder="e.g., 500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            Paper Stock (optional)
                          </label>
                          <select
                            value={form.paperStock}
                            onChange={(e) =>
                              update("paperStock", e.target.value)
                            }
                            className={inputClass}
                          >
                            <option value="">Select paper stock</option>
                            {PAPER_STOCK.map((p) => (
                              <option key={p} value={p}>
                                {p}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            Finishing Options
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {FINISHING_OPTIONS.map((opt) => (
                              <button
                                key={opt}
                                onClick={() => toggleFinishing(opt)}
                                className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                                  form.finishing.includes(opt)
                                    ? "bg-cyan-600 text-white border-cyan-600"
                                    : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Contact Details */}
                  {step === 2 && (
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900 mb-6">
                        Your Contact Details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            Name *
                          </label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            className={inputClass}
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1.5">
                              Email *
                            </label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) =>
                                update("email", e.target.value)
                              }
                              className={inputClass}
                              placeholder="your@email.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1.5">
                              Phone (optional)
                            </label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) =>
                                update("phone", e.target.value)
                              }
                              className={inputClass}
                              placeholder="+251 9XX XXX XXX"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            Additional Details (optional)
                          </label>
                          <textarea
                            value={form.message}
                            onChange={(e) =>
                              update("message", e.target.value)
                            }
                            rows={4}
                            className={`${inputClass} resize-none`}
                            placeholder="Describe your project, deadlines, special requirements..."
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Review */}
                  {step === 3 && (
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900 mb-6">
                        Review Your Request
                      </h3>
                      <div className="bg-stone-50 rounded-xl p-5 space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b border-stone-200">
                          <span className="text-stone-500">Service</span>
                          <span className="font-medium text-stone-800">
                            {form.service}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-stone-200">
                          <span className="text-stone-500">Quantity</span>
                          <span className="font-medium text-stone-800">
                            {form.quantity}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-stone-200">
                          <span className="text-stone-500">Paper Stock</span>
                          <span className="font-medium text-stone-800">
                            {form.paperStock || "—"}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-stone-200">
                          <span className="text-stone-500">Finishing</span>
                          <span className="font-medium text-stone-800">
                            {form.finishing.join(", ") || "—"}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-stone-200">
                          <span className="text-stone-500">Name</span>
                          <span className="font-medium text-stone-800">
                            {form.name}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-stone-200">
                          <span className="text-stone-500">Email</span>
                          <span className="font-medium text-stone-800">
                            {form.email}
                          </span>
                        </div>
                        {form.phone && (
                          <div className="flex justify-between py-2 border-b border-stone-200">
                            <span className="text-stone-500">Phone</span>
                            <span className="font-medium text-stone-800">
                              {form.phone}
                            </span>
                          </div>
                        )}
                        {form.message && (
                          <div className="py-2">
                            <span className="text-stone-500 block mb-1">
                              Message
                            </span>
                            <span className="font-medium text-stone-800">
                              {form.message}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-stone-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronUp className="w-4 h-4 -rotate-90" />
                  Back
                </button>

                {step < steps.length - 1 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canProceed()}
                    className="flex items-center gap-1.5 bg-cyan-600 hover:bg-cyan-700 disabled:bg-stone-300 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ChevronDown className="w-4 h-4 -rotate-90" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={sending}
                    className="flex items-center gap-1.5 bg-cyan-600 hover:bg-cyan-700 disabled:bg-stone-300 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Request
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400"
            >
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                {BRAND.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                {BRAND.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {BRAND.location}
              </span>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
