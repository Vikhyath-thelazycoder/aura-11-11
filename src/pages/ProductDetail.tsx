import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/useCart";
import { useWishlist } from "@/context/useWishlist";
import { Heart, ShoppingBag, ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <main className="container mx-auto px-4 py-32 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="font-display text-5xl font-medium text-foreground mb-6">Product Not Found</h1>
        <Link to="/shop" className="text-primary uppercase tracking-widest text-sm hover:underline underline-offset-4">Return to Collection</Link>
      </main>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const images = product.images || [product.image];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <Link to="/shop" className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors text-xs uppercase tracking-widest font-medium">
            <ArrowLeft className="h-4 w-4" /> Back to Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Images Section */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-32">
            {images.length > 1 && (
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-none">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`flex-shrink-0 w-20 h-24 relative overflow-hidden bg-muted transition-all duration-300 ${i === selectedImage ? "opacity-100 ring-1 ring-primary ring-offset-2" : "opacity-60 hover:opacity-100"
                      }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="flex-grow aspect-[4/5] relative bg-secondary/30 overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src={images[selectedImage]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col pt-4 lg:pt-10"
          >
            <div className="flex gap-3 mb-6">
              {product.isSale && <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Sale</span>}
              {product.isNew && <span className="bg-foreground text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">New Arrival</span>}
            </div>

            <h1 className="font-display text-4xl lg:text-5xl font-medium text-foreground tracking-tight mb-4 leading-tight">{product.name}</h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-light text-foreground">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-lg text-foreground/40 line-through font-light">₹{product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            <div className="h-px w-full bg-border/60 mb-8" />

            <p className="text-foreground/70 leading-relaxed font-light text-lg mb-10">{product.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 group relative overflow-hidden flex items-center justify-center gap-3 bg-foreground text-card py-5 rounded-none font-medium text-[13px] tracking-[0.15em] uppercase transition-colors"
              >
                <div className="absolute inset-0 w-full h-full bg-primary scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <ShoppingBag className="h-4 w-4 relative z-10" />
                <span className="relative z-10">Add to Bag</span>
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`flex items-center justify-center sm:w-16 h-16 sm:h-auto border transition-all duration-300 ${wishlisted ? "border-primary bg-primary/5 text-primary" : "border-border text-foreground hover:border-foreground"
                  }`}
                aria-label="Toggle wishlist"
              >
                <Heart className={`h-5 w-5 transition-transform duration-300 ${wishlisted ? "fill-primary scale-110" : "scale-100 hover:scale-110"}`} />
              </button>
            </div>

            {/* Additional Info Accordions could go here */}
            <div className="mt-12 space-y-6 pt-8 border-t border-border/60">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-foreground">Shipping</span>
                <span className="text-sm text-foreground/60 font-light">Free standard shipping on all orders over ₹2000. Express delivery available at checkout.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-32 pt-16 border-t border-border/50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground tracking-tight">Complete The Aura</h2>
              <Link to={`/shop?category=${product.category}`} className="hidden md:block text-xs font-medium tracking-widest uppercase text-primary hover:underline underline-offset-4">
                View Category
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
