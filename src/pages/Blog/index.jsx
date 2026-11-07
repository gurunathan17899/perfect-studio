import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../../utils/data";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";

export default function Blog({ onOpenBooking }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Wedding Guide", "Trends", "Restoration"];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ paddingTop: "100px" }}>
      {/* Blog Hero Banner */}
      <section
        className="section-dark"
        style={{
          padding: "100px 20px 80px",
          textAlign: "center",
          background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('/assets/img/finest work20.png') center / cover no-repeat"
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow line-label" style={{ color: "var(--color-gold)" }}>PHOTOGRAPHY INSIGHTS &amp; GUIDES</p>
            <h1 style={{ color: "#ffffff", maxWidth: "860px", margin: "16px auto", fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}>
              The Perfect Studio Journal
            </h1>
            <p style={{ maxWidth: "680px", margin: "0 auto 30px", color: "rgba(255,255,255,0.85)", fontSize: "1.1rem" }}>
              Expert guides on Chennai weddings, photography tips for couples, trends, and heirloom preservation from our six-decade legacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section style={{ padding: "40px 0 20px", background: "#fbf9f6", borderBottom: "1px solid #ede8e3" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            {/* Category Pills */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "8px 18px",
                    border: "1px solid #d4cdc5",
                    background: selectedCategory === cat ? "var(--color-burgundy)" : "#ffffff",
                    color: selectedCategory === cat ? "#ffffff" : "#444",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    transition: "all 0.25s ease"
                  }}
                >
                  {cat === "all" ? "All Articles" : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: "relative", minWidth: "260px" }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px 10px 38px",
                  border: "1px solid #d4cdc5",
                  fontSize: "0.92rem",
                  background: "#ffffff"
                }}
              />
              <Search size={16} color="#888" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{ padding: "80px 0 110px", background: "var(--color-paper)" }}>
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <h3>No articles found</h3>
              <p style={{ color: "#777", marginTop: "10px" }}>Try searching with different keywords.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "36px" }}>
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e5ded7",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 18px 45px rgba(0,0,0,0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.04)";
                  }}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div style={{ height: "230px", overflow: "hidden" }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ padding: "28px 26px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "var(--color-gold)", fontSize: "0.82rem", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase" }}>
                      <span>{post.category}</span>
                      <span>&bull;</span>
                      <span style={{ color: "#888", display: "flex", alignItems: "center", gap: "4px" }}>
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>

                    <h2 style={{ fontSize: "1.45rem", color: "var(--color-ink)", marginBottom: "12px", lineHeight: "1.3" }}>
                      <Link to={`/blog/${post.id}`} style={{ color: "inherit" }}>
                        {post.title}
                      </Link>
                    </h2>

                    <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.75", marginBottom: "22px", flexGrow: 1 }}>
                      {post.excerpt}
                    </p>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "18px", borderTop: "1px solid #f0ebe4" }}>
                      <span style={{ fontSize: "0.85rem", color: "#888", display: "flex", alignItems: "center", gap: "6px" }}>
                        <Calendar size={14} /> {post.date}
                      </span>

                      <Link
                        to={`/blog/${post.id}`}
                        style={{ color: "var(--color-burgundy)", fontWeight: 600, fontSize: "0.92rem", display: "flex", alignItems: "center", gap: "4px" }}
                      >
                        Read More <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
