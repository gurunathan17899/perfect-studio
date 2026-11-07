import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, description, link, index }) {
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="explore-link">
        Explore service <ArrowRight size={16} />
      </Link>
    </motion.article>
  );
}
