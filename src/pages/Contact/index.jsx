import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from "lucide-react";
import BookingForm from "../../components/BookingForm";
import { STUDIO_INFO } from "../../utils/data";

export default function Contact() {
  return (
    <div style={{ paddingTop: "100px" }}>
      {/* Contact Hero Banner */}
      <section
        className="section-dark"
        style={{
          padding: "100px 20px 80px",
          textAlign: "center",
          background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('/assets/img/banner1.png') center top / cover no-repeat"
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow line-label" style={{ color: "var(--color-gold)" }}>WALK IN ANYTIME · CHENNAI</p>
            <h1 style={{ color: "#ffffff", maxWidth: "860px", margin: "16px auto", fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}>
              Connect with Perfect Studio
            </h1>
            <p style={{ maxWidth: "680px", margin: "0 auto 30px", color: "rgba(255,255,255,0.85)", fontSize: "1.1rem" }}>
              Have questions about your wedding dates, studio portrait shoots, or vintage photo restoration? Reach out or visit our studios in Anna Nagar and Mogappair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Studios Location Cards */}
      <section style={{ padding: "80px 0 60px", background: "var(--color-paper)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px" }}>
            {/* Anna Nagar Card */}
            <motion.div
              style={{
                background: "#ffffff",
                border: "1px solid #ded8d1",
                padding: "38px 32px",
                borderTop: "4px solid var(--color-burgundy)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--color-burgundy)", marginBottom: "14px" }}>
                <MapPin size={24} />
                <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Primary Studio</span>
              </div>
              <h2 style={{ fontSize: "1.85rem", color: "var(--color-ink)", marginBottom: "16px" }}>
                Anna Nagar Studio
              </h2>
              <p style={{ color: "#555", fontSize: "0.98rem", lineHeight: "1.75", marginBottom: "24px" }}>
                {STUDIO_INFO.locations.annaNagar.address}
              </p>

              <div style={{ display: "grid", gap: "14px", borderTop: "1px solid #f0eae4", paddingTop: "20px", marginBottom: "26px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#333", fontSize: "0.95rem" }}>
                  <Phone size={17} color="var(--color-burgundy)" />
                  <a href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`} style={{ fontWeight: 600 }}>
                    {STUDIO_INFO.phoneAnnaNagar}
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#666", fontSize: "0.92rem" }}>
                  <Clock size={17} color="var(--color-gold)" />
                  <span>{STUDIO_INFO.hoursWeekday}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#666", fontSize: "0.92rem" }}>
                  <Clock size={17} color="var(--color-gold)" />
                  <span>{STUDIO_INFO.hoursSunday}</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}
                  className="btn btn-brand"
                  style={{ minWidth: "140px", padding: "12px 20px" }}
                >
                  Call Anna Nagar
                </a>
                <a
                  href={STUDIO_INFO.locations.annaNagar.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-brand"
                  style={{ minWidth: "140px", padding: "12px 20px" }}
                >
                  Google Maps <ExternalLink size={14} style={{ marginLeft: 6 }} />
                </a>
              </div>
            </motion.div>

            {/* Mogappair Card */}
            <motion.div
              style={{
                background: "#ffffff",
                border: "1px solid #ded8d1",
                padding: "38px 32px",
                borderTop: "4px solid var(--color-gold)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--color-burgundy)", marginBottom: "14px" }}>
                <MapPin size={24} />
                <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Branch Studio</span>
              </div>
              <h2 style={{ fontSize: "1.85rem", color: "var(--color-ink)", marginBottom: "16px" }}>
                Mogappair Studio
              </h2>
              <p style={{ color: "#555", fontSize: "0.98rem", lineHeight: "1.75", marginBottom: "24px" }}>
                {STUDIO_INFO.locations.mogappair.address}
              </p>

              <div style={{ display: "grid", gap: "14px", borderTop: "1px solid #f0eae4", paddingTop: "20px", marginBottom: "26px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#333", fontSize: "0.95rem" }}>
                  <Phone size={17} color="var(--color-burgundy)" />
                  <a href={`tel:${STUDIO_INFO.phoneMogappairRaw}`} style={{ fontWeight: 600 }}>
                    {STUDIO_INFO.phoneMogappair}
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#666", fontSize: "0.92rem" }}>
                  <Clock size={17} color="var(--color-gold)" />
                  <span>{STUDIO_INFO.hoursWeekday}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#666", fontSize: "0.92rem" }}>
                  <Clock size={17} color="var(--color-gold)" />
                  <span>{STUDIO_INFO.hoursSunday}</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={`tel:${STUDIO_INFO.phoneMogappairRaw}`}
                  className="btn btn-brand"
                  style={{ minWidth: "140px", padding: "12px 20px" }}
                >
                  Call Mogappair
                </a>
                <a
                  href={STUDIO_INFO.locations.mogappair.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-brand"
                  style={{ minWidth: "140px", padding: "12px 20px" }}
                >
                  Google Maps <ExternalLink size={14} style={{ marginLeft: 6 }} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Contact Banner (Email & WhatsApp) */}
          <div style={{ marginTop: "40px", background: "var(--color-burgundy)", color: "#ffffff", padding: "34px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <h3 style={{ color: "var(--color-gold-light)", fontSize: "1.5rem", marginBottom: "6px" }}>
                Prefer Direct Messaging?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}>
                Email us at {STUDIO_INFO.email} or initiate an instant chat with our team on WhatsApp.
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px" }}>
              <a
                href={STUDIO_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
                style={{ background: "var(--color-whatsapp)", color: "#fff", borderColor: "var(--color-whatsapp)" }}
              >
                <MessageSquare size={16} style={{ marginRight: 8 }} /> WhatsApp Us
              </a>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="btn btn-outline-light"
              >
                <Mail size={16} style={{ marginRight: 8 }} /> Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact / Booking Form */}
      <section style={{ padding: "60px 0 110px", background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div className="section-heading centered" style={{ marginBottom: "34px" }}>
              <p className="section-kicker">Send A Message</p>
              <h2 style={{ color: "var(--color-burgundy)" }}>Plan Your Shoot Consultation</h2>
              <p>We respond within 2 hours during studio operating hours.</p>
            </div>
            <BookingForm defaultService="General Enquiry" />
          </div>
        </div>
      </section>
    </div>
  );
}
