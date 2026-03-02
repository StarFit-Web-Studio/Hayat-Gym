import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Monthly",
    price: "₹1,500",
    period: "/month",
    popular: false,
    features: ["Full Gym Access", "Locker Room", "Basic Guidance", "Flexible Plan"],
  },
  {
    name: "Quarterly",
    price: "₹3,999",
    period: "/3 months",
    popular: true,
    features: ["Full Gym Access", "Personal Trainer (2x/week)", "Diet Plan", "Locker Room", "Group Classes"],
  },
  {
    name: "Yearly",
    price: "₹12,999",
    period: "/year",
    popular: false,
    features: ["Full Gym Access", "Unlimited Personal Training", "Custom Diet Plan", "Body Composition Analysis", "Priority Booking", "Guest Passes"],
  },
];

const Membership = () => {
  return (
    <section id="membership" className="py-20 geometric-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-2">
            Membership <span className="text-primary">Plans</span>
          </h2>
          <div className="geometric-divider mx-auto w-32 mb-4" />
          <p className="text-muted-foreground">Choose the plan that fits your goals</p>
          <p className="text-primary text-sm mt-2 font-heading uppercase tracking-wider">
            ✦ Special discounts during Ramadan & Eid ✦
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative bg-card border rounded-lg p-8 card-hover ${
                plan.popular ? "border-primary gold-glow" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-heading uppercase tracking-wider flex items-center gap-1">
                  <Star size={12} /> Most Popular
                </div>
              )}
              <h3 className="font-heading text-2xl uppercase text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-heading text-4xl text-primary">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919XXXXXXXXX?text=I'm interested in the ${plan.name} plan at Hayat Fitness Gym" target="_blank" rel="noopener noreferrer">
                <Button className={`w-full font-heading uppercase tracking-wider ${plan.popular ? "gold-glow" : ""}`}>
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
