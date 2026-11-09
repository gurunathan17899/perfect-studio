import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero({ onOpenBooking }) {
  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesEl = document.getElementById("services");
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutEl = document.getElementById("about");
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero section-dark" id="home" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <img
          src="/assets/img/banner1.png"
          alt="Perfect Studio photography studio in Anna Nagar and Mogappair Parangipettai since 2021"
          fetchPriority="high"
        />
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <p className="eyebrow line-label">SINCE. 2021 · Parangipettai</p>
          <h1 id="hero-title">
            <span className="hyellow">Six Decades of Legacy.</span><br />
            <span className="hyellow">Three Generations.</span><br />
            One Trusted Name.
          </h1>
          <p className="hero-copy">
            5 years of capturing Parangipettai's most cherished moments — candidly, cinematically, and with heart.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <button
              type="button"
              className="btn btn-brand"
              onClick={onOpenBooking}
            >
              Book Now
            </button>
            <a
              className="btn btn-outline-light"
              href="#services"
              onClick={scrollToServices}
            >
              Explore services
            </a>
          </div>
        </motion.div>
      </div>

      <a
        className="hero-scroll-indicator"
        href="#about"
        onClick={scrollToAbout}
        aria-label="Scroll to studio introduction"
      >
        <span></span>
      </a>
    </section>
  );
}
