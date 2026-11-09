import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, History, RefreshCw, Sparkles, Check, ArrowRight } from "lucide-react";
import BookingForm from "../../components/BookingForm";
import { STUDIO_INFO } from "../../utils/data";

export default function Restoration({ onOpenBooking }) {
  const [sliderPos, setSliderPos] = useState(50);

  const restorationPillars = [
    {
      title: "Old Photo Repair",
      desc: "Careful reconstruction of torn paper edges, folding creases, mold stains, and physical emulsion loss without touching your original print."
    },
    {
      title: "Historical Colorization",
      desc: "Transform faded black-and-white portraits into authentic color photographs using researched textile tones and natural skin tones."
    },
    {
      title: "Facial Detail Enhancement",
      desc: "Rebuilding blurred features, restoring clarity to eyes, smiles, and intricate jewellery details lost over decades."
    },
    {
      title: "Archival Lab Printing",
      desc: "Reprinted in our Anna Nagar colour lab on 100% cotton rag acid-free archival paper guaranteed to last over 75 years without fading."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Safe Contactless Scan",
      desc: "Bring your original fragile photo to our Anna Nagar or Mogappair studio. We perform a non-invasive optical scan at 4800 DPI."
    },
    {
      num: "02",
      title: "Pixel-by-Pixel Repair",
      desc: "Our restoration specialist digitally eliminates tears, water stains, mold, and dust specks by hand using precision tools."
    },
    {
      num: "03",
      title: "Digital Proof Approval",
      desc: "We send you a high-resolution digital comparison proof via WhatsApp or email to ensure you are 100% delighted with the details."
    },
    {
      num: "04",
      title: "Museum-Grade Archival Print",
      desc: "We deliver both the restored high-res digital file and a framed heirloom print alongside your untouched original photograph."
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
          background: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('/assets/img/cta-bg.png') center / cover no-repeat"
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow line-label" style={{ color: "var(--color-gold)" }}>ANNA NAGAR LAB · SINCE 2021</p>
            <h1 style={{ color: "#ffffff", maxWidth: "860px", margin: "16px auto", fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}>
              Restoring Damaged Family Heirlooms to Timeless Glory
            </h1>
            <p style={{ maxWidth: "700px", margin: "0 auto 30px", color: "rgba(255,255,255,0.88)", fontSize: "1.1rem" }}>
              Some memories survive sixty years and still deserve saving. We bring torn, faded, and water-damaged photographs back to life as pristine museum-quality keepsakes.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn btn-brand"
                onClick={onOpenBooking}
              >
                Request Restoration Estimate
              </button>
              <a
                href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}
                className="btn btn-outline-light"
              >
                Call Lab: {STUDIO_INFO.phoneAnnaNagar}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Before & After Comparison Showcase */}
      <section style={{ padding: "90px 0 80px", background: "#ffffff" }}>
        <div className="container">
          <div className="section-heading centered">
            <p className="section-kicker">Interactive Comparison</p>
            <h2 style={{ color: "var(--color-burgundy)" }}>See The Transformation</h2>
            <p>Slide left and right to inspect the restoration of a 1965 vintage family portrait.</p>
          </div>

          <div
            style={{
              position: "relative",
              maxWidth: "800px",
              height: "480px",
              margin: "40px auto 0",
              overflow: "hidden",
              borderRadius: "4px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              userSelect: "none"
            }}
          >
            {/* After Image (Full width background) */}
            <img
              src="/assets/img/finest work19.png"
              alt="Restored Colorized Portrait"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />

            {/* Before Image (Clipped with slider position) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: `${sliderPos}%`,
                overflow: "hidden",
                borderRight: "3px solid #ffffff",
                boxShadow: "3px 0 10px rgba(0,0,0,0.3)"
              }}
            >
              <img
                src="/assets/img/finest work19.png"
                alt="Original Damaged Black and White Portrait"
                style={{
                  width: "800px",
                  height: "480px",
                  objectFit: "cover",
                  filter: "grayscale(100%) sepia(40%) contrast(1.2) brightness(0.9)",
                  maxWidth: "none"
                }}
              />
              <span style={{ position: "absolute", bottom: 20, left: 20, background: "rgba(0,0,0,0.75)", color: "#fff", padding: "6px 14px", fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Original (Damaged 1965)
              </span>
            </div>

            <span style={{ position: "absolute", bottom: 20, right: 20, background: "rgba(105,0,0,0.85)", color: "#fff", padding: "6px 14px", fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Restored &amp; Colorized
            </span>

            {/* Interactive Slider Input */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "ew-resize",
                zIndex: 10
              }}
              aria-label="Before and after comparison slider"
            />
          </div>
          <p style={{ textAlign: "center", color: "#888", fontSize: "0.88rem", marginTop: "14px" }}>
            Drag slider left and right to inspect fine detail repair
          </p>
        </div>
      </section>

      {/* 4 Pillars of Restoration */}
      <section style={{ padding: "80px 0 90px", background: "var(--color-cream)" }}>
        <div className="container">
          <div className="section-heading centered">
            <p className="section-kicker">Our Core Lab Capabilities</p>
            <h2 style={{ color: "var(--color-burgundy)" }}>Four Pillars of Photo Repair</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginTop: "40px" }}>
            {restorationPillars.map((p, index) => (
              <div
                key={index}
                style={{ background: "#ffffff", padding: "32px 26px", border: "1px solid #ded8d1" }}
              >
                <div style={{ color: "var(--color-burgundy)", fontSize: "1.6rem", fontWeight: 700, marginBottom: "12px", fontFamily: "var(--font-heading)" }}>
                  0{index + 1}
                </div>
                <h3 style={{ fontSize: "1.3rem", color: "var(--color-ink)", marginBottom: "10px" }}>
                  {p.title}
                </h3>
                <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.7" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Steps Workflow */}
      <section style={{ padding: "90px 0 100px", background: "#ffffff" }}>
        <div className="container">
          <div className="section-heading centered">
            <p className="section-kicker">Transparent Workflow</p>
            <h2 style={{ color: "var(--color-burgundy)" }}>How Our Restoration Lab Works</h2>
            <p>Your delicate photographs never leave our secure studio in Anna Nagar.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginTop: "45px" }}>
            {steps.map((st, i) => (
              <div key={i} style={{ padding: "26px", background: "#faf8f5", borderLeft: "3px solid var(--color-burgundy)" }}>
                <span style={{ fontSize: "2rem", fontWeight: 700, color: "var(--color-gold)", display: "block", marginBottom: "8px", fontFamily: "var(--font-heading)" }}>
                  {st.num}
                </span>
                <h4 style={{ fontSize: "1.2rem", color: "var(--color-ink)", marginBottom: "10px" }}>
                  {st.title}
                </h4>
                <p style={{ color: "#666", fontSize: "0.92rem", lineHeight: "1.7" }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Form */}
      <section style={{ padding: "90px 0 110px", background: "var(--color-paper)" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <BookingForm defaultService="Photo Restoration" />
          </div>
        </div>
      </section>
    </div>
  );
}
