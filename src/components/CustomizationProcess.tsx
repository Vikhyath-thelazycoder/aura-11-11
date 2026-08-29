import { MousePointerClick, Upload, Truck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MousePointerClick,
    step: "01",
    title: "Choose Your Product",
    description: "Browse our collection and pick the perfect gift to customize.",
  },
  {
    icon: Upload,
    step: "02",
    title: "Upload Photo / Text",
    description: "Share your favorite photo or a heartfelt message to personalize it.",
  },
  {
    icon: Truck,
    step: "03",
    title: "We Create & Deliver",
    description: "Our artisans craft your gift with love and deliver it to your doorstep.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const CustomizationProcess = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-3 block">
            The Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-4">
            How to Create Your Custom Gift
          </h2>
          <p className="text-foreground/60 max-w-md mx-auto font-light text-lg">
            Three simple steps to create something truly magical.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto position-relative"
        >
          {steps.map((s, i) => (
            <motion.div key={s.step} variants={item} className="text-center relative group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[2.5rem] left-[60%] w-[80%] border-t border-dashed border-primary/20 z-0" />
              )}
              <div className="w-20 h-20 rounded-full bg-card border border-border/50 flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-primary/50 transition-colors duration-500 shadow-sm">
                <s.icon className="h-7 w-7 text-primary/80 group-hover:text-primary transition-colors" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground font-display text-sm w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md transform group-hover:scale-110 transition-transform duration-300">
                  {s.step}
                </span>
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">{s.title}</h3>
              <p className="text-foreground/60 leading-relaxed font-light px-4">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomizationProcess;
