import React from "react";
import { motion } from "framer-motion";

export default function StudioIntro() {
  return (
    <section className="about section-dark" id="about" aria-labelledby="about-title">
      <div className="container">
        <motion.div
          className="content-container"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 id="about-title">
            Photography Studio in<br />
            <em>Anna Nagar &amp; Mogappair, Chennai</em>
          </h2>
          <p>
            For six decades, Perfect Studio has carried a legacy of capturing life’s most meaningful moments. Grandparents came here for their portraits. Their children came for wedding albums. Now their grandchildren walk in for pre-wedding shoots. Perfect Studio has stood through six decades of Chennai's biggest days and quietest ones with two studios, an in-house colour lab, and a team that never treats a frame like routine.
          </p>
          <p>
            Whether it's your wedding, a newborn's first photograph, or an old picture worth saving, we bring the same Canon precision and unhurried attention we always have. Walk in anytime. No appointment needed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
