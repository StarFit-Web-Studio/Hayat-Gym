import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi, I'm ${form.name}. ${form.message} (Phone: ${form.phone})`;
    window.open(`https://wa.me/918668200042?text=${encodeURIComponent(whatsappMsg)}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "You'll be connected with our team shortly!" });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-2">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="geometric-divider mx-auto w-32 mb-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading uppercase text-foreground">Location</h4>
                  <p className="text-muted-foreground text-sm">Kondhwa, Pune, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading uppercase text-foreground">Phone</h4>
                  <p className="text-muted-foreground text-sm">+91 9XXXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading uppercase text-foreground">Hours</h4>
                  <p className="text-muted-foreground text-sm">Mon - Sat: 5:00 AM - 11:00 PM</p>
                  <p className="text-muted-foreground text-sm">Sunday: 6:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden border border-border h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.296203105326!2d73.88196447334975!3d18.47023757071338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea89b2312eef%3A0x9b7ccafec6056c1b!2sHayat%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1772429783527!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hayat Fitness Gym location"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-surface border-border"
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="bg-surface border-border"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-surface border-border"
            />
            <Button type="submit" className="w-full font-heading uppercase tracking-wider gap-2">
              <Send size={18} /> Send via WhatsApp
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
