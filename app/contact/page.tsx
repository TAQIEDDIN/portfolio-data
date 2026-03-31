"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "9ddf9bd6-45e9-48f9-84b9-ef65b14ecd9d",
          name: formData.get("name") || email,
          email,
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        formRef.current?.reset();
      } else {
        alert(result.message || "Submission failed. Please try again.");
      }
    } catch {
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    {
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 7l10 7 10-7" />
        </svg>
      ),
      label: "Email",
      text: "taqieddineelmamouni@gmail.com",
      href: "mailto:taqieddineelmamouni@gmail.com",
    },
    {
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: "Phone",
      text: "+90 501 327 09 87",
      href: "tel:+905013270987",
    },
    {
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: "LinkedIn",
      text: "taqi-eddine-el-mamouni",
      href: "https://www.linkedin.com/in/taqi-eddine-el-mamouni/",
    },
    {
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      label: "GitHub",
      text: "github.com/TAQIEDDIN",
      href: "https://github.com/TAQIEDDIN",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.35, ease: "easeOut" },
    }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap');

        .ct-page {
          min-height: 100vh;
          padding: 80px 16px 40px;
          background: transparent;
        }

        .ct-heading {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 800;
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #fff 40%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ct-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: rgba(148, 180, 210, 0.65);
        }

        /* Cards */
        .ct-card {
          background: rgba(10, 18, 35, 0.75);
          border: 1px solid rgba(34, 211, 238, 0.15);
          border-radius: 20px;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .ct-card:hover {
          border-color: rgba(34, 211, 238, 0.3);
          box-shadow: 0 0 40px rgba(34, 211, 238, 0.07);
        }

        /* Contact info items */
        .ct-info-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(34, 211, 238, 0.2);
          background: rgba(34, 211, 238, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22d3ee;
          flex-shrink: 0;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .ct-info-row:hover .ct-info-icon {
          background: rgba(34, 211, 238, 0.12);
          box-shadow: 0 0 12px rgba(34, 211, 238, 0.2);
        }

        .ct-info-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          color: rgba(34, 211, 238, 0.7);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .ct-info-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: rgba(148, 180, 210, 0.85);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ct-info-text:hover { color: #22d3ee; }

        /* Form header */
        .ct-form-header {
          background: rgba(34, 211, 238, 0.05);
          border-bottom: 1px solid rgba(34, 211, 238, 0.1);
          border-radius: 20px 20px 0 0;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ct-form-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.9);
        }

        /* Form fields */
        .ct-field-row {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(34, 211, 238, 0.08);
          padding: 10px 0;
        }
        .ct-field-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(34, 211, 238, 0.7);
          width: 64px;
          flex-shrink: 0;
        }
        .ct-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: rgba(200, 220, 240, 0.9);
        }
        .ct-input::placeholder { color: rgba(100, 140, 170, 0.45); }

        .ct-textarea {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          resize: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: rgba(200, 220, 240, 0.9);
          min-height: 130px;
          line-height: 1.6;
        }
        .ct-textarea::placeholder { color: rgba(100, 140, 170, 0.45); }

        /* Buttons */
        .btn-discard {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          padding: 8px 20px;
          border-radius: 999px;
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: rgba(239, 68, 68, 0.8);
          background: transparent;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-discard:hover {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.5);
        }

        .btn-send {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 9px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, #22d3ee, #38bdf8, #818cf8);
          color: #03060f;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
        }
        .btn-send:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(34, 211, 238, 0.4);
          filter: brightness(1.06);
        }
        .btn-send:disabled { opacity: 0.7; cursor: not-allowed; }

        /* Success state */
        .ct-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          text-align: center;
          gap: 16px;
        }
        .ct-success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2px solid rgba(34, 211, 238, 0.4);
          background: rgba(34, 211, 238, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22d3ee;
        }
        .ct-success-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.06em;
        }
        .ct-success-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: rgba(148, 180, 210, 0.65);
        }
        .btn-new-msg {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 9px 24px;
          border-radius: 999px;
          border: 1px solid rgba(34, 211, 238, 0.3);
          color: #22d3ee;
          background: rgba(34, 211, 238, 0.06);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .btn-new-msg:hover {
          background: rgba(34, 211, 238, 0.12);
          border-color: rgba(34, 211, 238, 0.5);
          box-shadow: 0 0 14px rgba(34, 211, 238, 0.2);
        }

        /* Spinner */
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner { animation: spin 0.8s linear infinite; }
      `}</style>

      <div className="ct-page">
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <h1 className="ct-heading" style={{ marginBottom: "12px" }}>Get in Touch</h1>
            <p className="ct-sub">I'm always open to new opportunities and collaborations.</p>
          </motion.div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", alignItems: "stretch" }}>

            {/* ── Left card — Contact Info ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="ct-card"
              style={{ padding: "28px" }}
            >
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.15rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "28px",
              }}>
                Contact Information
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {contacts.map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="ct-info-row"
                    style={{ display: "flex", alignItems: "center", gap: "14px" }}
                  >
                    <div className="ct-info-icon">{item.icon}</div>
                    <div>
                      <p className="ct-info-label">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="ct-info-text">
                          {item.text}
                        </a>
                      ) : (
                        <span className="ct-info-text">{item.text}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Right card — Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="ct-card"
              style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="ct-success"
                >
                  <div className="ct-success-icon">
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="ct-success-title">Message Sent!</p>
                  <p className="ct-success-sub">Thank you for reaching out. I'll respond soon.</p>
                  <button className="btn-new-msg" onClick={() => setIsSubmitted(false)}>
                    New Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Form header bar */}
                  <div className="ct-form-header">
                    <span className="ct-form-title">SEND A MESSAGE</span>
                    {/* Decorative dots */}
                    <div style={{ display: "flex", gap: "6px" }}>
                      {["rgba(239,68,68,0.6)", "rgba(234,179,8,0.6)", "rgba(34,211,238,0.6)"].map((c, i) => (
                        <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", flex: 1, gap: "4px" }}>

                    {/* To */}
                    <motion.div custom={0} initial="hidden" animate="visible" variants={fadeInUp} className="ct-field-row">
                      <span className="ct-field-label">To:</span>
                      <input
                        className="ct-input"
                        type="text"
                        value="taqieddineelmamouni@gmail.com"
                        readOnly
                      />
                    </motion.div>

                    {/* From */}
                    <motion.div custom={1} initial="hidden" animate="visible" variants={fadeInUp} className="ct-field-row">
                      <span className="ct-field-label">From:</span>
                      <input
                        className="ct-input"
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        required
                      />
                    </motion.div>

                    {/* Subject */}
                    <motion.div custom={2} initial="hidden" animate="visible" variants={fadeInUp} className="ct-field-row">
                      <span className="ct-field-label">Subject:</span>
                      <input
                        className="ct-input"
                        type="text"
                        name="subject"
                        placeholder="How can I help you?"
                        required
                      />
                    </motion.div>

                    <input type="hidden" name="name" value="Portfolio Contact" />

                    {/* Message */}
                    <motion.div
                      custom={3}
                      initial="hidden"
                      animate="visible"
                      variants={fadeInUp}
                      style={{ flex: 1, paddingTop: "12px" }}
                    >
                      <textarea
                        className="ct-textarea"
                        name="message"
                        placeholder="Write your message here..."
                        required
                      />
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                      custom={4}
                      initial="hidden"
                      animate="visible"
                      variants={fadeInUp}
                      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1px solid rgba(34,211,238,0.08)" }}
                    >
                      <button type="button" className="btn-discard" onClick={() => formRef.current?.reset()}>
                        Discard
                      </button>
                      <button type="submit" className="btn-send" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <svg className="spinner" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                            </svg>
                            SENDING...
                          </>
                        ) : (
                          <>
                            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                              <line x1="22" y1="2" x2="11" y2="13"/>
                              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                            </svg>
                            SEND
                          </>
                        )}
                      </button>
                    </motion.div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}