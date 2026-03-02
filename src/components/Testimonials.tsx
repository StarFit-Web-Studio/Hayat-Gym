import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Mohammed Irfan",
    rating: 5,
    text: "Best gym in Kondhwa, Alhamdulillah! The trainers are supportive and the equipment is top-notch. Been here since 2018.",
  },
  {
    name: "Rahul Deshmukh",
    rating: 5,
    text: "Amazing transformation in just 6 months. Coach Ahmed's guidance was incredible. Highly recommend Hayat Fitness!",
  },
  {
    name: "Sana Sheikh",
    rating: 5,
    text: "The most welcoming gym environment I've found. Clean, well-maintained, and the group classes are fantastic!",
  },
  {
    name: "Arjun Patil",
    rating: 4,
    text: "Great equipment variety and friendly staff. The quarterly plan is excellent value for money. Kondhwa's best!",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-2">
            What <span className="text-primary">Members Say</span>
          </h2>
          <div className="geometric-divider mx-auto w-32 mb-4" />
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface border border-border rounded-lg p-8 text-center arabesque-corner"
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-lg italic mb-6">"{testimonials[active].text}"</p>
            <p className="font-heading text-primary uppercase tracking-wider">{testimonials[active].name}</p>
          </motion.div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === active ? "bg-primary scale-125" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
