"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BadgeCheck } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python", level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          highlight: "Developed ML models, data preprocessing and visualization, and Flask-based web application deployment.",
        },
        {
          name: "Java", level: 60,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          highlight: "Engineered scalable backend solutions, REST APIs, and real-time Java RMI chat applications.",
        },
        {
          name: "SQL", level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          highlight: "Designed and optimized PostgreSQL databases for web apps ensuring performance, security, and scalability.",
        },
        {
          name: "C", level: 65,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
          highlight: "Built algorithms, data structures, and a Solitaire game in C with memory management and modular design.",
        },
      ],
    },
    {
      title: "Data Science & ML",
      skills: [
        {
          name: "TensorFlow", level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
          highlight: "Deep learning for computer vision (pothole detection) and NLP (sentiment analysis).",
        },
        {
          name: "Scikit-learn", level: 85,
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
          highlight: "ML models and recommendation systems using algorithms for data analysis and predictive modeling.",
        },
        {
          name: "Pandas", level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
          highlight: "Cleaned and processed large-scale datasets for analysis and ML pipelines.",
        },
        {
          name: "NumPy", level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
          highlight: "Optimized numerical computations in ML workflows.",
        },
        {
          name: "Jupyter", level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
          highlight: "Data exploration and visualization during ML research projects.",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "PostgreSQL", level: 88,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          highlight: "Designed relational databases for recommendation systems and chat applications.",
        },
        {
          name: "MongoDB", level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          highlight: "Handled NoSQL storage for flexible and scalable data access.",
        },
        {
          name: "MySQL", level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          highlight: "Managed structured data for web apps and backend systems.",
        },
      ],
    },
  ];

  const [filter, setFilter] = useState(skillCategories[0].title);
  const filtered = skillCategories.filter((c) => c.title === filter);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  /* level → label */
  const levelLabel = (v: number) =>
    v >= 90 ? "Expert" : v >= 75 ? "Advanced" : v >= 60 ? "Intermediate" : "Beginner";

  const levelColor = (v: number) =>
    v >= 90 ? "var(--c-cyan)" : v >= 75 ? "var(--c-sky)" : v >= 60 ? "var(--c-indigo)" : "var(--c-muted)";

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <style>{`
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
        .glow-line{height:1px;background:linear-gradient(90deg,transparent,var(--c-cyan),var(--c-indigo),transparent);opacity:.2;}

        /* Filter pills */
        .filter-pill{
          font-family:var(--font-head);font-size:.6rem;letter-spacing:.1em;font-weight:700;
          border:1px solid rgba(34,211,238,.2);color:var(--c-muted);
          border-radius:999px;padding:.45rem 1.1rem;background:transparent;
          transition:all .2s;cursor:pointer;white-space:nowrap;
        }
        .filter-pill:hover{border-color:rgba(34,211,238,.4);color:var(--c-cyan);background:rgba(34,211,238,.06);}
        .filter-pill.active{
          border-color:var(--c-cyan);color:#03060f;
          background:linear-gradient(135deg,var(--c-cyan),var(--c-sky),var(--c-indigo));
          box-shadow:0 4px 18px rgba(34,211,238,.28);
        }

        /* Skill card */
        .skill-card{
          background:linear-gradient(135deg,rgba(14,26,48,.85),rgba(7,13,26,.92));
          border:1px solid rgba(34,211,238,.1);border-radius:12px;
          padding:1.2rem 1.3rem;
          transition:all .3s;
        }
        .skill-card:hover{
          border-color:rgba(34,211,238,.3);
          box-shadow:0 0 28px rgba(34,211,238,.07),0 6px 24px rgba(0,0,0,.35);
          transform:translateY(-3px);
        }

        /* Progress bar track */
        .bar-track{
          height:4px;border-radius:999px;
          background:rgba(34,211,238,.08);
          overflow:hidden;
          position:relative;
        }
        .bar-fill{
          height:100%;border-radius:999px;
          background:linear-gradient(90deg,var(--c-indigo),var(--c-sky),var(--c-cyan));
          position:relative;
          transition:width 1s cubic-bezier(0.16,1,0.3,1);
        }
        /* shimmer */
        .bar-fill::after{
          content:'';position:absolute;top:0;left:-60%;width:60%;height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);
          animation:shimmer 2.5s infinite;
        }
        @keyframes shimmer{0%{left:-60%}100%{left:120%}}

        /* Sec heading */
        .sec-heading{
          font-family:var(--font-head);font-size:.72rem;letter-spacing:.15em;
          color:var(--c-white);display:flex;align-items:center;gap:.6rem;margin-bottom:1.5rem;
        }
        .sec-heading svg{color:var(--c-cyan);}
        .sec-heading::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,rgba(34,211,238,.25),transparent);}

        /* Level badge */
        .level-badge{
          font-family:var(--font-head);font-size:.5rem;letter-spacing:.1em;
          border-radius:999px;padding:.18rem .6rem;
        }

        /* Icon wrapper */
        .icon-wrap{
          width:42px;height:42px;border-radius:10px;flex-shrink:0;
          display:flex;align-items:center;justify-content:center;
          background:rgba(34,211,238,.05);border:1px solid rgba(34,211,238,.12);
          transition:all .3s;
        }
        .skill-card:hover .icon-wrap{
          background:rgba(34,211,238,.1);border-color:rgba(34,211,238,.28);
          box-shadow:0 0 14px rgba(34,211,238,.12);
        }
      `}</style>

      {/* BG orbs */}
      <div className="orb" style={{ width:500,height:500,background:"radial-gradient(circle,rgba(34,211,238,.05),transparent 70%)",top:-100,right:-100 }} />
      <div className="orb" style={{ width:400,height:400,background:"radial-gradient(circle,rgba(99,102,241,.05),transparent 70%)",bottom:200,left:-100 }} />

<div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8 pt-24 md:pt-28 pb-24">
        {/* ── Header ── */}
        <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:.6,ease:[0.16,1,0.3,1] }} className="mb-12">
          <p className="sec-label mb-3">// EXPERTISE</p>
          <h1 className="h-font mb-3" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)",color:"var(--c-white)",lineHeight:1.1 }}>
            Technical <span className="neon">Skills</span>
          </h1>
          <p className="b-font text-sm" style={{ color:"var(--c-muted)",fontWeight:300 }}>
            Tools and technologies I use to build production-grade AI systems.
          </p>
        </motion.div>

        {/* ── Filter pills ── */}
        <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:.15,duration:.5 }}
          className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button key={cat.title} className={`filter-pill ${filter===cat.title?"active":""}`} onClick={() => setFilter(cat.title)}>
              {cat.title.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* ── Skills grid ── */}
        <AnimatePresence mode="wait">
          {filtered.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity:0,y:20 }}
              animate={{ opacity:1,y:0 }}
              exit={{ opacity:0,y:-10 }}
              transition={{ duration:.45,ease:[0.16,1,0.3,1] }}
            >
              <div className="sec-heading">
                <BadgeCheck size={14} />
                {category.title.toUpperCase()}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeUp} custom={i}
                    initial="hidden" animate="visible"
                    className="skill-card"
                  >
                    <div className="flex gap-3 mb-3">
                      {/* Icon */}
                      <div className="icon-wrap">
                        <Image src={skill.icon} alt={skill.name} width={24} height={24} className="object-contain" />
                      </div>

                      {/* Name + level */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="b-font font-medium text-sm" style={{ color:"var(--c-white)" }}>{skill.name}</span>
                          <span
                            className="level-badge"
                            style={{
                              color: levelColor(skill.level),
                              border: `1px solid ${levelColor(skill.level)}40`,
                              background: `${levelColor(skill.level)}0d`,
                            }}
                          >
                            {levelLabel(skill.level)}
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="bar-track">
                          <motion.div
                            className="bar-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>

                        {/* Percentage */}
                        <div className="flex justify-end mt-1">
                          <span className="h-font" style={{ fontSize:".5rem",color:"var(--c-muted)",letterSpacing:".1em" }}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="glow-line mb-2" />

                    {/* Highlight */}
                    {skill.highlight && (
                      <p className="b-font text-xs leading-relaxed" style={{ color:"var(--c-muted)",fontWeight:300 }}>
                        {skill.highlight}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}