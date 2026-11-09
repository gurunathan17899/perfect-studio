import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Users, Sparkles, Award } from "lucide-react";
import BookingForm from "../../components/BookingForm";
import PortraitSection from "../../components/PortraitSection";
import { STUDIO_INFO } from "../../utils/data";

export default function Portrait({ onOpenBooking }) {
  const portraitStyles = [
    {
      icon: Users,
      title: "Three-Generation Family Portraits",
      desc: "Honor your family legacy with formal, gracefully lit portraits that celebrate parents, grandparents, and children together in one majestic frame."
    },
    {
      icon: Sparkles,
      title: "Traditional Bridal & Saree Portfolios",
      desc: "Intricate lighting focused on gold jewellery, silken weaves, and timeless South Indian cultural elegance."
    },
    {
      icon: Award,
      title: "Executive & Professional Headshots",
      desc: "Modern corporate headshots for LinkedIn, author bios, doctors, lawyers, and board directors looking confident and approachable."
    },
    {
      icon: Camera,
      title: "Fine-Art Monochrome Character Studies",
      desc: "Deep, soulful black-and-white portraits crafted using classic high-contrast chiaroscuro studio lighting."
    }
  ];

  return (
    <div style={{ paddingTop: "100px" }}>
      {/* Hero Banner */}
      <section
        className="section-dark"
        style={{
          padding: "110px 20px 80px",
          textAlign: "center",
          background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('/assets/img/portraits-02.png') center top / cover no-repeat"
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow line-label" style={{ color: "var(--color-gold)" }}>PORTRAIT STUDIO · Parangipettai</p>
            <h1 style={{ color: "#ffffff", maxWidth: "850px", margin: "16px auto", fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}>
              Timeless Studio Portraits That Immortalize Personality
            </h1>
            <p style={{ maxWidth: "700px", margin: "0 auto 30px", color: "rgba(255,255,255,0.85)", fontSize: "1.1rem" }}>
              Walk in anytime. Our Anna Nagar and Mogappair studio spaces are equipped with professional continuous lighting and hand-painted backdrops.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn btn-brand"
                onClick={onOpenBooking}
              >
                Book Portrait Session
              </button>
              <a
                href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}
                className="btn btn-outline-light"
              >
                Walk In Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portrait Section Gallery */}
      <PortraitSection />

      {/* Portrait Styles Grid */}
      <section style={{ padding: "80px 0 100px", background: "var(--color-cream)" }}>
        <div className="container">
          <div className="section-heading centered">
            <p className="section-kicker">Signature Styles</p>
            <h2 style={{ color: "var(--color-burgundy)" }}>Portraits Designed For Every Milestone</h2>
            <p>From generational family reunions to professional brand identity.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
            {portraitStyles.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: "#ffffff",
                    padding: "36px 28px",
                    border: "1px solid #ded8d1",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.08)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ width: "50px", height: "50px", background: "rgba(105,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <Icon size={26} color="var(--color-burgundy)" />
                  </div>
                  <h3 style={{ fontSize: "1.35rem", marginBottom: "12px", color: "var(--color-ink)" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.75" }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form Integration */}
      <section style={{ padding: "90px 0 110px", background: "#ffffff" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <BookingForm defaultService="Portrait Photography" />
          </div>
        </div>
      </section>
    </div>
  );
}
