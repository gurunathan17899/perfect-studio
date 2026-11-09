import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight, Phone, ShieldCheck } from "lucide-react";
import BookingForm from "../../components/BookingForm";
import { STUDIO_INFO, PORTFOLIO_ITEMS } from "../../utils/data";

export default function ServiceDetailTemplate({ service, onOpenBooking }) {
  // Filter portfolio images related to this service category
  const relatedImages = PORTFOLIO_ITEMS.slice(0, 4);

  return (
    <div style={{ paddingTop: "100px" }}>
      {/* Hero Banner */}
      <section
        className="section-dark"
        style={{
          padding: "110px 20px 80px",
          textAlign: "center",
          background: `linear-gradient(rgba(3,3,3,0.75), rgba(3,3,3,0.85)), url('${service.image}') center / cover no-repeat`
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: "14px", color: "var(--color-gold)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              <Link to="/">Home</Link> &bull; <Link to="/services">Services</Link> &bull; {service.title}
            </div>
            <h1 style={{ color: "#ffffff", maxWidth: "900px", margin: "14px auto 20px", fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}>
              {service.heroTitle}
            </h1>
            <p style={{ maxWidth: "720px", margin: "0 auto 34px", color: "rgba(255,255,255,0.88)", fontSize: "1.12rem" }}>
              {service.subtitle}
            </p>
            <div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn btn-brand"
                onClick={onOpenBooking}
              >
                Book This Service
              </button>
              <a
                href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}
                className="btn btn-outline-light"
              >
                Call Studio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content & Inclusions */}
      <section style={{ padding: "90px 0 100px", background: "var(--color-paper)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px", alignItems: "start" }}>
            {/* Left Content */}
            <div>
              <span className="section-kicker">Our Approach</span>
              <h2 style={{ fontSize: "2.6rem", color: "var(--color-burgundy)", marginBottom: "22px", lineHeight: "1.2" }}>
                Authentic Visual Storytelling Since 2021
              </h2>
              <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "20px" }}>
                {service.shortDesc}
              </p>
              <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "34px" }}>
                At Perfect Studio, we never treat your shoot as routine. Our photographers study lighting, family customs, and specific timing to ensure every priceless glance, ceremonial gesture, and joyous celebration is captured with technical perfection and emotional depth.
              </p>

              {/* Package Inclusions Box */}
              <div style={{ background: "#ffffff", padding: "34px", border: "1px solid #e0d8cf", marginBottom: "40px" }}>
                <h3 style={{ fontSize: "1.5rem", color: "var(--color-burgundy)", marginBottom: "18px" }}>
                  What's Included in This Package:
                </h3>
                <div style={{ display: "grid", gap: "14px" }}>
                  {service.features.map((feat, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#333", fontSize: "1rem" }}>
                      <div style={{ background: "rgba(105, 0, 0, 0.1)", borderRadius: "50%", padding: "4px", marginTop: "2px" }}>
                        <Check size={16} color="var(--color-burgundy)" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment & Quality Assurance */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
                <div style={{ padding: "24px", background: "#fbf9f6", border: "1px solid #ede7e0" }}>
                  <ShieldCheck size={28} color="var(--color-burgundy)" style={{ marginBottom: 12 }} />
                  <h4 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>Canon Precision Gear</h4>
                  <p style={{ color: "#666", fontSize: "0.92rem", lineHeight: "1.6" }}>
                    Full-frame professional sensors, ultra-fast f/1.2 prime lenses, and redundant dual card backup.
                  </p>
                </div>
                <div style={{ padding: "24px", background: "#fbf9f6", border: "1px solid #ede7e0" }}>
                  <Star size={28} color="var(--color-gold)" style={{ marginBottom: 12 }} />
                  <h4 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>In-House Lab Grading</h4>
                  <p style={{ color: "#666", fontSize: "0.92rem", lineHeight: "1.6" }}>
                    Manual retouching, natural skin tones, and museum-grade archival albums crafted right in Parangipettai.
                  </p>
                </div>
              </div>

              {/* Image Showcase */}
              <h3 style={{ fontSize: "1.8rem", color: "var(--color-ink)", marginBottom: "20px" }}>
                Visual Highlights
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {relatedImages.map((img) => (
                  <div key={img.id} style={{ height: "240px", overflow: "hidden", borderRadius: "2px" }}>
                    <img
                      src={img.image}
                      alt={img.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sticky Sidebar / Booking Form */}
            <div style={{ position: "sticky", top: "120px" }}>
              <BookingForm defaultService={service.title} />

              <div style={{ marginTop: "24px", padding: "24px", background: "var(--color-burgundy)", color: "#ffffff", textAlign: "center" }}>
                <h4 style={{ color: "var(--color-gold-light)", fontSize: "1.25rem", marginBottom: "8px" }}>
                  Have Urgent Dates to Lock?
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.92rem", marginBottom: "16px" }}>
                  Speak directly to our senior shoot manager for Anna Nagar &amp; Mogappair.
                </p>
                <a
                  href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}
                  className="btn btn-light"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Phone size={16} style={{ marginRight: 8 }} />
                  {STUDIO_INFO.phoneAnnaNagar}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
