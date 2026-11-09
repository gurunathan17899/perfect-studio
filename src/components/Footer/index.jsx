import React from "react";
import { Link } from "react-router-dom";
import { STUDIO_INFO, SERVICES_DATA } from "../../utils/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      {/* Marquee Banner */}
      <div className="footer-strip" aria-label="Perfect Studio Services Marquee">
        <div className="footer-marquee">
          <span>Perfect Studio | Wedding Photography | Photography</span>
          <span>Perfect Studio | Wedding Photography | Photography</span>
          <span>Perfect Studio | Wedding Photography | Photography</span>
          <span>Perfect Studio | Wedding Photography | Photography</span>
          <span>Perfect Studio | Wedding Photography | Photography</span>
          <span>Perfect Studio | Wedding Photography | Photography</span>
        </div>
      </div>

      <div className="container">
        <div className="footer-main-grid">
          {/* About / Logo Column */}
          <div className="footer-about">
            <Link to="/" className="footer-logo" aria-label="Perfect Studio Home">
              <img
                src="/assets/svg/footer-logo.svg"
                alt="Perfect Studio Logo"
                className="brand-logo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/svg/logo.svg";
                }}
              />
            </Link>
            <p>
              Parangipettai's premier photography studio, with two physical locations in Anna Nagar &amp; Mogappair. Capturing love, life, and legacy since 2021 across three generations of families.
            </p>
          </div>

          {/* Services Links */}
          <nav className="footer-column" aria-label="Footer services navigation">
            <h2>Services</h2>
            <ul>
              {SERVICES_DATA.slice(0, 7).map(service => (
                <li key={service.id}>
                  <Link to={service.link}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Studio Links */}
          <nav className="footer-column" aria-label="Footer studio navigation">
            <h2>Studio</h2>
            <ul>
              <li><Link to="/services/portrait-photography">Portrait Photography</Link></li>
              <li><Link to="/services/photo-restoration">Photo Restoration</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/book-now">Book A Session</Link></li>
            </ul>
          </nav>

          {/* Contact Details */}
          <div className="footer-column footer-contact">
            <h2>Contact</h2>
            <address>
              <a href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}>
                <img src="/assets/svg/footer-location.svg" alt="" aria-hidden="true" />
                <span>Anna Nagar: {STUDIO_INFO.phoneAnnaNagar}</span>
              </a>

              <a href={`tel:${STUDIO_INFO.phoneMogappairRaw}`}>
                <img src="/assets/svg/footer-location.svg" alt="" aria-hidden="true" />
                <span>Mogappair: {STUDIO_INFO.phoneMogappair}</span>
              </a>

              <a href={`mailto:${STUDIO_INFO.email}`}>
                <img src="/assets/svg/footer-email.svg" alt="" aria-hidden="true" />
                <span>{STUDIO_INFO.email}</span>
              </a>

              <span>
                <img src="/assets/svg/footer-clock.svg" alt="" aria-hidden="true" />
                <span>{STUDIO_INFO.hoursWeekday}</span>
              </span>

              <span>
                <img src="/assets/svg/footer-clock.svg" alt="" aria-hidden="true" />
                <span>{STUDIO_INFO.hoursSunday}</span>
              </span>

              <a href={STUDIO_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
                <img src="/assets/svg/footer-whatsapp.svg" alt="" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>
            </address>
          </div>
        </div>

        {/* Location Row */}
        <div className="footer-location-row">
          <span>Perfect Studio Locations:</span>
          <a
            href={STUDIO_INFO.locations.Parangipettai.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Parangipettai
            <img src="/assets/svg/share.svg" alt="" aria-hidden="true" style={{ width: 14 }} />
          </a>
        
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-social">
            <span>Follow us</span>
            <a
              href={STUDIO_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Perfect Studio on Facebook"
            >
              <img src="/assets/svg/fb.svg" alt="Facebook" />
            </a>
            <a
              href={STUDIO_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Perfect Studio on YouTube"
            >
              <img src="/assets/svg/yt.svg" alt="YouTube" />
            </a>
            <a
              href={STUDIO_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Perfect Studio on Instagram"
            >
              <img src="/assets/svg/footer-insta.svg" alt="Instagram" />
            </a>
          </div>

          <p>
            Copyright &copy; {currentYear} Perfect Studio. All Rights Reserved. Serving Parangipettai Since 2021.
          </p>
        </div>
      </div>
    </footer>
  );
}
