import React from "react";
import { STUDIO_INFO } from "../../utils/data";

export default function FloatingRail({ onOpenEnquiry }) {
  return (
    <nav className="floating-social-rail" aria-label="Quick contact and social links">
      {/* Instagram */}
      <a
        className="floating-social-item social-instagram"
        href={STUDIO_INFO.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        data-label="Instagram"
      >
        <img src="/assets/svg/floating-insta.svg" alt="Instagram" className="floating-social-icon" />
      </a>

      {/* Facebook */}
      <a
        className="floating-social-item social-facebook"
        href={STUDIO_INFO.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        data-label="Facebook"
      >
        <img src="/assets/svg/floating-fb.svg" alt="Facebook" className="floating-social-icon" />
      </a>

      {/* YouTube */}
      <a
        className="floating-social-item social-youtube"
        href={STUDIO_INFO.socials.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        data-label="YouTube"
      >
        <img src="/assets/svg/floating-yt.svg" alt="YouTube" className="floating-social-icon" />
      </a>

      {/* Enquiry Button (opens modal) */}
      <button
        type="button"
        className="floating-social-item social-enquiry"
        onClick={onOpenEnquiry}
        aria-label="Enquiry Now"
        data-label="Enquiry Now"
      >
        <img src="/assets/svg/floating-enquiry.svg" alt="Enquiry" className="floating-social-icon" />
      </button>

      {/* WhatsApp */}
      <a
        className="floating-social-item social-whatsapp"
        href={STUDIO_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        data-label="WhatsApp"
      >
        <img src="/assets/svg/floating-whatsapp.svg" alt="WhatsApp" className="floating-social-icon" />
      </a>

      {/* Call */}
      <a
        className="floating-social-item social-call"
        href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}
        aria-label="Call Studio"
        data-label="Call Us"
      >
        <img src="/assets/svg/floating-call.svg" alt="Call" className="floating-social-icon" />
      </a>
    </nav>
  );
}
