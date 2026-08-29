import { instagramPosts } from "@/data/products";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const InstagramFeed = () => {
  return (
    <section className="py-24 px-4 bg-foreground text-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-3 block">
            Social
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Follow Our Aura
          </h2>
          <a
            href="https://instagram.com/the.aura11.11"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-card/80 hover:text-primary transition-colors duration-300 font-sans tracking-widest text-sm uppercase"
          >
            <span className="w-8 h-8 rounded-full border border-card/30 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
              <Instagram className="h-4 w-4" />
            </span>
            @the.aura11.11
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2 lg:gap-4 max-w-7xl mx-auto">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              href="https://instagram.com/the.aura11.11"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded-none md:rounded-sm relative group cursor-pointer block"
            >
              <img
                src={post}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Instagram className="text-white h-8 w-8 scale-50 group-hover:scale-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
