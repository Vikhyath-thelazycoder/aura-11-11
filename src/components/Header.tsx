/**
 * Header — SOP: @ui-ux-pro-max + @react-patterns + @frontend-design
 * Three-column flex layout (no absolute positioning) to prevent overlap.
 * Smart scroll hide/reveal, glassmorphism, accessible keyboard nav.
 */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/useCart";
import { useWishlist } from "@/context/useWishlist";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Shop", path: "/shop" },
  { name: "Custom Gifts", path: "/custom-gifts" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlist } = useWishlist();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setAtTop(latest < 20);
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${atTop
          ? "bg-transparent border-transparent"
          : "bg-card/90 backdrop-blur-xl border-b border-border/60 shadow-card-sm"
        }`}
    >
      {/* Announcement bar */}
      <div className="hidden md:flex items-center justify-center bg-foreground text-card py-2 px-4 text-[10px] font-mono tracking-[0.2em] uppercase">
        ✦ Free gift wrapping on all orders above ₹1,500 &nbsp;·&nbsp; Same-day dispatch before 2 PM ✦
      </div>

      <div className="container mx-auto px-6 py-4 grid grid-cols-3 items-center">
        {/* Left — Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`group relative text-[11px] font-sans font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${isActive(link.path) ? "text-primary" : atTop ? "text-card/90 hover:text-card" : "text-foreground/70 hover:text-foreground"
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </nav>

        {/* Mobile — hamburger */}
        <div className="lg:hidden col-start-1 flex justify-start">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation menu"
                className={`p-2 rounded-full transition-colors ${atTop ? "text-card hover:bg-white/10" : "text-foreground hover:bg-black/5"}`}
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[320px] bg-card border-r border-border p-0 flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-display text-xl font-medium text-foreground">The Aura 11:11</span>
                <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-full hover:bg-muted transition-colors" aria-label="Close menu">
                  <X className="h-4 w-4 text-foreground/60" />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1 flex-grow">
                <Link to="/" onClick={() => setMobileOpen(false)} className="py-3 px-3 rounded-md font-sans text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors">
                  Home
                </Link>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3 px-3 rounded-md font-sans text-sm font-medium transition-colors ${isActive(link.path) ? "text-primary bg-primary/8" : "text-foreground/80 hover:text-foreground hover:bg-muted"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-6 border-t border-border">
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
                  Gifts That Match Their Aura
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center — Logo */}
        <div className="col-start-2 flex justify-center">
          <Link to="/" className="group text-center flex-none">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className={`font-display text-2xl lg:text-3xl font-medium tracking-tight transition-colors duration-300 leading-none ${atTop ? "text-card" : "text-foreground"} group-hover:text-primary`}>
                The Aura 11:11
              </p>
              <p className={`font-mono text-[8px] tracking-[0.35em] uppercase mt-1.5 hidden sm:block transition-colors ${atTop ? "text-card/60" : "text-muted-foreground"}`}>
                Gifting Studio
              </p>
            </motion.div>
          </Link>
        </div>

        {/* Right — Nav + Icons */}
        <div className="col-start-3 flex items-center justify-end gap-6">
          {/* Desktop right nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative text-[11px] font-sans font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${isActive(link.path) ? "text-primary" : atTop ? "text-card/90 hover:text-card" : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </nav>

          {/* Icon cluster */}
          <div className="flex items-center gap-1">
            <button
              aria-label="Search products"
              id="header-search-btn"
              className={`p-2 rounded-full transition-all duration-200 ${atTop ? "text-card/80 hover:text-card hover:bg-white/10" : "text-foreground/60 hover:text-foreground hover:bg-black/5"}`}
            >
              <Search className="h-[18px] w-[18px]" />
            </button>

            <Link
              to="/shop"
              aria-label={`Wishlist (${wishlist.length} items)`}
              id="header-wishlist-btn"
              className={`relative p-2 rounded-full transition-all duration-200 ${atTop ? "text-card/80 hover:text-card hover:bg-white/10" : "text-foreground/60 hover:text-foreground hover:bg-black/5"}`}
            >
              <Heart className="h-[18px] w-[18px]" />
              <AnimatePresence>
                {wishlist.length > 0 && (
                  <motion.span
                    key="wishlist-badge"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    className="absolute top-1 right-1 bg-primary text-primary-foreground text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                  >
                    {wishlist.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Cart (${totalItems} items)`}
              id="header-cart-btn"
              className={`relative p-2 rounded-full transition-all duration-200 ${atTop ? "text-card/80 hover:text-card hover:bg-white/10" : "text-foreground/60 hover:text-foreground hover:bg-black/5"}`}
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key="cart-badge"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    className="absolute top-1 right-1 bg-primary text-primary-foreground text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
