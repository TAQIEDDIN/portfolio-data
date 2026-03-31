"use client";

import { motion } from "framer-motion";
import { ExternalLink, Cloud, Brain, MessageSquare, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type CertificationItem = {
  title: string; issuer: string; issued: string;
  skills: string[]; credentialUrl: string;
  icon: any; accent: string; logo?: string;
};

export default function Certifications() {
  const certifications: CertificationItem[] = [
    {
      title: "Machine Learning with Python",
      issuer: "freeCodeCamp", issued: "Jun 2025",
      skills: ["Deep Learning", "CNN", "NLP", "Machine Learning"],
      credentialUrl: "https://www.freecodecamp.org/certification/fcca5306f64-8d08-4815-b26f-4d1ffe985772/machine-learning-with-python-v7",
      icon: Cloud, accent: "var(--c-cyan)",
      logo: "https://play-lh.googleusercontent.com/MoaYYQjGtmGLhG9HbjCDKyj44kwHj1HfbCI2Am70elRm35vJ-u4y4X5uEJjP97MAAsU=w600-h300-pc0xffffff-pd",
    },
    {
      title: "NLP",
      issuer: "BTK Akademi — ICT", issued: "Feb 2025",
      skills: ["NLP", "LSTM", "Decision Trees"],
      credentialUrl: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=EoPfbaVoqq",
      icon: Brain, accent: "var(--c-indigo)",
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "DU KALİTET", issued: "Oct 2025",
      skills: ["Data Science", "Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
      credentialUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQGiVMCNsunnqQ",
      icon: MessageSquare, accent: "var(--c-sky)",
    },
    {
      title: "AI Agents Fundamentals",
      issuer: "Hugging Face", issued: "Aug 2025",
      skills: ["LLM", "Fine-tuning", "AI Agents"],
      credentialUrl: "https://huggingface.co/agents-course",
      icon: Brain, accent: "var(--c-indigo)",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        :root {
          --bg:#03060f;--c-cyan:#22d3ee;--c-sky:#38bdf8;--c-indigo:#818cf8;
          --c-white:#e8f0fe;--c-muted:#5e7a99;
          --font-head:'Orbitron',sans-serif;--font-body:'DM Sans',sans-serif;
        }
        .h-font{font-family:var(--font-head);}
        .b-font{font-family:var(--font-body);}
        .sec-label{font-family:var(--font-head);font-size:.58rem;letter-spacing:.25em;color:var(--c-cyan);}
        .neon{color:var(--c-cyan);text-shadow:0 0 14px rgba(34,211,238,.5),0 0 40px rgba(34,211,238,.18);}
        .orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}
        .glow-line{height:1px;background:linear-gradient(90deg,transparent,var(--c-cyan),var(--c-indigo),transparent);opacity:.2;}

        .cert-card{
          background:linear-gradient(135deg,rgba(14,26,48,.88),rgba(7,13,26,.94));
          border:1px solid rgba(34,211,238,.1);border-radius:14px;
          overflow:hidden;transition:all .3s;position:relative;
        }
        .cert-card:hover{
          border-color:rgba(34,211,238,.3);
          box-shadow:0 0 35px rgba(34,211,238,.07),0 10px 36px rgba(0,0,0,.4);
          transform:translateY(-4px);
        }
        .cert-icon{
          width:48px;height:48px;border-radius:10px;flex-shrink:0;
          display:flex;align-items:center;justify-content:center;
          transition:box-shadow .3s;
        }
        .cert-card:hover .cert-icon{box-shadow:0 0 18px currentColor;}
        .skill-chip{
          font-family:var(--font-head);font-size:.5rem;letter-spacing:.08em;
          border-radius:999px;padding:.2rem .65rem;
          border:1px solid rgba(34,211,238,.18);background:rgba(34,211,238,.05);
          color:var(--c-cyan);transition:all .2s;
        }
        .skill-chip:hover{background:rgba(34,211,238,.1);border-color:rgba(34,211,238,.35);}
        .btn-view{
          font-family:var(--font-head);font-size:.6rem;letter-spacing:.1em;font-weight:700;
          border:1px solid rgba(34,211,238,.25);color:var(--c-cyan);
          border-radius:3px;background:transparent;
          width:100%;padding:.55rem 1rem;
          transition:all .2s;display:inline-flex;align-items:center;justify-content:center;gap:.4rem;
        }
        .btn-view:hover{background:rgba(34,211,238,.07);border-color:var(--c-cyan);transform:translateY(-2px);}
        .corner-tl,.corner-br{position:absolute;width:12px;height:12px;pointer-events:none;}
        .corner-tl{top:0;left:0;border-top:2px solid rgba(34,211,238,.4);border-left:2px solid rgba(34,211,238,.4);}
        .corner-br{bottom:0;right:0;border-bottom:2px solid rgba(34,211,238,.4);border-right:2px solid rgba(34,211,238,.4);}
        .logo-badge{
          position:absolute;top:1rem;right:1rem;width:40px;height:40px;border-radius:8px;overflow:hidden;
          background:rgba(255,255,255,.06);border:1px solid rgba(34,211,238,.15);
          display:flex;align-items:center;justify-content:center;
        }
        .date-row{display:flex;align-items:center;gap:.4rem;font-family:var(--font-body);font-size:.72rem;color:var(--c-muted);}
      `}</style>

      <div className="orb" style={{ width:500,height:500,background:"radial-gradient(circle,rgba(34,211,238,.05),transparent 70%)",top:-100,right:-100 }} />
      <div className="orb" style={{ width:400,height:400,background:"radial-gradient(circle,rgba(99,102,241,.05),transparent 70%)",bottom:200,left:-100 }} />

<div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8 pt-24 md:pt-28 pb-24">
        {/* Header */}
        <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:.6,ease:[0.16,1,0.3,1] }} className="mb-12">
          <p className="sec-label mb-3">// ACHIEVEMENTS</p>
          <h1 className="h-font mb-3" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)",color:"var(--c-white)",lineHeight:1.1 }}>
            <span className="neon">Certifications</span>
          </h1>
          <p className="b-font text-sm" style={{ color:"var(--c-muted)",fontWeight:300 }}>
            Verified credentials and professional development milestones.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div key={i} variants={fadeUp} custom={i} initial="hidden" animate="visible" className="cert-card">
                {/* Accent top bar */}
                <div style={{ height:"2px", background:`linear-gradient(90deg,${cert.accent},transparent)` }} />

                <div className="corner-tl" /><div className="corner-br" />

                {cert.logo && (
                  <div className="logo-badge">
                    <Image src={cert.logo} alt={cert.issuer} width={28} height={28} className="object-contain" unoptimized />
                  </div>
                )}

                <div className="p-6">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="cert-icon" style={{ background:`${cert.accent}14`,border:`1px solid ${cert.accent}30`,color:cert.accent }}>
                      <Icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0" style={{ paddingRight: cert.logo ? "3rem" : 0 }}>
                      <h3 className="b-font font-medium leading-snug mb-1" style={{ color:"var(--c-white)",fontSize:".95rem" }}>
                        {cert.title}
                      </h3>
                      <p className="b-font text-xs" style={{ color:"var(--c-muted)",fontWeight:300 }}>{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="date-row mb-4">
                    <CheckCircle2 size={12} style={{ color:"var(--c-cyan)",flexShrink:0 }} />
                    <span>Issued: <span style={{ color:"var(--c-white)",fontWeight:500 }}>{cert.issued}</span></span>
                  </div>

                  <div className="glow-line mb-4" />

                  {/* Skills */}
                  {cert.skills.length > 0 && (
                    <div className="mb-5">
                      <p className="sec-label mb-2" style={{ fontSize:".5rem" }}>SKILLS ACQUIRED</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((sk, si) => (
                          <motion.span key={si}
                            initial={{ opacity:0,scale:.85 }} animate={{ opacity:1,scale:1 }}
                            transition={{ delay: i * 0.08 + si * 0.04 }}
                            className="skill-chip"
                          >
                            {sk}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <Link href={cert.credentialUrl} target="_blank">
                    <button className="btn-view">VIEW CREDENTIAL <ExternalLink size={11} /></button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}