/**
 * FeaturedProducts (Trending Items) — SOP: @ui-ux-pro-max + @react-patterns + @copywriting
 * Staggered entrance, "Trending" editorial label, responsive 4-column grid.
 */
import ProductCard, { cardVariant } from "./ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="py-28 px-6" aria-labelledby="featured-heading">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-4">
              Most Loved &mdash; Trending Now
            </p>
            <h2
              id="featured-heading"
              className="font-display text-display-lg text-foreground font-medium tracking-tight"
            >
              Aura Favourites
            </h2>
          </div>
          <Link
            to="/shop"
            id="featured-view-all"
            className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 self-start md:self-auto mb-1"
          >
            View All Products
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Product grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
        >
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 2} />
          ))}
        </motion.div>

        {/* Bottom CTA — SOP @form-cro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-20"
        >
          <Link
            to="/shop"
            id="featured-bottom-cta"
            className="group relative overflow-hidden inline-flex items-center gap-3 border border-foreground/25 text-foreground px-10 py-4 font-mono text-[10px] font-medium tracking-[0.2em] uppercase hover:border-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
              Explore Full Collection
            </span>
            <ArrowRight className="h-3.5 w-3.5 relative z-10 group-hover:translate-x-1 transition-transform duration-300 group-hover:text-primary-foreground" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
