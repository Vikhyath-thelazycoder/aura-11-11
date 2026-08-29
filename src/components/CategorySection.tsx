/**
 * CategorySection — SOP: @ui-ux-pro-max + @frontend-design + @scroll-experience
 * Full-bleed image tiles with editorial typography and hover reveals.
 * Responsive: 1→2→4 columns.
 */
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categoryImages: Record<string, string> = {
  frames: "/images/product-1.svg",
  hampers: "/images/product-2.svg",
  mugs: "/images/instagram-1.svg",
  "gift-sets": "/images/instagram-2.svg",
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const CategorySection = () => {
  return (
    <section className="py-28 px-0 bg-cream/60" aria-labelledby="categories-heading">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-4">
              Browse By Category
            </p>
            <h2
              id="categories-heading"
              className="font-display text-display-lg text-foreground font-medium tracking-tight"
            >
              Curated Collections
            </h2>
          </div>
          <Link
            to="/shop"
            id="view-all-categories"
            className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 self-start md:self-auto mb-1"
          >
            View All
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>

      {/* 4-column category grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-2 lg:grid-cols-4"
      >
        {categories.map((cat, index) => (
          <motion.div key={cat.id} variants={tileVariants}>
            <Link
              to={`/shop?category=${cat.id}`}
              id={`category-${cat.id}`}
              aria-label={`Shop ${cat.name}`}
              className="group relative block w-full overflow-hidden"
              style={{
                aspectRatio: index % 2 === 0 ? "4/5" : "4/5.5",
              }}
            >
              <img
                src={categoryImages[cat.id]}
                alt={cat.name}
                loading={index < 2 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-108"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/85" />

              {/* Thin accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-2">
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/50 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    {(products_count as Record<string, number>)[cat.id] ?? 2} Products
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-white tracking-tight leading-tight">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 ease-[0.16,1,0.3,1]">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/80">Shop Now</span>
                  <ArrowRight className="h-3 w-3 text-primary" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// product count per category
const products_count = { frames: 2, hampers: 2, mugs: 2, "gift-sets": 2 };

export default CategorySection;
