import React, { useState, useEffect, useCallback } from "react";
import { PORTFOLIO_ITEMS } from "../../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { key: "all", label: "All Works" },
    { key: "wedding", label: "Weddings" },
    { key: "pre-wedding", label: "Pre-Wedding" },
    { key: "bridal", label: "Bridal" },
    { key: "maternity", label: "Maternity" },
    { key: "portraits", label: "Portraits" }
  ];

  const filteredItems = activeCategory === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.classList.add("modal-open");
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.classList.remove("modal-open");
  };

  const nextLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextLightbox, prevLightbox]);

  return (
    <section className="gallery-intro" aria-labelledby="moments-title">
      <div className="container">
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Our Portfolio</p>
          <h2 id="moments-title">Moments We’ve Immortalized</h2>
          <p>A visual showcase of our finest work across all photography categories.</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="portfolio-filter">
          {categories.map(cat => (
            <button
              key={cat.key}
              type="button"
              className={activeCategory === cat.key ? "active" : ""}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Gallery Grid */}
        <motion.div
          layout
          className="gallery-grid"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`gallery-item ${index % 5 === 0 ? "span-2" : ""}`}
                data-title={item.title}
                onClick={() => openLightbox(index)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div style={{ position: "absolute", top: 16, right: 16, color: "#fff", background: "rgba(0,0,0,0.5)", borderRadius: "50%", padding: 6, display: "flex" }}>
                  <ZoomIn size={18} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Marquee Strips matching original website */}
      <div style={{ marginTop: "70px" }}>
        <div className="footer-strip homeport" aria-label="Fine work marquee track 1">
          <div className="footer-marquee homeport">
            <span className="homeport"><img src="/assets/img/finest work2.png" alt="Couple portrait" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work5.png" alt="Pre wedding photoshoot" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work6.png" alt="Bridal portrait" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work7.png" alt="Maternity photoshoot" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work9.png" alt="Outdoor maternity" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work19.png" alt="South Indian bridal" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work20.png" alt="Candid wedding couple" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work16.png" alt="Engagement couple" loading="lazy" /></span>
            {/* Duplicates for seamless loop */}
            <span className="homeport"><img src="/assets/img/finest work2.png" alt="Couple portrait" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work5.png" alt="Pre wedding photoshoot" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work6.png" alt="Bridal portrait" loading="lazy" /></span>
          </div>
        </div>

        <div className="footer-strip homeport" aria-label="Fine work marquee track 2">
          <div className="footer-marquee right">
            <span className="homeport"><img src="/assets/img/finest work12.png" alt="Wedding couple portrait" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work13.png" alt="Romantic couple photography" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work14.png" alt="Maternity couple photoshoot" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work16.png" alt="Engagement ceremony" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work17.png" alt="Bridal photoshoot" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work18.png" alt="Corporate & bridal" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work19.png" alt="Premium bridal photoshoot" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work20.png" alt="Traditional wedding photoshoot" loading="lazy" /></span>
            {/* Duplicates for seamless loop */}
            <span className="homeport"><img src="/assets/img/finest work12.png" alt="Wedding couple portrait" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work13.png" alt="Romantic couple photography" loading="lazy" /></span>
            <span className="homeport"><img src="/assets/img/finest work14.png" alt="Maternity couple photoshoot" loading="lazy" /></span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <X size={32} />
            </button>

            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={prevLightbox}
              aria-label="Previous Image"
            >
              <ChevronLeft size={30} />
            </button>

            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
            />

            <div className="lightbox-title">
              {filteredItems[lightboxIndex].title}
              <div style={{ fontSize: "0.9rem", color: "var(--color-gold)", marginTop: "6px" }}>
                {lightboxIndex + 1} / {filteredItems.length}
              </div>
            </div>

            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={nextLightbox}
              aria-label="Next Image"
            >
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
