import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.jpg";


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Hayat Fitness Gym interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 diagonal-stripes" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20 md:pt-0">
        {/* 10 Year Anniversary Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border-2 border-primary bg-primary/10 backdrop-blur-sm"
        >
          <span className="text-primary font-heading text-sm md:text-base uppercase tracking-widest gold-text-glow">
            🎉 Celebrating 10 Years — Est. 2016
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-4 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Train Hard. Live Strong.{" "}
          <span className="text-primary gold-text-glow">Since 2016.</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Kondhwa's most trusted fitness destination — Hayat Fitness Gym
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="#membership">
            <Button size="lg" className="font-heading uppercase tracking-wider text-lg px-8 gold-glow">
              Get Started
            </Button>
          </a>
          <a href="#membership">
            <Button size="lg" variant="outline" className="font-heading uppercase tracking-wider text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Plans
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Bottom geometric divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="geometric-divider" />
      </div>
    </section>
  );
};

export default Hero;
