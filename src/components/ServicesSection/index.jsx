import React from "react";
import { SERVICES_DATA } from "../../utils/data";
import ServiceCard from "../ServiceCard";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="services section-dark" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="content-container">
          <motion.div
            className="section-heading centered"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-kicker">What we offer</p>
            <h2 id="services-title">Photography Services in Parangipettai</h2>
          </motion.div>

          <div className="service-grid">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDesc}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
