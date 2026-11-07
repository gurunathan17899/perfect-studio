import React, { useState } from "react";
import { FAQ_DATA } from "../../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState("faq-1");

  const toggleFAQ = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="content-container">
          <motion.div
            className="section-heading centered"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-kicker">FAQ</p>
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p>Everything you need to know about booking and working with Perfect Studio.</p>
          </motion.div>

          <div className="accordion">
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div className="faq-item" key={item.id}>
                  <button
                    type="button"
                    className={`faq-question ${isOpen ? "active" : ""}`}
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="faq-toggle-icon">
                      <ChevronDown size={14} />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="faq-answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
