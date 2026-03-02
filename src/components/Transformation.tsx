import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import beforeImg from "@/assets/transform-before.jpg";
import afterImg from "@/assets/transform-after.jpg";

const Transformation = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <section id="transformation" className="py-20 geometric-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-2">
            Real <span className="text-primary">Transformations</span>
          </h2>
          <div className="geometric-divider mx-auto w-32 mb-4" />
          <p className="text-muted-foreground">
            See the incredible results our members achieve
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-border cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* After image (full background) */}
            <img
              src={afterImg}
              alt="After transformation"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Before image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={beforeImg}
                alt="Before transformation"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${containerRef.current?.offsetWidth || 600}px`, maxWidth: "none" }}
                draggable={false}
              />
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 bg-background/80 text-foreground text-xs font-heading uppercase px-3 py-1 rounded">
              Before
            </span>
            <span className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs font-heading uppercase px-3 py-1 rounded">
              After
            </span>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize z-10"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center gold-glow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary-foreground">
                  <path d="M6 10L2 10M2 10L5 7M2 10L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 10L18 10M18 10L15 7M18 10L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-4">
            Drag the slider to compare before & after
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformation;
