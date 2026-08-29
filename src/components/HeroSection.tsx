/**
 * HeroSection — SOP: @ui-ux-pro-max + @scroll-experience + @copywriting
 * Full-bleed cinematic hero with parallax, staggered text reveal,
 * dual-CTA layout, and scroll indicator.
 */
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

// SOP §3 — text reveal variant
const revealVariant = {
  hidden: { y: "105%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.12,
    },
  }),
};

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.1,
    },
  }),
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] max-h-[1000px] w-full overflow-hidden flex items-center justify-center"
      aria-label="Hero — Aura Gifting Studio"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[115%] -top-[7%]"
      >
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
          src="/images/hero-bg.svg"
          alt="Beautiful curated gift arrangements by Aura Gifting Studio"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/10" />

      {/* Main content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full container mx-auto px-6 flex flex-col items-center justify-center text-center pt-28 md:pt-24"
      >
        {/* Main headline — staggered line reveals */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            custom={0}
            variants={revealVariant}
            initial="hidden"
            animate="visible"
            className="font-display text-display-xl text-white font-medium leading-[1.0] tracking-tight"
          >
            Gifts That Speak
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.p
            custom={1}
            variants={revealVariant}
            initial="hidden"
            animate="visible"
            className="font-display text-display-xl text-primary font-light italic leading-[1.0]"
          >
            to the Heart.
          </motion.p>
        </div>

        {/* Badge — placed below headlines, well clear of header */}
        <motion.div
          custom={2}
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-1.5 rounded-full font-mono text-[10px] tracking-[0.2em] uppercase mb-8"
        >
          <Sparkles className="h-3 w-3 text-primary" />
          Crafted With Intention
        </motion.div>

        {/* Subtext */}
        <motion.p
          custom={3}
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          className="text-white/75 font-sans text-base md:text-lg font-light max-w-xl leading-relaxed mb-12 tracking-wide"
        >
          Personalized gifting, curated with love — because every moment
          deserves an aura of its very own.
        </motion.p>

        {/* Dual CTA — SOP @form-cro */}
        <motion.div
          custom={4}
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/shop"
            id="hero-cta-primary"
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-card-lg"
          >
            <span className="relative z-10">Explore Collection</span>
            <ArrowRight className="h-3.5 w-3.5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-foreground scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </Link>
          <Link
            to="/custom-gifts"
            id="hero-cta-secondary"
            className="group inline-flex items-center gap-2.5 text-white border border-white/40 hover:border-white px-8 py-4 font-sans text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/10"
          >
            Design Your Gift
          </Link>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          custom={5}
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-6 mt-14 text-white/50 font-mono text-[9px] tracking-[0.15em] uppercase"
        >
          <span>500+ Happy Customers</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Handcrafted in India</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Same-Day Dispatch</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
