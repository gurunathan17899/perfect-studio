import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PortraitSection() {
  const portraits = [
    { src: "/assets/img/portraits-01.png", alt: "Professional portrait photography for women in Parangipettai" },
    { src: "/assets/img/portraits-02.png", alt: "Studio portrait photography by Perfect Studio" },
    { src: "/assets/img/portraits-03.png", alt: "Family portrait session at Perfect Studio Parangipettai" },
    { src: "/assets/img/portraits-04.png", alt: "Creative portrait photography in Anna Nagar Parangipettai" }
  ];

  return (
    <section className="portraits" id="portraits" aria-labelledby="portraits-title">
      <div className="container">
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Portrait Studio</p>
          <h2 id="portraits-title">
            Beautiful Portraits <br />
            <span>That Capture Emotions &amp; Personality</span>
          </h2>
          <p>
            Our portrait sessions are thoughtfully designed to bring out natural emotions, genuine smiles, and timeless memories that you can cherish forever.
          </p>
        </motion.div>
      </div>

      <div className="portrait-strip">
        {portraits.map((p, index) => (
          <motion.img
            key={index}
            src={p.src}
            alt={p.alt}
            loading="lazy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          />
        ))}
      </div>

      <div className="gallery-action">
        <Link className="btn btn-brand" to="/services/portrait-photography">
          Explore Portraits
        </Link>
      </div>
    </section>
  );
}
