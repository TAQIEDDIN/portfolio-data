"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Cpu, Radar, BrainCircuit } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ── Star field canvas ──────────────────────────────────────────── */
function StarField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf: number | undefined;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random(), y: Math.random(), z: Math.random(),
      size: Math.random() * 1.6 + 0.2, speed: Math.random() * 0.00015 + 0.00005,
    }));
    const shoots: Array<{ x: number; y: number; vx: number; vy: number; life: number }> = [];
    let shootTimer = 0;
    let t = 0;
    const draw = () => {
      if (!ctx) return;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      t += 0.008; shootTimer++;
      if (shootTimer > 120) {
        shoots.push({ x: Math.random(), y: Math.random() * 0.5, vx: 0.003 + Math.random() * 0.005, vy: 0.001 + Math.random() * 0.002, life: 1 });
        shootTimer = 0;
      }
      stars.forEach(s => {
        s.x += s.speed; if (s.x > 1) s.x = 0;
        const tw = 0.5 + 0.5 * Math.sin(t * 2 + s.z * 30);
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.size * (0.7 + 0.3 * tw), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${200 + s.z * 40},80%,90%,${0.3 + tw * 0.7 * s.z})`;
        ctx.fill();
      });
      for (let i = shoots.length - 1; i >= 0; i--) {
        const sh = shoots[i];
        const grd = ctx.createLinearGradient(sh.x * W, sh.y * H, (sh.x - sh.vx * 12) * W, (sh.y - sh.vy * 12) * H);
        grd.addColorStop(0, `rgba(150,230,255,${sh.life * 0.9})`);
        grd.addColorStop(1, "rgba(150,230,255,0)");
        ctx.beginPath(); ctx.moveTo(sh.x * W, sh.y * H); ctx.lineTo((sh.x - sh.vx * 12) * W, (sh.y - sh.vy * 12) * H);
        ctx.strokeStyle = grd; ctx.lineWidth = 1.5; ctx.stroke();
        sh.x += sh.vx; sh.y += sh.vy; sh.life -= 0.025;
        if (sh.life <= 0) shoots.splice(i, 1);
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { if (raf !== undefined) cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />;
}

/* ── Orbit rings canvas ─────────────────────────────────────────── */
function OrbitRings() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf: number | undefined;
    const S = 420; canvas.width = S; canvas.height = S;
    const cx = S / 2, cy = S / 2;
    const rings = [
      { rx: 170, ry: 50, tilt: 0.35, speed: 0.008, color: "rgba(56,189,248,", dotR: 5 },
      { rx: 140, ry: 42, tilt: -0.5, speed: -0.012, color: "rgba(99,102,241,", dotR: 4 },
      { rx: 200, ry: 60, tilt: 0.15, speed: 0.005, color: "rgba(34,211,238,", dotR: 6 },
    ];
    let t = 0;
    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, S, S); t += 1;
      rings.forEach(r => {
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(r.tilt);
        ctx.beginPath(); ctx.ellipse(0, 0, r.rx, r.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `${r.color}0.22)`; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();
        const theta = (t * r.speed) % (Math.PI * 2);
        const dx = Math.cos(theta) * r.rx, dy = Math.sin(theta) * r.ry;
        const rx2 = dx * Math.cos(r.tilt) - dy * Math.sin(r.tilt);
        const ry2 = dx * Math.sin(r.tilt) + dy * Math.cos(r.tilt);
        const grad = ctx.createRadialGradient(cx + rx2, cy + ry2, 0, cx + rx2, cy + ry2, r.dotR * 4);
        grad.addColorStop(0, `${r.color}0.9)`); grad.addColorStop(1, `${r.color}0)`);
        ctx.beginPath(); ctx.arc(cx + rx2, cy + ry2, r.dotR * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad; ctx.fill();
        ctx.beginPath(); ctx.arc(cx + rx2, cy + ry2, r.dotR, 0, Math.PI * 2);
        ctx.fillStyle = `${r.color}1)`; ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { if (raf !== undefined) cancelAnimationFrame(raf); };
  }, []);
  return (
    <canvas ref={ref} className="absolute pointer-events-none"
      style={{ width: 420, height: 420, left: "50%", top: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }} />
  );
}

/* ── 3D Tilt card ───────────────────────────────────────────────── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const rotX = useMotionValue(0), rotY = useMotionValue(0);
  const sX = useSpring(rotX, { stiffness: 180, damping: 22 });
  const sY = useSpring(rotY, { stiffness: 180, damping: 22 });
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = (ref.current as HTMLElement).getBoundingClientRect();
    rotX.set(-((e.clientY - r.top) / r.height - 0.5) * 14);
    rotY.set(((e.clientX - r.left) / r.width - 0.5) * 14);
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

/* ── Typewriter ─────────────────────────────────────────────────── */
function Typewriter({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const full = texts[idx]; let to: NodeJS.Timeout | undefined;
    if (!deleting && displayed.length < full.length)
      to = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 55);
    else if (!deleting)
      to = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && displayed.length > 0)
      to = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    else { setDeleting(false); setIdx((idx + 1) % texts.length); }
    return () => clearTimeout(to);
  }, [displayed, deleting, idx, texts]);
  return (
    <span>
      <span style={{ color: "var(--c-cyan)" }}>{displayed}</span>
      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ color: "var(--c-cyan)" }}>|</motion.span>
    </span>
  );
}

/* ── Main ───────────────────────────────────────────────────────── */
export default function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t); }, []);

  const roles = ["AI Engineer", "Computer Vision Expert", "Autonomous Systems Builder", "LLM Developer"];

  const skills = [
    { icon: <Radar className="w-7 h-7" />, title: "Computer Vision & Perception", desc: "Real-time detection, tracking, pose estimation, and scene understanding for robotics, defense, and autonomous platforms.", accent: "var(--c-cyan)" },
    { icon: <Cpu className="w-7 h-7" />, title: "Autonomous AI Systems", desc: "End-to-end perception, decision, and control pipelines for UAVs, USVs, ADAS, and embedded robotic systems.", accent: "var(--c-indigo)" },
    { icon: <BrainCircuit className="w-7 h-7" />, title: "LLM & Intelligent Assistants", desc: "Domain-specific AI assistants and multimodal apps powered by LLMs, retrieval systems, and real-time reasoning.", accent: "var(--c-sky)" },
  ];

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
  const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--bg)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        :root {
          --bg: #03060f; --bg2: #070d1a;
          --c-cyan: #22d3ee; --c-sky: #38bdf8; --c-indigo: #818cf8;
          --c-white: #e8f0fe; --c-muted: #5e7a99;
          --font-head: 'Orbitron', sans-serif; --font-body: 'DM Sans', sans-serif;
        }
        * { box-sizing: border-box; }
        body { background: var(--bg); }
        .h-font { font-family: var(--font-head); }
        .b-font { font-family: var(--font-body); }
        .glow-line { height: 1px; background: linear-gradient(90deg, transparent, var(--c-cyan), var(--c-indigo), transparent); opacity: .3; }
        .neon { color: var(--c-cyan); text-shadow: 0 0 14px rgba(34,211,238,.55), 0 0 40px rgba(34,211,238,.2); }
        .orb { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
        .glass-card {
          background: linear-gradient(135deg, rgba(14,26,48,.85) 0%, rgba(7,13,26,.9) 100%);
          border: 1px solid rgba(34,211,238,.12); backdrop-filter: blur(12px);
          transition: border-color .3s, box-shadow .3s;
        }
        .glass-card:hover {
          border-color: rgba(34,211,238,.35);
          box-shadow: 0 0 35px rgba(34,211,238,.08), inset 0 0 20px rgba(34,211,238,.04);
        }
        .btn-cta {
          font-family: var(--font-head); font-size: .7rem; letter-spacing: .12em;
          background: linear-gradient(135deg, var(--c-cyan) 0%, var(--c-sky) 60%, var(--c-indigo) 100%);
          color: #03060f; font-weight: 800; border-radius: 3px;
          transition: transform .2s, box-shadow .2s, filter .2s;
        }
        .btn-cta:hover { transform: translateY(-3px); box-shadow: 0 10px 36px rgba(34,211,238,.4); filter: brightness(1.08); }
        .btn-ghost {
          font-family: var(--font-head); font-size: .7rem; letter-spacing: .12em;
          border: 1px solid rgba(34,211,238,.3); color: var(--c-cyan);
          border-radius: 3px; background: transparent; transition: all .2s;
        }
        .btn-ghost:hover { background: rgba(34,211,238,.07); border-color: var(--c-cyan); transform: translateY(-2px); }
        .soc-btn { border: 1px solid rgba(34,211,238,.18); color: var(--c-muted); border-radius: 4px; transition: all .2s; }
        .soc-btn:hover { border-color: var(--c-cyan); color: var(--c-cyan); background: rgba(34,211,238,.06); transform: translateY(-3px); box-shadow: 0 6px 20px rgba(34,211,238,.2); }
        .icon-ring { border-radius: 50%; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; transition: box-shadow .3s; }
        .glass-card:hover .icon-ring { box-shadow: 0 0 22px currentColor; }
        .badge { font-family: var(--font-head); font-size: .58rem; letter-spacing: .15em; border: 1px solid rgba(34,211,238,.25); background: rgba(34,211,238,.06); color: var(--c-cyan); border-radius: 99px; padding: .3rem .85rem; display: inline-flex; align-items: center; gap: .45rem; }
        .pulse-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--c-cyan); animation: pd 1.6s ease-in-out infinite; }
        @keyframes pd { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        .stat-num { font-family: var(--font-head); font-size: 1.6rem; font-weight: 800; background: linear-gradient(135deg, var(--c-cyan), var(--c-indigo)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .sec-label { font-family: var(--font-head); font-size: .58rem; letter-spacing: .25em; color: var(--c-cyan); }
      `}</style>

      <StarField />
      <div className="orb" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(34,211,238,.07), transparent 70%)", top: -120, left: -150 }} />
      <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(99,102,241,.07), transparent 70%)", top: 200, right: -100 }} />
      <div className="orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(56,189,248,.05), transparent 70%)", bottom: 0, left: "30%" }} />

      {/* ── HERO ── */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 w-full pt-10 pb-20">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-10">

            {/* Text */}
            <motion.div variants={container} initial="hidden" animate={ready ? "show" : "hidden"} className="flex-1 space-y-7">
              <motion.div variants={item}>
                <span className="badge"><span className="pulse-dot" />AVAILABLE FOR COLLABORATION</span>
              </motion.div>

              <motion.div variants={item}>
                <h1 className="h-font leading-[1.05] tracking-tight" style={{ color: "var(--c-white)" }}>
                  <span style={{ fontSize: "clamp(2.4rem,5vw,4rem)", display: "block" }}>Taqi eddine</span>
                  <span className="neon" style={{ fontSize: "clamp(2.8rem,6vw,5rem)", display: "block" }}>El Mamouni</span>
                </h1>
              </motion.div>

              <motion.div variants={item} className="b-font text-lg sm:text-xl" style={{ color: "var(--c-muted)", minHeight: "2rem" }}>
                <Typewriter texts={roles} />
              </motion.div>

              <motion.p variants={item} className="b-font text-sm sm:text-base leading-relaxed max-w-lg" style={{ color: "var(--c-muted)", fontWeight: 300 }}>
                AI Engineer specializing in Computer Vision, Autonomous Systems, and LLM applications.
                Building production-grade intelligence — from{" "}
                <span style={{ color: "var(--c-sky)" }}>YOLO detection</span> to{" "}
                <span style={{ color: "var(--c-indigo)" }}>multi-agent robotic pipelines</span>.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap gap-4 pt-1">
                <Link href="/projects">
                  <button className="btn-cta px-8 py-3.5 flex items-center gap-2">VIEW MY WORK <ArrowRight size={14} /></button>
                </Link>
                <Link href="/contact">
                  <button className="btn-ghost px-8 py-3.5">CONTACT ME</button>
                </Link>
              </motion.div>

              <motion.div variants={item} className="flex gap-3 pt-1">
                {[
                  { href: "https://github.com/TAQIEDDIN", icon: <Github size={17} />, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/taqi-eddine-el-mamouni/", icon: <Linkedin size={17} />, label: "LinkedIn" },
                  { href: "mailto:taqieddineelmamouni@gmail.com", icon: <Mail size={17} />, label: "Email" },
                ].map(({ href, icon, label }) => (
                  <Link key={label} href={href} target="_blank" aria-label={label}>
                    <button className="soc-btn w-11 h-11 flex items-center justify-center">{icon}</button>
                  </Link>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile + orbits */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex-shrink-0 flex items-center justify-center"
              style={{ width: 380, height: 380 }}
            >
              <OrbitRings />
              <div className="relative z-10" style={{ width: 210, height: 210 }}>
                {/* Conic spinning glow border */}
                <motion.div
                  className="absolute rounded-full"
                  style={{ inset: -10, background: "conic-gradient(from 0deg, var(--c-cyan), var(--c-indigo), var(--c-sky), var(--c-cyan))", padding: 2, borderRadius: "50%" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-[2px] rounded-full" style={{ background: "var(--bg)" }} />
                </motion.div>
                <div className="absolute inset-0 rounded-full overflow-hidden border-2 z-10" style={{ borderColor: "rgba(34,211,238,.3)" }}>
                  <Image src="/images/logo.png" alt="Taqi eddine El mamouni" fill className="object-cover" priority />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(34,211,238,.07), rgba(99,102,241,.07))", mixBlendMode: "screen" }} />
                </div>
                <motion.div
                  className="absolute z-20 h-font text-center"
                  style={{ bottom: -36, left: "50%", transform: "translateX(-50%)", fontSize: ".52rem", letterSpacing: ".2em", color: "var(--c-cyan)", opacity: .7, whiteSpace: "nowrap" }}
                  animate={{ opacity: [.5, .9, .5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  AI_ENGINEER · VERIFIED
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="relative z-10 glow-line" />
      <section className="relative z-10 py-8" style={{ background: "rgba(7,13,26,.6)", backdropFilter: "blur(10px)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-around gap-6 items-center">
            {[
              { val: "3+", label: "Years Experience" },
              { val: "20+", label: "AI Projects" },
              { val: "YOLO · SAM", label: "CV Models" },
              { val: "UAV · USV", label: "Robotics" },
              { val: "RAG · GPT", label: "LLM Stack" },
            ].map(({ val, label }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="text-center">
                <div className="stat-num">{val}</div>
                <div className="b-font mt-1" style={{ fontSize: ".6rem", letterSpacing: ".12em", color: "var(--c-muted)", textTransform: "uppercase" }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="relative z-10 glow-line" />

      {/* ── Skills ── */}
      <section className="relative z-10 py-28 max-w-7xl mx-auto px-6 lg:px-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }} className="mb-16">
          <p className="sec-label mb-3">// EXPERTISE</p>
          <h2 className="h-font" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "var(--c-white)", lineHeight: 1.15 }}>What I'm Building</h2>
          <p className="b-font mt-3 max-w-lg" style={{ color: "var(--c-muted)", fontWeight: 300 }}>Production-grade AI systems — from raw sensor data to real-world deployment.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map(({ icon, title, desc, accent }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}>
              <TiltCard className="glass-card rounded-xl p-8 h-full cursor-default select-none">
                <div className="icon-ring mb-6" style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}>{icon}</div>
                <h3 className="h-font mb-4" style={{ fontSize: ".82rem", color: "var(--c-white)", letterSpacing: ".04em", lineHeight: 1.4 }}>{title}</h3>
                <p className="b-font text-sm leading-relaxed" style={{ color: "var(--c-muted)", fontWeight: 300 }}>{desc}</p>
                <div className="mt-6 h-[1px] rounded-full" style={{ background: `linear-gradient(90deg, ${accent}50, transparent)` }} />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 pb-28 px-6 lg:px-14 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-2xl p-14 text-center relative overflow-hidden">
          {["tl","tr","bl","br"].map(p => (
            <div key={p} className="absolute w-10 h-10 pointer-events-none" style={{
              top: p[0]==="t" ? 0 : "auto", bottom: p[0]==="b" ? 0 : "auto",
              left: p[1]==="l" ? 0 : "auto", right: p[1]==="r" ? 0 : "auto",
              borderTop: p[0]==="t" ? "2px solid rgba(34,211,238,.4)" : "none",
              borderBottom: p[0]==="b" ? "2px solid rgba(34,211,238,.4)" : "none",
              borderLeft: p[1]==="l" ? "2px solid rgba(34,211,238,.4)" : "none",
              borderRight: p[1]==="r" ? "2px solid rgba(34,211,238,.4)" : "none",
            }} />
          ))}
          <div className="orb" style={{ width: 400, height: 300, background: "radial-gradient(circle, rgba(34,211,238,.05), transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
          <div className="relative z-10">
            <p className="sec-label mb-4">// LET'S CONNECT</p>
            <h2 className="h-font mb-4" style={{ fontSize: "clamp(1.6rem,3.5vw,2.5rem)", color: "var(--c-white)" }}>
              Let's Build Something<br /><span className="neon">Remarkable</span>
            </h2>
            <p className="b-font text-sm max-w-md mx-auto mb-10" style={{ color: "var(--c-muted)", fontWeight: 300 }}>
              Open to collaboration, consulting, and high-impact AI projects. Reach out and let's turn ideas into deployed intelligence.
            </p>
            <Link href="/contact">
              <button className="btn-cta px-12 py-4 inline-flex items-center gap-2">GET IN TOUCH <ArrowRight size={14} /></button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}