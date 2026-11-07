import React from "react";
import { motion } from "framer-motion";

export default function StatsBar() {
  const stats = [
    { number: "1962", label: "We Picked Up Our First Camera" },
    { number: "3 Gen", label: "Same Families, Still Choosing Us" },
    { number: "1,034+", label: "Families Who Trusted Us" },
    { number: "2", label: "Studios You Can Walk Into" }
  ];

  return (
    <div className="stats-bar" aria-label="Studio statistics">
      <div className="container">
        <dl className="stats-grid">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <dt>{item.number}</dt>
              <dd>{item.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
