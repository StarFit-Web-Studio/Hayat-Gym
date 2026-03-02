import { motion } from "framer-motion";

const trainers = [
  { name: "Coach Ahmed", specialty: "Strength & Conditioning", experience: "8 years" },
  { name: "Coach Rizwan", specialty: "Personal Training", experience: "6 years" },
  { name: "Coach Sameer", specialty: "Cardio & HIIT", experience: "5 years" },
  { name: "Coach Danish", specialty: "Body Transformation", experience: "4 years" },
];

const Trainers = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-2">
            Our <span className="text-primary">Trainers</span>
          </h2>
          <div className="geometric-divider mx-auto w-32 mb-4" />
          <p className="text-muted-foreground">Expert guidance every step of the way</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-border rounded-lg p-6 text-center card-hover group hover:border-primary"
            >
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center font-heading text-2xl text-primary">
                {t.name.split(" ")[1]?.[0]}
              </div>
              <h3 className="font-heading text-lg uppercase text-foreground">{t.name}</h3>
              <p className="text-primary text-sm font-heading uppercase tracking-wider mt-1">{t.specialty}</p>
              <p className="text-muted-foreground text-xs mt-2">{t.experience} experience</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
