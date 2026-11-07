import React from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS, STUDIO_INFO } from "../../utils/data";
import { Calendar, Clock, User, ArrowLeft, Share2, Phone } from "lucide-react";
import BookingCTA from "../../components/BookingCTA";

export default function BlogPost({ onOpenBooking }) {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id) || BLOG_POSTS[0];

  return (
    <div style={{ paddingTop: "100px", background: "var(--color-paper)" }}>
      {/* Article Header */}
      <section style={{ padding: "80px 20px 40px", background: "#ffffff", borderBottom: "1px solid #ede8e3" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <Link
            to="/blog"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--color-burgundy)", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}
          >
            <ArrowLeft size={16} /> Back to all articles
          </Link>

          <div style={{ display: "flex", gap: "14px", alignItems: "center", color: "var(--color-gold)", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "16px" }}>
            <span>{post.category}</span>
            <span>&bull;</span>
            <span style={{ color: "#777", display: "flex", alignItems: "center", gap: "5px" }}>
              <Calendar size={14} /> {post.date}
            </span>
            <span>&bull;</span>
            <span style={{ color: "#777", display: "flex", alignItems: "center", gap: "5px" }}>
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)", color: "var(--color-ink)", lineHeight: "1.25", marginBottom: "24px" }}>
            {post.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#666", fontSize: "0.95rem" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--color-burgundy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
              PS
            </div>
            <div>
              <strong>{post.author}</strong>
              <div style={{ fontSize: "0.82rem", color: "#888" }}>Perfect Studio Editorial Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container" style={{ maxWidth: "960px", marginTop: "40px" }}>
        <div style={{ maxHeight: "480px", overflow: "hidden", borderRadius: "4px", boxShadow: "0 14px 40px rgba(0,0,0,0.1)" }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="container" style={{ maxWidth: "840px", padding: "60px 20px 80px" }}>
        <div
          style={{
            color: "#3d3935",
            fontSize: "1.1rem",
            lineHeight: "2",
            fontFamily: "var(--font-body)"
          }}
        >
          <p style={{ fontSize: "1.25rem", color: "#111", lineHeight: "1.8", fontWeight: 500, marginBottom: "30px", borderLeft: "4px solid var(--color-burgundy)", paddingLeft: "20px" }}>
            {post.excerpt}
          </p>

          <div style={{ whiteSpace: "pre-line" }}>
            {post.content}
          </div>
        </div>

        {/* Share & Consultation Box */}
        <div style={{ marginTop: "60px", padding: "34px", background: "#fbf9f6", border: "1px solid #ede8e3", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h4 style={{ fontSize: "1.3rem", color: "var(--color-burgundy)", marginBottom: "6px" }}>
              Planning a Wedding or Shoot in Chennai?
            </h4>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>
              Our senior team is available for phone consultations and studio walkthroughs.
            </p>
          </div>
          <div style={{ display: "flex", gap: "14px" }}>
            <button
              type="button"
              className="btn btn-brand"
              onClick={onOpenBooking}
            >
              Book Consultation
            </button>
            <a
              href={`tel:${STUDIO_INFO.phoneAnnaNagarRaw}`}
              className="btn btn-outline-brand"
            >
              <Phone size={15} style={{ marginRight: 6 }} /> Call Studio
            </a>
          </div>
        </div>
      </article>

      <BookingCTA onOpenBooking={onOpenBooking} />
    </div>
  );
}
