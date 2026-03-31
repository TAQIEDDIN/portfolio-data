"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useState, useCallback, useRef } from "react";
import { ChevronDown, Calendar, GraduationCap, Cpu, ArrowRight, Code, FileText, Download, Eye } from "lucide-react";
import Link from "next/link";

type EducationItem = { school: string; degree: string; period: string; description: string; image: string };
type SkillItem = { name: string; icon: string };
type ProjectItem = { id: string; title: string; description: string; period: string };
type ExpandedSections = { education: number[] };

/* ── 3D Tilt card ── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0), rotY = useMotionValue(0);
  const sX = useSpring(rotX, { stiffness: 160, damping: 20 });
  const sY = useSpring(rotY, { stiffness: 160, damping: 20 });
  const onMove = useCallback((e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    rotX.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
    rotY.set(((e.clientX - r.left) / r.width - 0.5) * 10);
  }, [rotX, rotY]);
  const onLeave = useCallback(() => { rotX.set(0); rotY.set(0); }, [rotX, rotY]);
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX: sX, rotateY: sY, transformStyle: "preserve-3d", perspective: 800 }}
      className={className}>
      {children}
    </motion.div>
  );
}

export default function About() {
  const education: EducationItem[] = [
    {
      school: "Iskenderun Technical University (ISTE), Turkey",
      degree: "Bachelor of Science in Computer Engineering",
      period: "Sept 2021 – 2026",
      description: "Specializing in Data Science and Cloud Computing with a focus on AI, Machine Learning, and building scalable cloud systems.",
      image: "/images/iste.jpg",
    },
    {
      school: "High School Diploma (Baccalauréat)",
      degree: "Science Physique",
      period: "Graduated June 2020",
      description: "Graduated with high in Physical Sciences, which provided a strong foundation for my engineering studies.",
      image: "/images/tigh.jpeg",
    },
  ];

  const featuredSkills: SkillItem[] = [
    { name: "Python", icon: "/icons/python.svg" },
    { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Linux", icon: "/icons/linux.svg" },
  ];

  const featuredProjects: ProjectItem[] = [
    {
      id: "hss-autonomous-defense-system",
      title: "HSS Autonomous Drone Detection & Tracking System",
      description: "AI-powered real-time drone detection and tracking system using YOLO, ByteTrack, and embedded NVIDIA Jetson inference for autonomous defense and aerial threat monitoring.",
      period: "2026",
    },
    {
      id: "ida-autonomous-mission-system",
      title: "Autonomous İDA Mission System (TEKNOFEST)",
      description: "Autonomous unmanned surface vehicle system integrating waypoint navigation, buoy detection, UAV-to-USV telemetry, and LiDAR-assisted mission execution.",
      period: "2026",
    },
  ];

  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({ education: [] });

  const toggleExpanded = (section: keyof ExpandedSections, index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: prev[section].includes(index)
        ? prev[section].filter(i => i !== index)
        : [...prev[section], index],
    }));
  };

  const isExpanded = (section: keyof ExpandedSections, index: number) =>
    expandedSections[section].includes(index);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        :root {
          --bg: #03060f; --bg2: #070d1a;
          --c-cyan: #22d3ee; --c-sky: #38bdf8; --c-indigo: #818cf8;
          --c-white: #e8f0fe; --c-muted: #5e7a99;
          --font-head: 'Orbitron', sans-serif; --font-body: 'DM Sans', sans-serif;
        }
        .h-font { font-family: var(--font-head); }
        .b-font { font-family: var(--font-body); }
        .sec-label { font-family: var(--font-head); font-size: .58rem; letter-spacing: .25em; color: var(--c-cyan); }
        .glow-line { height: 1px; background: linear-gradient(90deg, transparent, var(--c-cyan), var(--c-indigo), transparent); opacity: .25; }
        .neon { color: var(--c-cyan); text-shadow: 0 0 14px rgba(34,211,238,.5), 0 0 40px rgba(34,211,238,.18); }
        .orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }

        /* Glass card */
        .g-card {
          background: linear-gradient(135deg, rgba(14,26,48,.85), rgba(7,13,26,.92));
          border: 1px solid rgba(34,211,238,.12);
          backdrop-filter: blur(12px);
          transition: border-color .3s, box-shadow .3s;
        }
        .g-card:hover {
          border-color: rgba(34,211,238,.3);
          box-shadow: 0 0 30px rgba(34,211,238,.07), inset 0 0 16px rgba(34,211,238,.03);
        }

        /* Section heading */
        .sec-heading {
          font-family: var(--font-head);
          font-size: .75rem;
          letter-spacing: .15em;
          color: var(--c-white);
          display: flex; align-items: center; gap: .6rem;
        }
        .sec-heading svg { color: var(--c-cyan); }
        .sec-heading::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(34,211,238,.25), transparent);
        }

        /* Buttons */
        .btn-cta {
          font-family: var(--font-head); font-size: .65rem; letter-spacing: .12em; font-weight: 800;
          background: linear-gradient(135deg, var(--c-cyan), var(--c-sky), var(--c-indigo));
          color: #03060f; border-radius: 3px;
          padding: .55rem 1.4rem;
          transition: transform .2s, box-shadow .2s, filter .2s;
          display: inline-flex; align-items: center; gap: .4rem;
        }
        .btn-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(34,211,238,.35); filter: brightness(1.08); }

        .btn-ghost {
          font-family: var(--font-head); font-size: .65rem; letter-spacing: .12em; font-weight: 700;
          border: 1px solid rgba(34,211,238,.28); color: var(--c-cyan);
          border-radius: 3px; background: transparent;
          padding: .55rem 1.4rem;
          transition: all .2s;
          display: inline-flex; align-items: center; gap: .4rem;
        }
        .btn-ghost:hover { background: rgba(34,211,238,.07); border-color: var(--c-cyan); transform: translateY(-2px); }

        /* Skill chip */
        .skill-chip {
          background: rgba(34,211,238,.04);
          border: 1px solid rgba(34,211,238,.12);
          border-radius: 8px;
          transition: all .25s;
          display: flex; align-items: center; gap: .65rem;
          padding: .6rem .9rem;
        }
        .skill-chip:hover {
          border-color: rgba(34,211,238,.35);
          background: rgba(34,211,238,.08);
          transform: translateY(-2px);
          box-shadow: 0 4px 18px rgba(34,211,238,.1);
        }

        /* Edu accordion */
        .edu-item {
          background: linear-gradient(135deg, rgba(14,26,48,.8), rgba(7,13,26,.9));
          border: 1px solid rgba(34,211,238,.1);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color .3s;
        }
        .edu-item:hover { border-color: rgba(34,211,238,.25); }
        .edu-btn { width:100%; padding:1.1rem 1.3rem; display:flex; align-items:center; justify-content:space-between; background:transparent; cursor:pointer; transition: background .2s; }
        .edu-btn:hover { background: rgba(34,211,238,.04); }

        /* Project card */
        .proj-card {
          background: linear-gradient(135deg, rgba(14,26,48,.85), rgba(7,13,26,.92));
          border: 1px solid rgba(34,211,238,.1);
          border-radius: 12px;
          transition: all .3s;
          display: flex; flex-direction: column; height: 100%;
        }
        .proj-card:hover {
          border-color: rgba(34,211,238,.3);
          box-shadow: 0 0 30px rgba(34,211,238,.07);
          transform: translateY(-3px);
        }

        /* Corner brackets */
        .corner-tl, .corner-br { position:absolute; width:14px; height:14px; }
        .corner-tl { top:0; left:0; border-top: 2px solid rgba(34,211,238,.4); border-left: 2px solid rgba(34,211,238,.4); }
        .corner-br { bottom:0; right:0; border-bottom: 2px solid rgba(34,211,238,.4); border-right: 2px solid rgba(34,211,238,.4); }

        /* Badge */
        .tag {
          font-family: var(--font-head); font-size:.55rem; letter-spacing:.12em;
          border: 1px solid rgba(34,211,238,.2); background: rgba(34,211,238,.05);
          color: var(--c-cyan); border-radius:999px; padding:.2rem .65rem;
          display:inline-flex; align-items:center;
        }
      `}</style>

      {/* BG orbs */}
      <div className="orb" style={{ width:500, height:500, background:"radial-gradient(circle, rgba(34,211,238,.05), transparent 70%)", top:-100, right:-100 }} />
      <div className="orb" style={{ width:400, height:400, background:"radial-gradient(circle, rgba(99,102,241,.05), transparent 70%)", bottom:200, left:-100 }} />
<div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-5 lg:px-8 pt-24 md:pt-28 pb-24 overflow-x-hidden">

        {/* ── Profile hero ── */}
        <motion.div initial="hidden" animate="visible" variants={{ hidden:{}, visible:{ transition:{ staggerChildren:.1 } } }} className="mb-20">
          <motion.div variants={fadeUp} custom={0} className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              {/* Spinning conic border */}
              <motion.div className="absolute rounded-full"
                style={{ inset:-6, background:"conic-gradient(from 0deg, var(--c-cyan), var(--c-indigo), var(--c-sky), var(--c-cyan))", padding:2, borderRadius:"50%" }}
                animate={{ rotate:360 }} transition={{ duration:6, repeat:Infinity, ease:"linear" }}>
                <div className="absolute inset-[2px] rounded-full" style={{ background:"var(--bg)" }} />
              </motion.div>
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 z-10" style={{ borderColor:"rgba(34,211,238,.3)" }}>
                <Image src="/images/logo.png" alt="Profile" fill className="object-cover" priority />
              </div>
            </div>

            {/* Text */}
            <div>
              <motion.p variants={fadeUp} custom={1} className="sec-label mb-2">// ABOUT ME</motion.p>
              <motion.h1 variants={fadeUp} custom={2} className="h-font mb-4" style={{ fontSize:"clamp(1.8rem,4vw,2.6rem)", color:"var(--c-white)", lineHeight:1.1 }}>
                Taqi eddine <span className="neon">El Mamouni</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={3} className="b-font text-sm leading-relaxed" style={{ color:"var(--c-muted)", fontWeight:300, maxWidth:"560px" }}>
                AI Engineer with hands-on experience in Deep Learning, NLP, and Computer Vision.
                Specialized in building end-to-end AI solutions for real-time applications in robotics,
                defense, and data analysis. Passionate about applied research and transforming advanced
                AI concepts into real-world technologies.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CV Section ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={{ hidden:{}, visible:{ transition:{ staggerChildren:.08 } } }} className="mb-16">
          <motion.div variants={fadeUp} className="sec-heading mb-6">
            <FileText size={14} /> CURRICULUM VITAE
          </motion.div>

          <motion.div variants={fadeUp}>
            <TiltCard className="g-card rounded-xl p-7 relative overflow-hidden">
              <div className="corner-tl" /><div className="corner-br" />
              <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
                <div>
                  <p className="sec-label mb-2">RESUME</p>
                  <h3 className="h-font mb-2" style={{ fontSize:".85rem", color:"var(--c-white)" }}>My CV</h3>
                  <p className="b-font text-sm" style={{ color:"var(--c-muted)", fontWeight:300 }}>
                    View or download my full professional background and skill set.
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <Link href="/CV">
                    <button className="btn-ghost"><Eye size={13} /> VIEW CV</button>
                  </Link>
                  <a href="/docs/cv-son-eng.pdf" download="cv-son-eng.pdf">
                    <button className="btn-cta"><Download size={13} /> DOWNLOAD</button>
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>

        {/* ── Education ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={{ hidden:{}, visible:{ transition:{ staggerChildren:.08 } } }} className="mb-16">
          <motion.div variants={fadeUp} className="sec-heading mb-6">
            <GraduationCap size={14} /> EDUCATION
          </motion.div>

          <div className="space-y-3">
            {education.map((edu, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="edu-item">
                <button className="edu-btn" onClick={() => toggleExpanded("education", i)}>
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background:"rgba(34,211,238,.08)", border:"1px solid rgba(34,211,238,.2)" }}>
                      <GraduationCap size={16} style={{ color:"var(--c-cyan)" }} />
                    </div>
                    <div>
                      <p className="b-font font-medium" style={{ color:"var(--c-white)", fontSize:".9rem" }}>{edu.degree}</p>
                      <p className="b-font text-xs mt-0.5" style={{ color:"var(--c-muted)" }}>{edu.school}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Calendar size={10} style={{ color:"var(--c-muted)" }} />
                        <span className="b-font" style={{ fontSize:".7rem", color:"var(--c-muted)" }}>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown size={16} style={{ color:"var(--c-muted)", flexShrink:0, transition:"transform .3s", transform: isExpanded("education", i) ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded("education", i) ? "auto" : 0, opacity: isExpanded("education", i) ? 1 : 0 }}
                  transition={{ duration: .35, ease:[0.16,1,0.3,1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <div className="glow-line mb-4" />
                    <div className="relative h-44 rounded-lg overflow-hidden mb-4" style={{ border:"1px solid rgba(34,211,238,.12)" }}>
                      <Image src={edu.image} alt={edu.school} fill className="object-cover" />
                      <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(3,6,15,.6), transparent)" }} />
                    </div>
                    <p className="b-font text-sm leading-relaxed" style={{ color:"var(--c-muted)", fontWeight:300 }}>{edu.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Key Technologies ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={{ hidden:{}, visible:{ transition:{ staggerChildren:.06 } } }} className="mb-16">
          <motion.div variants={fadeUp} className="sec-heading mb-6">
            <Cpu size={14} /> KEY TECHNOLOGIES
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {featuredSkills.map((skill, i) => (
              <motion.div key={skill.name} variants={fadeUp} custom={i} className="skill-chip">
                <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background:"rgba(34,211,238,.06)", border:"1px solid rgba(34,211,238,.15)" }}>
                  <Image src={skill.icon} width={20} height={20} alt={skill.name} />
                </div>
                <span className="b-font font-medium text-sm" style={{ color:"var(--c-white)" }}>{skill.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp}>
            <Link href="/skills">
              <button className="btn-ghost">ALL SKILLS <ArrowRight size={12} /></button>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Featured Work ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={{ hidden:{}, visible:{ transition:{ staggerChildren:.09 } } }} className="mb-4">
          <motion.div variants={fadeUp} className="sec-heading mb-6">
            <Code size={14} /> FEATURED WORK
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {featuredProjects.map((project, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="proj-card p-6 relative overflow-hidden">
                <div className="corner-tl" /><div className="corner-br" />

                {/* Year tag */}
                <span className="tag mb-4 inline-block">{project.period}</span>

                <h3 className="b-font font-medium mb-3" style={{ color:"var(--c-white)", fontSize:".95rem", lineHeight:1.4 }}>
                  {project.title}
                </h3>
                <p className="b-font text-sm leading-relaxed mb-5 flex-1" style={{ color:"var(--c-muted)", fontWeight:300 }}>
                  {project.description}
                </p>

                {/* Bottom accent line */}
                <div className="h-px mb-4 rounded-full" style={{ background:"linear-gradient(90deg, rgba(34,211,238,.3), transparent)" }} />

                <Link href={`/projects#${project.id}`} scroll={false}>
                  <button className="btn-ghost w-full justify-center">VIEW PROJECT <ArrowRight size={12} /></button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center">
            <Link href="/projects">
              <button className="btn-cta">ALL PROJECTS <ArrowRight size={13} /></button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}