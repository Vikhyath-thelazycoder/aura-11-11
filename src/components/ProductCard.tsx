/**
 * ProductCard — SOP: @ui-ux-pro-max + @react-patterns + @frontend-design
 * Editorial layout — large image, clean typography, hover overlay CTA.
 * Fully accessible: ARIA labels, keyboard-friendly focus states.
 */
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/context/useCart";
import { useWishlist } from "@/context/useWishlist";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  /** Optional — pass "show" variant from parent stagger container */
  priority?: boolean;
}

/** Framer variant — consumed by parent container stagger */
export const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const ProductCard = ({ product, priority = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const discountPct = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.article
      variants={cardVariant}
      className="group flex flex-col h-full"
      aria-label={`${product.name} — ₹${product.price.toLocaleString()}`}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40 mb-4">
        {/* Badge cluster */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
          {product.isSale && discountPct && (
            <span className="bg-primary text-primary-foreground text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest font-mono">
              -{discountPct}%
            </span>
          )}
          {product.isNew && (
            <span className="bg-foreground text-card text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest font-mono">
              New
            </span>
          )}
        </div>

        {/* Wishlist toggle */}
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
          aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={wishlisted}
          id={`wishlist-btn-${product.id}`}
          className="absolute top-3 right-3 z-10 bg-card/70 hover:bg-card backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Heart
            className={`h-3.5 w-3.5 transition-all duration-200 ${wishlisted ? "fill-primary text-primary scale-110" : "text-foreground/60"}`}
          />
        </button>

        {/* Product image */}
        <Link
          to={`/product/${product.id}`}
          className="block w-full h-full"
          tabIndex={0}
          aria-label={`View ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            loading={priority ? "eager" : "lazy"}
            className="w-full h-full object-cover transform transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
          />
          {/* Subtle top vignette on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        {/* Slide-up Add to Bag overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"
          aria-hidden="true"
        >
          <button
            onClick={(e) => { e.preventDefault(); addToCart(product); }}
            id={`add-to-cart-${product.id}`}
            className="w-full flex items-center justify-center gap-2 bg-card/95 backdrop-blur-sm text-foreground py-3 text-[10px] font-bold tracking-[0.2em] uppercase font-mono hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <ShoppingBag className="h-3.5 w-3.5 flex-shrink-0" />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="flex flex-col flex-grow text-center px-1">
        <Link to={`/product/${product.id}`} className="group/title">
          <h3 className="font-display text-base md:text-lg font-medium text-foreground line-clamp-2 leading-tight hover:text-primary transition-colors duration-200 tracking-tight">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-2.5 mt-2">
          <span className="font-sans text-sm font-semibold text-foreground tracking-wide">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="font-sans text-xs text-muted-foreground line-through font-light">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
