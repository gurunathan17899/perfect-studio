import React, { useState } from "react";
import { TESTIMONIALS_DATA } from "../../utils/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="intro-row">
          <div>
            <p className="section-kicker">Client Love</p>
            <h2 id="testimonials-title">
              Words From <br />
              Three Generations
            </h2>
          </div>
          <div>
            <p>
              Hear from the families and couples who have trusted Perfect Studio with their most cherished moments. 1,034+ reviews on Justdial &amp; Google. Serving Parangipettai since 2021.
            </p>
          </div>
        </div>
      </div>

      <div className="testimonial-panel">
        <div className="container">
          <div className="testimonial-container">
            <blockquote>
              <span className="quote-logo">
                <img src="/assets/svg/logo.svg" alt="Perfect Studio" />
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="testimonial-quote">
                    "{current.text}"
                  </p>
                  <cite>{current.author}</cite>
                  <span style={{ display: "block", color: "var(--color-gold)", fontSize: "0.95rem", marginTop: "4px" }}>
                    {current.relation}
                  </span>
                </motion.div>
              </AnimatePresence>
            </blockquote>

            <div className="testimonial-nav">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Testimonial"
              >
                <img src="/assets/svg/left-arrow.svg" alt="Previous" style={{ width: 18 }} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Testimonial"
              >
                <img src="/assets/svg/right-arrow.svg" alt="Next" style={{ width: 18 }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
