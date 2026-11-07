import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "/assets/svg/experienced-photographers.svg",
      title: "Experienced Photographers",
      description: "Sixty years behind the lens. Three generations of weddings, portraits, and commercial work. We've seen it all, and we still show up like it's the first time."
    },
    {
      icon: "/assets/svg/modern-studio-spaces.svg",
      title: "Modern Studio Spaces",
      description: "Two studios in Anna Nagar and Mogappair, equipped and ready. Walk in anytime — no appointment needed for portraits or consultation."
    },
    {
      icon: "/assets/svg/high-quality-equipment.svg",
      title: "High-Quality Equipment",
      description: "Every shot, every session — Canon professional precision, ultra-sharp prime lenses, and studio strobe lighting for consistent, museum-grade output."
    },
    {
      icon: "/assets/svg/customized-packages.svg",
      title: "Customized Packages",
      description: "Before we quote you a price, we understand your day. Customized packages built around your ceremonies, your priorities, and your budget — not a fixed menu."
    },
    {
      icon: "/assets/svg/client-first-approach.svg",
      title: "Client-First Approach",
      description: "We listen before we shoot, collaborate through every step, and go above and beyond when it counts. A standard families across Chennai have trusted since 1962."
    }
  ];

  return (
    <section className="vision section-dark" aria-labelledby="vision-title">
      <div className="container">
        <div className="content-container">
          <motion.div
            className="section-heading centered"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-kicker">Why Choose Us</p>
            <h2 id="vision-title">Perfect Studio</h2>
            <p>Six Decades of Doing It Right</p>
          </motion.div>

          <div className="vision-grid">
            {reasons.map((item, index) => (
              <motion.article
                key={index}
                className="vision-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <span className="vision-icon" aria-hidden="true">
                  <img src={item.icon} alt={item.title} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
