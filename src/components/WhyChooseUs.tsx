/**
 * WhyChooseUs — SOP: @ui-ux-pro-max + @frontend-design + @copywriting
 * Dark-on-cream alternating layout, trust-building section.
 * Large numbered steps with editorial typography.
 */
import { Sparkles, Heart, Gift, Truck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    number: "01",
    title: "Tailored for You",
    description:
      "Every gift is personalized to create a unique, lasting connection that speaks directly to the heart of the recipient.",
  },
  {
    icon: Heart,
    number: "02",
    title: "Curated with Care",
    description:
      "We source only the finest products for our hampers and gift sets, ensuring premium quality at every price point.",
  },
  {
    icon: Gift,
    number: "03",
    title: "Unforgettable Moments",
    description:
      "We believe special people deserve extraordinary gifts — so we create lasting memories with every single delivery.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Reliable Delivery",
    description:
      "Same-day dispatch on orders placed before 2 PM. Beautiful packaging that arrives in perfect, gift-ready condition.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-28 bg-foreground" aria-labelledby="why-choose-heading">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end gap-8 mb-20"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-4">
              The Experience
            </p>
            <h2
              id="why-choose-heading"
              className="font-display text-display-lg text-card font-medium tracking-tight"
            >
              Why The Aura 11:11?
            </h2>
          </div>
          <p className="font-sans text-card/50 font-light text-lg max-w-sm leading-relaxed mb-1 ml-auto">
            We believe every gift should carry an aura of love, warmth, and absolute thoughtfulness.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              className="group flex flex-col"
            >
              {/* Icon + number */}
              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 rounded-full border border-card/15 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-[11px] tracking-[0.2em] text-card/25 uppercase">
                  {f.number}
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-card/10 mb-7 group-hover:bg-primary/30 transition-colors duration-500" />

              <h3 className="font-display text-xl font-medium text-card tracking-tight mb-3">
                {f.title}
              </h3>
              <p className="font-sans text-sm text-card/50 font-light leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
