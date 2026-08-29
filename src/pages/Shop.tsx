import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sortOptions = [
  { value: "popular", label: "Popular" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    const result = activeCategory === "all" ? [...products] : products.filter((p) => p.category === activeCategory);
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortBy === "newest") result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    return result;
  }, [activeCategory, sortBy]);

  const setCategory = (cat: string) => {
    if (cat === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 pt-10"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-4 block">
            Discover Everything
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-foreground tracking-tight mb-6">
            The Collection
          </h1>
          <p className="text-foreground/60 max-w-lg mx-auto font-light text-lg">
            Explore our handpicked selection of personalized gifts, curated with profound love.
          </p>
        </motion.div>

        {/* Filters bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sticky top-20 z-30 bg-background/80 backdrop-blur-md py-4 border-y border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4"
        >
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-foreground/80 hover:text-foreground transition-colors lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          <div className="hidden lg:flex items-center gap-6 flex-wrap">
            <button
              onClick={() => setCategory("all")}
              className={`text-[13px] tracking-widest uppercase pb-1 border-b-2 transition-all duration-300 ${activeCategory === "all" ? "border-primary text-primary font-medium" : "border-transparent text-foreground/60 hover:text-foreground"
                }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`text-[13px] tracking-widest uppercase pb-1 border-b-2 transition-all duration-300 ${activeCategory === cat.id ? "border-primary text-primary font-medium" : "border-transparent text-foreground/60 hover:text-foreground"
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className="text-[11px] uppercase tracking-widest text-foreground/40 hidden sm:block">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-[13px] tracking-wider uppercase font-medium bg-transparent border-b border-border/50 pb-1 text-foreground focus:outline-none focus:border-primary cursor-pointer transition-colors"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value} className="text-sm font-sans normal-case text-foreground bg-card">{o.label}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Mobile filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden mb-8"
            >
              <div className="flex items-center gap-3 flex-wrap py-2">
                <button
                  onClick={() => setCategory("all")}
                  className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300 ${activeCategory === "all" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-foreground/70"
                    }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300 ${activeCategory === cat.id ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-foreground/70"
                      }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory + sortBy} // trigger re-animation on sort/filter change
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-8 md:gap-y-12"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <p className="font-display text-2xl text-foreground/60 mb-4">No products found</p>
            <button onClick={() => setCategory("all")} className="text-primary hover:underline underline-offset-4 tracking-widest uppercase text-sm font-medium">Clear Filters</button>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Shop;
