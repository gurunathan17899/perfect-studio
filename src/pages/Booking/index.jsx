import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Phone, Clock, Award, Star, MapPin } from "lucide-react";
import BookingForm from "../../components/BookingForm";
import FAQ from "../../components/FAQ";
import { STUDIO_INFO } from "../../utils/data";

export default function Booking() {
  const trustPoints = [
    {
      icon: Award,
      title: "Six Decades of Heritage",
      desc: "Founded in 2021, capturing Parangipettai families across three generations."
    },
    {
      icon: Star,
      title: "1,034+ Verified Reviews",
      desc: "Consistently rated 5.0 for timely delivery, courtesy, and print quality."
    },
    {
      icon: ShieldCheck,
      title: "Dedicated In-House Colour Lab",
      desc: "Archival paper and custom calibrated editing done right here in Parangipettai."
    },
    {
      icon: MapPin,
      title: "Two Walk-In Studios",
      desc: "Convenient physical locations in Anna Nagar (3rd Main Rd) and Mogappair."
    }
  ];

  return (
    <div style={{ paddingTop: "100px" }}>
      {/* Booking Hero Banner */}
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
            <p className="eyebrow line-label" style={{ color: "var(--color-gold)" }}>PERFECT STUDIO · Parangipettai</p>
            <h1 style={{ color: "#ffffff", maxWidth: "860px", margin: "16px auto", fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}>
              Book Your Photography Experience
            </h1>
            <p style={{ maxWidth: "680px", margin: "0 auto 30px", color: "rgba(255,255,255,0.85)", fontSize: "1.1rem" }}>
              Reserve your wedding dates, schedule a studio portrait session, or book an outdoor shoot with our senior photographers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Highlights Grid */}
      <section style={{ padding: "50px 0 30px", background: "#fbf9f6", borderBottom: "1px solid #ede8e3" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {trustPoints.map((tp, idx) => {
              const Icon = tp.icon;
              return (
                <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ background: "rgba(105, 0, 0, 0.1)", padding: "10px", borderRadius: "50%", flexShrink: 0 }}>
                    <Icon size={22} color="var(--color-burgundy)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", color: "var(--color-ink)", marginBottom: "4px" }}>
                      {tp.title}
                    </h4>
                    <p style={{ color: "#666", fontSize: "0.88rem", lineHeight: "1.6" }}>
                      {tp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Booking Form Container */}
      <section style={{ padding: "80px 0 100px", background: "var(--color-paper)" }}>
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Quick Direct Call Bar */}
      <section style={{ padding: "50px 0", background: "var(--color-burgundy)", color: "#ffffff" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "1.8rem", color: "var(--color-gold-light)", marginBottom: "12px" }}>
            Need Immediate Date Confirmation?
          </h3>
          <p style={{ maxWidth: "600px", margin: "0 auto 24px", color: "rgba(255,255,255,0.85)" }}>
            Auspicious muhurtham dates fill up quickly. Speak directly with our studio coordinators to hold your date.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}
              className="btn btn-light"
            >
              <Phone size={16} style={{ marginRight: 8 }} /> Call Anna Nagar: {STUDIO_INFO.phoneAnnaNagar}
            </a>
            <a
              href={`tel:${STUDIO_INFO.phoneMogappairRaw}`}
              className="btn btn-outline-light"
            >
              <Phone size={16} style={{ marginRight: 8 }} /> Call Mogappair: {STUDIO_INFO.phoneMogappair}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </div>
  );
}
