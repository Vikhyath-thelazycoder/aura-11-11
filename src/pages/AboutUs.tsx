import { Heart, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const AboutUs = () => {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="bg-secondary/20 py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto text-center max-w-4xl pt-10"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-4 block">
            Our Story
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 tracking-tight">
            About The Aura 11:11
          </h1>
          <p className="text-foreground/70 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Where every gift carries an aura of infinite love, profound warmth, and beautiful intention.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 text-foreground/70 leading-relaxed font-light text-lg md:text-xl"
          >
            <motion.p variants={item} className="first-letter:text-7xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:pr-4 first-letter:leading-[0.8]">
              The Aura 11:11 was born from a simple belief — that gifts should be more than just beautifully wrapped objects.
              They should carry energy, intention, and a piece of someone's heart. The name itself is inspired
              by the magic of 11:11, a moment of perfect alignment and profound manifestation.
            </motion.p>
            <motion.p variants={item}>
              We started as a small passion project, intimately creating personalized frames and meticulously curated hampers for
              close friends and family. The overwhelming love, tears of joy, and deep emotional connections our gifts brought
              inspired us to share this magic with the world on a larger scale.
            </motion.p>
            <motion.p variants={item}>
              Today, every single product we create is infused with care, boundless creativity, and a deep understanding that
              the best gifts aren't just received — they're deeply felt. From custom photo frames to luxurious hampers,
              each creation is a celebration of the timeless bond between giver and receiver.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-4 bg-foreground text-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">What We Stand For</h2>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto"
          >
            {[
              { icon: Heart, title: "Love in Every Detail", desc: "Every product is handcrafted with genuine care and absolute attention to the smallest details." },
              { icon: Sparkles, title: "Unique & Personal", desc: "No two gifts are ever the same. We celebrate individuality and create pieces that tell your exact story." },
              { icon: Star, title: "Quality First", desc: "From raw materials to premium packaging, we never compromise on quality. Your gift simply deserves the best." },
            ].map((v) => (
              <motion.div key={v.title} variants={item} className="text-center group">
                <div className="w-20 h-20 rounded-full border border-card/20 flex items-center justify-center mx-auto mb-8 group-hover:border-primary transition-colors duration-500">
                  <v.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-display text-2xl font-medium mb-4">{v.title}</h3>
                <p className="text-card/60 font-light leading-relaxed px-4">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto max-w-2xl text-center"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-4 block">
            Meet the Creator
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-10">The Aura Team</h2>
          <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center mx-auto mb-8 shadow-sm">
            <span className="text-4xl">✨</span>
          </div>
          <p className="text-foreground/70 leading-relaxed font-light text-xl">
            A boutique team of dreamers, artists, and gift enthusiasts who believe in the undeniable power of thoughtful
            giving. We pour our hearts entirely into every creation, ensuring that each gift carries the absolute perfect aura
            for its recipient.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutUs;
