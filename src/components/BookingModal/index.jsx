import React, { useState } from "react";
import { useForm } from "react-hook-form";
import confetti from "canvas-confetti";
import { X, CheckCircle, Calendar, Phone, Mail, User, MapPin, Camera } from "lucide-react";
import { STUDIO_INFO } from "../../utils/data";

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // confetti fallback
      }
    }, 700);
  };

  const handleClose = () => {
    setSubmitted(false);
    reset();
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-gold)", fontWeight: 700 }}>
              Perfect Studio · Chennai
            </span>
            <h3>Book Your Photography Session</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={handleClose}
            aria-label="Close Modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div className="form-success-box">
              <CheckCircle size={48} color="#2e7d32" style={{ margin: "0 auto 16px" }} />
              <h4>Thank You! We Have Received Your Request</h4>
              <p>
                Our photography consultant from your preferred studio location will connect with you within 2 hours to confirm details and discuss your vision.
              </p>
              <div style={{ marginTop: "24px", display: "flex", gap: "12px", justifyContent: "center" }}>
                <a
                  href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}
                  className="btn btn-brand"
                  style={{ minWidth: "150px", padding: "12px 20px" }}
                >
                  Call Anna Nagar
                </a>
                <button
                  type="button"
                  className="btn btn-outline-brand"
                  style={{ minWidth: "130px", padding: "12px 20px" }}
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <p style={{ color: "#666", fontSize: "0.92rem", marginBottom: "22px" }}>
                Share your details and our team will connect with you to plan a photography experience that perfectly captures your special moments.
              </p>

              <div className="form-group">
                <label htmlFor="modal-name">
                  Groom / Bride / Client Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Full Name"
                  {...register("fullName", { required: "Please enter your name" })}
                />
                {errors.fullName && <div className="form-error">{errors.fullName.message}</div>}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label htmlFor="modal-phone">Phone Number *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    className="form-control"
                    placeholder="+91 98765 43210"
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

                <div className="form-group">
                  <label htmlFor="modal-email">Email Address *</label>
                  <input
                    id="modal-email"
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format"
                      }
                    })}
                  />
                  {errors.email && <div className="form-error">{errors.email.message}</div>}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label htmlFor="modal-service">Service Required *</label>
                  <select
                    id="modal-service"
                    className="form-control"
                    {...register("service", { required: "Please select a photography service" })}
                  >
                    <option value="">Select Option</option>
                    <option value="Wedding Photography">Wedding Photography</option>
                    <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                    <option value="Engagement Photography">Engagement Photography</option>
                    <option value="Candid Photography">Candid Photography</option>
                    <option value="Maternity Shoot">Maternity Shoot</option>
                    <option value="Baby Photoshoot">Baby Photoshoot</option>
                    <option value="Birthday Photoshoot">Birthday Photoshoot</option>
                    <option value="Portrait Photography">Portrait Photography</option>
                    <option value="Corporate Events">Corporate Events</option>
                    <option value="Photo Restoration">Photo Restoration</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.service && <div className="form-error">{errors.service.message}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-location">Preferred Studio *</label>
                  <select
                    id="modal-location"
                    className="form-control"
                    {...register("location", { required: "Please select a preferred studio location" })}
                  >
                    <option value="">Select Location</option>
                    <option value="Anna Nagar Studio">Anna Nagar Studio</option>
                    <option value="Mogappair Studio">Mogappair Studio</option>
                    <option value="On-Location / Wedding Venue">On-Location / Wedding Venue</option>
                  </select>
                  {errors.location && <div className="form-error">{errors.location.message}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-date">Tentative Event / Shoot Date</label>
                <input
                  id="modal-date"
                  type="date"
                  className="form-control"
                  {...register("eventDate")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-message">Tell Us About Your Event / Requirements</label>
                <textarea
                  id="modal-message"
                  className="form-control"
                  placeholder="Share details about ceremony dates, venue, special preferences, or specific package requests..."
                  rows={3}
                  {...register("message")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-brand"
                style={{ width: "100%", marginTop: "10px", padding: "16px" }}
                disabled={loading}
              >
                {loading ? "Submitting Request..." : "Book Now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
