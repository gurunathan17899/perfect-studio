import React, { useState } from "react";
import { useForm } from "react-hook-form";
import confetti from "canvas-confetti";
import { CheckCircle, Phone, Calendar, Clock, MapPin, Send } from "lucide-react";
import { STUDIO_INFO } from "../../utils/data";

export default function BookingForm({ defaultService = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      service: defaultService
    }
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback
      }
    }, 600);
  };

  if (submitted) {
    return (
      <div className="form-success-box" style={{ padding: "40px 30px" }}>
        <CheckCircle size={56} color="#2e7d32" style={{ margin: "0 auto 16px" }} />
        <h3 style={{ color: "#137333", fontSize: "1.8rem", marginBottom: "12px" }}>
          Booking Request Received!
        </h3>
        <p style={{ maxWidth: "540px", margin: "0 auto 24px", color: "#444" }}>
          Thank you for choosing Perfect Studio. Our senior photography coordinator will review your dates and connect with you via phone or WhatsApp within 2 hours.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}
            className="btn btn-brand"
          >
            Call Anna Nagar
          </a>
          <a
            href={STUDIO_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-brand"
          >
            Chat On WhatsApp
          </a>
          <button
            type="button"
            className="btn btn-outline-brand"
            onClick={() => {
              setSubmitted(false);
              reset();
            }}
          >
            Book Another Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ background: "#ffffff", padding: "36px 32px", border: "1px solid #ded8d1" }}>
      <div style={{ marginBottom: "26px" }}>
        <h3 style={{ fontSize: "1.8rem", color: "var(--color-burgundy)", marginBottom: "6px" }}>
          Reserve Your Photography Date
        </h3>
        <p style={{ color: "var(--color-muted)", fontSize: "0.95rem" }}>
          Fill in your details below. No upfront payment required to discuss and hold tentative dates.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div className="form-group">
          <label htmlFor="bf-name">Full Name / Groom &amp; Bride Name *</label>
          <input
            id="bf-name"
            type="text"
            className="form-control"
            placeholder="e.g. Aravind &amp; Deepika"
            {...register("fullName", { required: "Name is required" })}
          />
          {errors.fullName && <div className="form-error">{errors.fullName.message}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="bf-phone">Mobile Phone Number *</label>
          <input
            id="bf-phone"
            type="tel"
            className="form-control"
            placeholder="+91 82489 61595"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9+\s-]{8,15}$/,
                message: "Please enter a valid phone number"
              }
            })}
          />
          {errors.phone && <div className="form-error">{errors.phone.message}</div>}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div className="form-group">
          <label htmlFor="bf-email">Email Address *</label>
          <input
            id="bf-email"
            type="email"
            className="form-control"
            placeholder="name@example.com"
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email address"
              }
            })}
          />
          {errors.email && <div className="form-error">{errors.email.message}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="bf-service">Photography Service *</label>
          <select
            id="bf-service"
            className="form-control"
            {...register("service", { required: "Please select a service" })}
          >
            <option value="">Select Service Required</option>
            <option value="Wedding Photography">Wedding Photography &amp; Cinematography</option>
            <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
            <option value="Engagement Photography">Engagement Photography</option>
            <option value="Candid Photography">Candid Photography</option>
            <option value="Maternity Shoot">Maternity Shoot</option>
            <option value="Baby Photoshoot">Baby Photoshoot</option>
            <option value="Birthday Photoshoot">Birthday Photoshoot</option>
            <option value="Portrait Photography">Portrait Photography</option>
            <option value="Corporate Events">Corporate Event Photography</option>
            <option value="Photo Restoration">Photo Restoration Lab</option>
            <option value="Others">Custom Photography Package</option>
          </select>
          {errors.service && <div className="form-error">{errors.service.message}</div>}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div className="form-group">
          <label htmlFor="bf-location">Preferred Studio Location *</label>
          <select
            id="bf-location"
            className="form-control"
            {...register("studioLocation", { required: "Please select a studio location" })}
          >
            <option value="">Select Location</option>
            <option value="Parangipettai Studio">Parangipettai Studio</option>            
            <option value="Wedding Mandapam / Venue">Wedding Mandapam / Venue</option>
            <option value="Destination Shoot">Destination Shoot Outside Parangipettai</option>
          </select>
          {errors.studioLocation && <div className="form-error">{errors.studioLocation.message}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="bf-date">Tentative Event Date</label>
          <input
            id="bf-date"
            type="date"
            className="form-control"
            {...register("eventDate")}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="bf-message">Event Details / Additional Notes</label>
        <textarea
          id="bf-message"
          className="form-control"
          placeholder="Tell us about the venue, ceremonies, expected number of guests, or specific styling ideas you have in mind..."
          rows={4}
          {...register("message")}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-brand"
        style={{ width: "100%", padding: "18px", fontSize: "1.05rem" }}
        disabled={loading}
      >
        <Send size={18} style={{ marginRight: 10 }} />
        {loading ? "Submitting Booking..." : "Submit Booking Consultation Request"}
      </button>

      <p style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: "14px" }}>
        Prefer immediate assistance? Call us directly at <a href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`} style={{ color: "var(--color-burgundy)", fontWeight: 600 }}>{STUDIO_INFO.phoneAnnaNagar}</a>
      </p>
    </form>
  );
}
