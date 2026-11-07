import React from "react";
import { Link } from "react-router-dom";
import { STUDIO_INFO } from "../../utils/data";
import { motion } from "framer-motion";

export default function BookingCTA({ onOpenBooking }) {
  return (
    <section className="cta section-dark" id="book" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-grid">
          <motion.div
            className="cta-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/assets/img/cta-bg.png"
              alt="Professional photography session at Perfect Studio Chennai"
            />
          </motion.div>

          <motion.div
            className="cta-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 id="cta-title">
              Ready to Capture Your Story with Perfect Studio?
            </h2>
            <p>
              No commitment, No pressure. Just an honest conversation about your wedding, your family, or your story — with the studio Chennai has trusted since 1962.
            </p>
            <div className="cta-actions">
              <button
                type="button"
                className="btn btn-light"
                onClick={onOpenBooking}
              >
                Book Now
              </button>
              <a
                className="btn btn-outline-light"
                href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
