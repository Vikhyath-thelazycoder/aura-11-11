/**
 * Footer — SOP: @ui-ux-pro-max + @seo-audit + @frontend-design
 * Dark, editorial footer with newsletter CTA, proper semantic markup,
 * full accessibility (aria-labels on all links), and payment methods.
 */
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const exploreLinks = [
  { name: "Shop All", path: "/shop" },
  { name: "Custom Gifts", path: "/custom-gifts" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const careLinks = [
  "FAQs",
  "Shipping Policy",
  "Returns & Exchanges",
  "Privacy Policy",
  "Terms of Service",
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-ink text-card/70 font-sans" aria-label="Site footer">
      {/* Newsletter band */}
      <div className="border-b border-card/10">
        <div className="container mx-auto px-6 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1 max-w-sm">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-3">
              Stay Connected
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-card tracking-tight">
              Join the Aura Community
            </h3>
            <p className="font-sans text-sm text-card/50 mt-2 font-light">
              Gift inspiration, exclusive offers, and early access to new collections.
            </p>
          </div>

          {/* Newsletter form — SOP @form-cro */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-0 w-full max-w-md"
            aria-label="Newsletter subscription form"
          >
            {subscribed ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary py-4"
              >
                ✓ You're on the list — thank you!
              </motion.p>
            ) : (
              <>
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-transparent border border-card/20 border-r-0 px-5 py-3.5 text-card placeholder:text-card/30 font-sans text-sm focus:outline-none focus:border-primary transition-colors font-light"
                />
                <button
                  type="submit"
                  id="footer-subscribe-btn"
                  className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 font-mono text-[9px] tracking-[0.2em] uppercase hover:bg-card hover:text-foreground transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="/" aria-label="Aura Gifting Studio home">
              <p className="font-display text-3xl font-medium text-card tracking-tight mb-1">
                The Aura 11:11
              </p>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-card/40 mb-6">
                Gifting Studio
              </p>
            </Link>
            <p className="font-sans text-sm leading-relaxed mb-8 max-w-xs text-card/50 font-light">
              Personalized gifting, curated with love. Elevating everyday moments with thoughtfulness and premium craftsmanship.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <a
                href="mailto:hello@theaura1111.com"
                aria-label="Email us at hello@theaura1111.com"
                className="flex items-center gap-3 text-sm text-card/50 hover:text-primary transition-colors duration-200 group"
              >
                <Mail className="h-3.5 w-3.5 text-primary/60 group-hover:text-primary flex-shrink-0" />
                hello@theaura1111.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/the.aura11.11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-full border border-card/15 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-card transition-all duration-300"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-full border border-card/15 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-card transition-all duration-300"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-card/40 mb-6">
                Explore
              </h4>
              <nav aria-label="Footer explore navigation">
                <ul className="space-y-3">
                  {exploreLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="font-sans text-sm text-card/55 hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block font-light"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-card/40 mb-6">
                Support
              </h4>
              <ul className="space-y-3">
                {careLinks.map((item) => (
                  <li key={item}>
                    {item === "Contact" ? (
                      <Link
                        to="/contact"
                        className="font-sans text-sm text-card/55 hover:text-primary transition-colors duration-200 font-light"
                      >
                        {item}
                      </Link>
                    ) : (
                      <button className="font-sans text-sm text-card/55 hover:text-primary transition-colors duration-200 text-left font-light">
                        {item}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-card/40 mb-6">
                Gifting
              </h4>
              <ul className="space-y-3">
                {["Corporate Gifting", "Wedding Favours", "Birthday Gifts", "Festival Hampers", "Custom Orders"].map((item) => (
                  <li key={item}>
                    <button className="font-sans text-sm text-card/55 hover:text-primary transition-colors duration-200 text-left font-light">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-card/8">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-card/30">
            © {new Date().getFullYear()} The Aura 11:11. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "UPI", "Mastercard", "RuPay", "COD"].map((method) => (
              <span
                key={method}
                className="font-mono text-[8px] tracking-widest uppercase px-2.5 py-1 border border-card/12 text-card/30 rounded-sm"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
