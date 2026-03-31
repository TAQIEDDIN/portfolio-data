"use client";

import { motion } from "framer-motion";
import { Download, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CVViewer() {
  const [isMounted, setIsMounted] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  const pdfFile = { url: "/docs/cv-son-eng.pdf", name: "cv-son-eng.pdf" };

  useEffect(() => {
    setIsMounted(true);
    fetch(pdfFile.url)
      .then((res) => { if (!res.ok) throw new Error("PDF not found"); })
      .catch(() => setPdfError(true));
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile.url;
    link.download = pdfFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ── Loading ── */
  if (!isMounted)
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg)" }}>
        <style>{CSS}</style>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4">
          <motion.div
            className="w-10 h-10 rounded-full border-2"
            style={{ borderColor: "rgba(34,211,238,.3)", borderTopColor: "var(--c-cyan)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="h-font" style={{ fontSize: ".65rem", letterSpacing: ".2em", color: "var(--c-muted)" }}>
            LOADING VIEWER...
          </p>
        </motion.div>
      </div>
    );

  /* ── Error ── */
  if (pdfError)
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg)" }}>
        <style>{CSS}</style>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="g-card rounded-xl p-10 text-center relative overflow-hidden"
          style={{ maxWidth: 420 }}
        >
          <div className="corner-tl" /><div className="corner-br" />
          <FileText size={36} className="mx-auto mb-4" style={{ color: "var(--c-cyan)" }} />
          <p className="h-font mb-2" style={{ fontSize: ".75rem", letterSpacing: ".12em", color: "var(--c-white)" }}>PDF UNAVAILABLE</p>
          <p className="b-font text-sm mb-6" style={{ color: "var(--c-muted)", fontWeight: 300 }}>The PDF could not be loaded. You can still download it.</p>
          <button className="btn-cta" onClick={handleDownload}>
            <Download size={13} /> DOWNLOAD CV
          </button>
        </motion.div>
      </div>
    );

  /* ── Main ── */
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <style>{CSS}</style>

      {/* BG orbs */}
      <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle,rgba(34,211,238,.05),transparent 70%)", top: -100, right: -100 }} />
      <div className="orb" style={{ width: 400, height: 400, background: "radial-gradient(circle,rgba(99,102,241,.05),transparent 70%)", bottom: 200, left: -100 }} />

<div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8 pt-24 md:pt-28 pb-24">
        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: [0.16, 1, 0.3, 1] }} className="mb-10">
          <p className="sec-label mb-3">// RESUME</p>
          <h1 className="h-font mb-3" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "var(--c-white)", lineHeight: 1.1 }}>
            Curriculum <span className="neon">Vitae</span>
          </h1>
          <p className="b-font text-sm" style={{ color: "var(--c-muted)", fontWeight: 300 }}>
            Full professional background, experience, and skill set.
          </p>
        </motion.div>

        {/* ── Action bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5, delay: .15 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8"
        >
          <Link href="/about">
            <button className="btn-ghost">
              <ArrowLeft size={13} /> BACK TO ABOUT
            </button>
          </Link>
          <button className="btn-cta" onClick={handleDownload}>
            <Download size={13} /> DOWNLOAD CV
          </button>
        </motion.div>

        {/* ── PDF viewer ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .65, delay: .25, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{ background: "linear-gradient(135deg,rgba(34,211,238,.18),rgba(99,102,241,.12))" }} />

          <div
            className="pdf-frame relative rounded-2xl overflow-hidden mx-auto"
            style={{
              width: "595px",
              maxWidth: "100%",
              aspectRatio: "210/297",
              border: "1px solid rgba(34,211,238,.18)",
              background: "rgba(7,13,26,.9)",
            }}
          >
            {/* Corner brackets */}
            <div className="corner-tl" /><div className="corner-br" />
            <div className="corner-tr" /><div className="corner-bl" />

            <iframe
              src={`${pdfFile.url}#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: "none", display: "block" }}
              title="CV Preview"
              onError={() => setPdfError(true)}
            />

            {/* Subtle scan line */}
            <motion.div
              className="absolute left-0 right-0 h-[2px] pointer-events-none"
              style={{ background: "linear-gradient(90deg,transparent,rgba(34,211,238,.18),transparent)" }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* ── Bottom hint ── */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }}
          className="text-center mt-5 b-font"
          style={{ fontSize: ".65rem", color: "var(--c-muted)", letterSpacing: ".08em" }}
        >
          Can't view the PDF?{" "}
          <button onClick={handleDownload} style={{ color: "var(--c-cyan)", textDecoration: "underline", cursor: "pointer", background: "none", border: "none", fontFamily: "inherit", fontSize: "inherit" }}>
            Download it directly
          </button>
        </motion.p>
      </div>
    </div>
  );
}

/* ── Shared CSS ───────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
  :root {
    --bg:#03060f; --c-cyan:#22d3ee; --c-sky:#38bdf8; --c-indigo:#818cf8;
    --c-white:#e8f0fe; --c-muted:#5e7a99;
    --font-head:'Orbitron',sans-serif; --font-body:'DM Sans',sans-serif;
  }
  .h-font{font-family:var(--font-head);}
  .b-font{font-family:var(--font-body);}
  .sec-label{font-family:var(--font-head);font-size:.58rem;letter-spacing:.25em;color:var(--c-cyan);}
  .neon{color:var(--c-cyan);text-shadow:0 0 14px rgba(34,211,238,.5),0 0 40px rgba(34,211,238,.18);}
  .orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}

  .g-card{
    background:linear-gradient(135deg,rgba(14,26,48,.85),rgba(7,13,26,.92));
    border:1px solid rgba(34,211,238,.14);backdrop-filter:blur(12px);
  }

  .btn-cta{
    font-family:var(--font-head);font-size:.65rem;letter-spacing:.12em;font-weight:800;
    background:linear-gradient(135deg,var(--c-cyan),var(--c-sky),var(--c-indigo));
    color:#03060f;border-radius:3px;padding:.55rem 1.4rem;
    transition:transform .2s,box-shadow .2s,filter .2s;
    display:inline-flex;align-items:center;gap:.4rem;
  }
  .btn-cta:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(34,211,238,.35);filter:brightness(1.08);}

  .btn-ghost{
    font-family:var(--font-head);font-size:.65rem;letter-spacing:.12em;font-weight:700;
    border:1px solid rgba(34,211,238,.28);color:var(--c-cyan);
    border-radius:3px;background:transparent;padding:.55rem 1.4rem;
    transition:all .2s;display:inline-flex;align-items:center;gap:.4rem;
  }
  .btn-ghost:hover{background:rgba(34,211,238,.07);border-color:var(--c-cyan);transform:translateY(-2px);}

  /* Corner brackets */
  .corner-tl,.corner-tr,.corner-bl,.corner-br{position:absolute;width:16px;height:16px;pointer-events:none;}
  .corner-tl{top:0;left:0;border-top:2px solid rgba(34,211,238,.5);border-left:2px solid rgba(34,211,238,.5);}
  .corner-tr{top:0;right:0;border-top:2px solid rgba(34,211,238,.5);border-right:2px solid rgba(34,211,238,.5);}
  .corner-bl{bottom:0;left:0;border-bottom:2px solid rgba(34,211,238,.5);border-left:2px solid rgba(34,211,238,.5);}
  .corner-br{bottom:0;right:0;border-bottom:2px solid rgba(34,211,238,.5);border-right:2px solid rgba(34,211,238,.5);}
`;