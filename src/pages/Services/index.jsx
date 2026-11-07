import React from "react";
import { Link } from "react-router-dom";
import { SERVICES_DATA } from "../../utils/data";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import BookingCTA from "../../components/BookingCTA";

export default function Services({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: "100px" }}>
      {/* Services Header */}
      <section
        className="section-dark"
        style={{
          padding: "100px 20px 80px",
          textAlign: "center",
          background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('/assets/img/why-bg.png') center / cover no-repeat"
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow line-label" style={{ color: "var(--color-gold)" }}>EXPERTISE &amp; CRAFTSMANSHIP</p>
            <h1 style={{ color: "#ffffff", margin: "16px auto 20px", maxWidth: "850px" }}>
              Comprehensive Photography &amp; Cinematography Services
            </h1>
            <p style={{ maxWidth: "700px", margin: "0 auto 30px", color: "rgba(255,255,255,0.85)", fontSize: "1.1rem" }}>
              Tailored visual storytelling for family milestones, grand weddings, candid moments, and brand events across Chennai and South India.
            </p>
            <button
              type="button"
              className="btn btn-brand"
              onClick={onOpenBooking}
            >
              Get Custom Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section style={{ padding: "90px 0 110px", background: "var(--color-paper)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: "70px" }}>
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: isEven ? "1fr 1.15fr" : "1.15fr 1fr",
                    gap: "50px",
                    alignItems: "center",
                    padding: "36px",
                    background: "#ffffff",
                    border: "1px solid #e8e2dc",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <span style={{ color: "var(--color-burgundy)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      0{index + 1} · Service Category
                    </span>
                    <h2 style={{ fontSize: "2.3rem", color: "var(--color-ink)", margin: "10px 0 16px", lineHeight: "1.2" }}>
                      {service.title}
                    </h2>
                    <p style={{ color: "#666", fontSize: "1.02rem", lineHeight: "1.8", marginBottom: "24px" }}>
                      {service.shortDesc}
                    </p>

                    <div style={{ marginBottom: "28px" }}>
                      <h4 style={{ fontSize: "1rem", color: "var(--color-burgundy)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        What's Included:
                      </h4>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
                        {service.features.map((feat, i) => (
                          <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#444", fontSize: "0.95rem" }}>
                            <Check size={16} color="var(--color-burgundy)" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                      <Link to={service.link} className="btn btn-brand">
                        View Service Details <ArrowRight size={16} style={{ marginLeft: 8 }} />
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline-brand"
                        onClick={onOpenBooking}
                      >
                        Book This Service
                      </button>
                    </div>
                  </div>

                  <div style={{ order: isEven ? 1 : 2, overflow: "hidden", borderRadius: "2px" }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "420px",
                        objectFit: "cover",
                        transition: "transform 0.6s var(--ease)"
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA onOpenBooking={onOpenBooking} />
    </div>
  );
}
