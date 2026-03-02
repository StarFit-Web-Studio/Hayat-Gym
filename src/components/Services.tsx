import { motion } from "framer-motion";
import { Dumbbell, Heart, UserCheck, Users, Apple, TrendingUp } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Weight Training", desc: "Full range of free weights and machines for all levels" },
  { icon: Heart, title: "Cardio Zone", desc: "Treadmills, bikes, and ellipticals for endurance training" },
  { icon: UserCheck, title: "Personal Training", desc: "One-on-one coaching tailored to your goals" },
  { icon: Users, title: "Group Classes", desc: "High-energy group sessions for motivation and fun" },
  { icon: Apple, title: "Nutrition Guidance", desc: "Diet plans and nutritional support for optimal results" },
  { icon: TrendingUp, title: "Body Transformation", desc: "Complete programs for life-changing transformations" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-2">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="geometric-divider mx-auto w-32 mb-4" />
          <p className="text-muted-foreground">Everything you need for your fitness journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-border rounded-lg p-6 card-hover group"
            >
              <s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl uppercase mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
