import { motion } from "framer-motion";
import logo from "@/assets/hayat-gym-logo.png";

const About = () => {
  return (
    <section id="about" className="py-20 geometric-pattern">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="arabesque-corner p-8">
              <img src={logo} alt="Hayat Fitness Gym" className="w-48 mx-auto mb-6 opacity-90" />
              <p className="text-center font-heading text-2xl text-primary uppercase tracking-wider">
                "Strength, Discipline & Brotherhood"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl uppercase mb-2">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="geometric-divider mb-6 w-32" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Since 2016, Hayat Fitness Gym has been Kondhwa's premier fitness destination, 
              built on the values of discipline, dedication, and community. What started as a 
              dream to provide world-class fitness facilities to the local community has grown 
              into a thriving hub of over 500 active members.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Proudly serving the Kondhwa community, we believe fitness is for everyone. 
              Our state-of-the-art equipment, expert trainers, and welcoming environment make 
              every visit a step towards a healthier, stronger you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Open during Sehri & post-Iftar hours during Ramadan — because your fitness 
              journey never stops.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
