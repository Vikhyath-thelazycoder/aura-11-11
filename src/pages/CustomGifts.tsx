import { Link } from "react-router-dom";
import { Upload, Palette, Gift, ArrowRight } from "lucide-react";
import { instagramPosts } from "@/data/products";
import { motion } from "framer-motion";

const steps = [
  { icon: Palette, title: "Choose a Product", desc: "Pick from elegantly crafted frames, mugs, hampers, or gift sets as your base." },
  { icon: Upload, title: "Share Your Vision", desc: "Upload precious photos or describe your absolute dream gift — we'll make it happen." },
  { icon: Gift, title: "Receive Your Creation", desc: "We craft it flawlessly with love and deliver it beautifully wrapped to your door." },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const CustomGifts = () => {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="bg-foreground text-card py-32 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto text-center max-w-3xl relative z-10"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-6 block">
            Bespoke Creations
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium mb-8 tracking-tight">
            Custom Gifts
          </h1>
          <p className="text-card/70 text-xl font-light mb-12 leading-relaxed">
            Can't find exactly what you're looking for? Let us create something uniquely yours —
            a one-of-a-kind masterpiece specifically crafted to perfectly match their aura.
          </p>
          <a href="#request" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 font-medium text-[13px] tracking-[0.15em] uppercase hover:bg-white hover:text-foreground transition-all duration-300">
            Start Custom Order
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">How It Works</h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto"
          >
            {steps.map((s, i) => (
              <motion.div key={i} variants={item} className="text-center group">
                <div className="w-20 h-20 rounded-full border border-border/60 flex items-center justify-center mx-auto mb-8 group-hover:border-primary transition-colors duration-500">
                  <s.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-display text-2xl font-medium mb-4">{s.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-light">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 px-4 bg-secondary/30 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-4">Past Creations</h2>
            <p className="text-foreground/60 font-light text-lg">A glimpse of the pure magic we've proudly crafted for our customers.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {instagramPosts.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="aspect-square overflow-hidden group"
              >
                <img src={img} alt={`Custom creation ${i + 1}`} className="w-full h-full object-cover transform transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="py-32 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-4 block">
                Inquire
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">Request a Custom Gift</h2>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-3 group-focus-within:text-primary transition-colors">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-border/60 rounded-none px-0 py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-lg" placeholder="John Doe" />
                </div>
                <div className="group">
                  <label className="block text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-3 group-focus-within:text-primary transition-colors">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-border/60 rounded-none px-0 py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-lg" placeholder="john@example.com" />
                </div>
              </div>
              <div className="group">
                <label className="block text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-3 group-focus-within:text-primary transition-colors">Describe Your Vision</label>
                <textarea rows={5} className="w-full bg-transparent border-b border-border/60 rounded-none px-0 py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none text-lg" placeholder="Tell us exactly what you're dreaming of..." />
              </div>
              <div className="text-center pt-8">
                <button type="submit" className="group relative overflow-hidden inline-flex items-center justify-center bg-foreground text-card px-12 py-5 font-medium text-[13px] tracking-[0.15em] uppercase w-full sm:w-auto transition-colors">
                  <div className="absolute inset-0 w-full h-full bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  <span className="relative z-10 flex items-center gap-3">
                    Submit Inquiry
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CustomGifts;
