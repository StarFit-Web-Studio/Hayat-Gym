import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Weight training session" },
  { src: gallery2, alt: "Cardio zone" },
  { src: gallery3, alt: "Group fitness class" },
  { src: gallery4, alt: "Premium equipment" },
  { src: gallery5, alt: "Personal training" },
  { src: gallery6, alt: "Transformation results" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-2">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <div className="geometric-divider mx-auto w-32 mb-4" />
          <p className="text-muted-foreground">A glimpse into the Hayat Fitness experience</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-lg border border-border group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
