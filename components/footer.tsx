"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap');

        .footer-root {
          background: rgba(10, 18, 35, 0.92);
          border: 1px solid rgba(34, 211, 238, 0.13);
          border-radius: 24px 24px 0 0;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .footer-logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          background: linear-gradient(135deg, #22d3ee, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          display: inline-block;
        }

        .footer-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          color: rgba(148, 180, 210, 0.65);
          line-height: 1.65;
          max-width: 280px;
        }

        .footer-col-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.88);
          letter-spacing: 0.04em;
          margin-bottom: 14px;
        }

        .footer-contact-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: rgba(148, 180, 210, 0.72);
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: color 0.2s;
          margin-bottom: 10px;
        }
        .footer-contact-link:hover { color: #22d3ee; }

        .footer-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(34, 211, 238, 0.2);
          background: rgba(34, 211, 238, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(148, 180, 210, 0.75);
          transition: color 0.2s, border-color 0.2s, background 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .footer-icon-btn:hover {
          color: #22d3ee;
          border-color: rgba(34, 211, 238, 0.5);
          background: rgba(34, 211, 238, 0.08);
          box-shadow: 0 0 14px rgba(34, 211, 238, 0.2);
        }

        .footer-divider {
          border: none;
          border-top: 1px solid rgba(34, 211, 238, 0.1);
        }

        .footer-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: rgba(100, 140, 170, 0.5);
        }

        .footer-scroll-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22d3ee, #818cf8);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .footer-scroll-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(34, 211, 238, 0.4);
        }
      `}</style>

      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="footer-root mt-16 px-8 pt-10 pb-0"
      >
        {/* ── Top 3-column grid ── */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10">

          {/* Col 1 — Brand */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <Link href="/" className="footer-logo">TAQI</Link>
            <p className="footer-tagline">
              AI Engineer specializing in Computer Vision, Autonomous Systems, and LLM applications.
            </p>
          </motion.div>

          {/* Col 2 — Contact */}
          <motion.div variants={itemVariants}>
            <p className="footer-col-title">Contact</p>
            <a href="mailto:taqieddineelmamouni@gmail.com" className="footer-contact-link">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              taqieddineelmamouni@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/taqi-eddine-el-mamouni/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              linkedin.com/in/taqi-eddine-el-mamouni
            </a>
          </motion.div>

          {/* Col 3 — Social */}
          <motion.div variants={itemVariants}>
            <p className="footer-col-title">Social Media</p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/TAQIEDDIN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-icon-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/taqi-eddine-el-mamouni/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-icon-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>

              <motion.a
                href="mailto:taqieddineelmamouni@gmail.com"
                aria-label="Email"
                className="footer-icon-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <hr className="footer-divider" />
        <motion.div
          variants={itemVariants}
          className="max-w-5xl mx-auto flex items-center justify-between py-4"
        >
          <p className="footer-copy">
            © {new Date().getFullYear()} Taqi eddine El Mamouni. All rights reserved.
          </p>
          <motion.button
            className="footer-scroll-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" fill="none" stroke="#03060f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </motion.button>
        </motion.div>
      </motion.footer>
    </>
  );
}