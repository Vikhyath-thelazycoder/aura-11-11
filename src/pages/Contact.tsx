import { Mail, Phone, Instagram, Facebook, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="bg-secondary/20 py-24 px-4 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto text-center max-w-2xl pt-8"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-4 block">
            Connect
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-foreground/70 text-xl font-light max-w-xl mx-auto leading-relaxed">
            Have a question, custom request, or just want to say hello? We'd absolutely love to hear from you.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-4xl font-medium text-foreground mb-10 tracking-tight">Send a Message</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="group">
                  <label className="block text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-3 group-focus-within:text-primary transition-colors">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-border/60 rounded-none px-0 py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-lg" placeholder="John Doe" />
                </div>
                <div className="group">
                  <label className="block text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-3 group-focus-within:text-primary transition-colors">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-border/60 rounded-none px-0 py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-lg" placeholder="john@example.com" />
                </div>
                <div className="group">
                  <label className="block text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-3 group-focus-within:text-primary transition-colors">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-border/60 rounded-none px-0 py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none text-lg" placeholder="How can we help you create magic?" />
                </div>
                <button type="submit" className="group relative overflow-hidden inline-flex items-center justify-center bg-foreground text-card px-10 py-5 font-medium text-[13px] tracking-[0.15em] uppercase w-full sm:w-auto mt-4 transition-colors">
                  <div className="absolute inset-0 w-full h-full bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  <span className="relative z-10 flex items-center gap-3">
                    Submit Request
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card border border-border/50 p-10 md:p-14 lg:mt-0"
            >
              <h2 className="font-display text-4xl font-medium text-foreground mb-12 tracking-tight">Direct Info</h2>
              <div className="space-y-12">
                <a href="mailto:hello@theaura1111.com" className="group block">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center group-hover:border-primary transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-1">Email</p>
                      <p className="text-xl font-light text-foreground group-hover:text-primary transition-colors">hello@theaura1111.com</p>
                    </div>
                  </div>
                </a>

                <a href="tel:+919876543210" className="group block">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center group-hover:border-primary transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-1">Phone</p>
                      <p className="text-xl font-light text-foreground group-hover:text-primary transition-colors">+91 98765 43210</p>
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-1">Location</p>
                    <p className="text-xl font-light text-foreground">India</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-border/50">
                <p className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-6">Socials</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/the.aura11.11" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-border/60 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-14 h-14 rounded-full border border-border/60 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
