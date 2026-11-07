import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StatsBar from "../../components/StatsBar";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";
import { STUDIO_INFO } from "../../utils/data";

export default function About({ onOpenBooking }) {
  return (
    <div className="about-page" style={{ paddingTop: "100px" }}>
      {/* Hero Banner */}
      <section
        className="about-hero section-dark"
        style={{
          minHeight: "560px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('/assets/img/about-banner.png') center top / cover no-repeat",
          textAlign: "center",
          padding: "80px 20px"
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow line-label" style={{ color: "var(--color-gold)" }}>OUR LEGACY · SINCE 1962</p>
            <h1 style={{ color: "#ffffff", fontSize: "clamp(2.5rem, 4.2vw, 4rem)", maxWidth: "880px", margin: "16px auto" }}>
              Capturing Chennai's Moments Across Three Generations
            </h1>
            <p style={{ maxWidth: "680px", margin: "0 auto 30px", color: "rgba(255,255,255,0.85)", fontSize: "1.1rem" }}>
              From silver-halide roll films in 1962 to 4K cinematic wedding narratives today, our family has preserved the heritage of thousands of Chennai homes.
            </p>
            <button
              type="button"
              className="btn btn-brand"
              onClick={onOpenBooking}
            >
              Book A Session
            </button>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* Main Story Narrative */}
      <section className="about-intro" style={{ padding: "100px 0 80px", background: "var(--color-cream)" }}>
        <div className="container">
          <div className="content-container">
            <motion.div
              className="section-heading centered"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-kicker">Our Heritage</p>
              <h2 style={{ color: "#34302d", fontStyle: "italic", marginBottom: "26px" }}>
                A Sixty-Year Promise of Authenticity
              </h2>
              <p style={{ color: "#5b5651", fontSize: "1.05rem", lineHeight: "1.9", maxWidth: "900px", margin: "0 auto 20px" }}>
                Founded in 1962, Perfect Studio began with a simple yet timeless mission: to capture Chennai’s cherished moments honestly, beautifully, and without artificial pretence. What started as an intimate studio in Triplicane with manual bellows cameras and hand-developed darkroom prints has blossomed into two modern studios in Anna Nagar and Mogappair.
              </p>
              <p style={{ color: "#5b5651", fontSize: "1.05rem", lineHeight: "1.9", maxWidth: "900px", margin: "0 auto" }}>
                Over six decades, three generations of families have walked through our studio doors. We photographed the grandparents' wedding portraits in classic black-and-white. Decades later, we captured their children's joyous wedding celebrations. Today, their grandchildren trust us for candid pre-wedding shoots, cinematic films, and newborn milestones.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split Block: Craftsmanship & In-House Lab */}
      <section style={{ padding: "80px 0 100px", background: "#ffffff" }}>
        <div className="container">
          <div className="about-split" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-kicker">The Perfect Studio Difference</p>
              <h2 style={{ fontSize: "2.8rem", color: "var(--color-burgundy)", marginBottom: "22px", lineHeight: "1.2" }}>
                In-House Colour Lab &amp; Archival Excellence
              </h2>
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: "1.85", marginBottom: "18px" }}>
                While most modern photography agencies outsource their photo printing, album binding, and color grading to commercial wholesale labs, Perfect Studio maintains full quality control through our own established colour lab in Chennai.
              </p>
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: "1.85", marginBottom: "28px" }}>
                Every single print that leaves our studio is color-calibrated to museum archival standards, resisting tropical humidity, UV degradation, and age. When you open a Perfect Studio wedding album forty years from today, the vibrant reds of the Kanchipuram silk and the warm gold of the thali remain as radiant as your wedding morning.
              </p>
              <div style={{ display: "flex", gap: "20px" }}>
                <Link to="/services" className="btn btn-brand">
                  Explore Services
                </Link>
                <Link to="/contact" className="btn btn-outline-brand">
                  Visit Our Studios
                </Link>
              </div>
            </motion.div>

            <motion.div
              style={{ overflow: "hidden", borderRadius: "4px", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/assets/img/finest work19.png"
                alt="Traditional South Indian bridal photography by Perfect Studio"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
