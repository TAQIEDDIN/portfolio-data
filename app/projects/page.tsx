"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, FolderGit2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type Technology = { name: string; icon: string };
type Project = {
  id: string; title: string; period: string; description: string;
  image: string; technologies: Technology[]; responsibilities: string[];
  demo: string; category: string[];
};

export default function Projects() {
  const projects: Project[] = [
    {
      id: "hss-autonomous-defense-system",
      title: "HSS Autonomous Drone Detection & Tracking System",
      period: "2026",
      description: "AI-powered real-time drone detection and tracking system using YOLO, ByteTrack, and embedded NVIDIA Jetson inference for autonomous defense and aerial threat monitoring.",
      image: "/images/hss.png",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "YOLO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "ByteTrack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "DeepSORT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Jetson", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
      responsibilities: [
        "Built a real-time UAV detection pipeline using YOLO models.",
        "Integrated ByteTrack and DeepSORT for stable drone trajectory tracking.",
        "Implemented reticle stabilization and target smoothing for precise tracking visualization.",
        "Optimized inference for embedded NVIDIA Jetson deployment.",
        "Worked on camera calibration, focal setup, and small-object aerial detection performance.",
        "Prepared the perception module for autonomous defense and surveillance workflows.",
      ],
      demo: "#", category: ["Machine Learning"],
    },
    {
      id: "ida-autonomous-mission-system",
      title: "Autonomous İDA Mission System (TEKNOFEST)",
      period: "2026",
      description: "Autonomous unmanned surface vehicle system integrating waypoint navigation, buoy detection, UAV-to-USV telemetry, and LiDAR-assisted mission execution.",
      image: "/images/ida.png",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "NVIDIA Jetson", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Pixhawk", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "LiDAR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "GPS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
      responsibilities: [
        "Designed the end-to-end mission flow for Parkur-1, Parkur-2, and Parkur-3 autonomous tasks.",
        "Implemented waypoint tracking and heading correction using GPS, IMU, and PID control.",
        "Developed buoy detection and target color matching pipeline using OpenCV.",
        "Integrated UAV-to-İDA telemetry communication for transferring target buoy color information.",
        "Implemented LiDAR-based final approach safety verification before physical engagement.",
        "Worked on Jetson-Pixhawk sensor fusion and telemetry integration.",
      ],
      demo: "#", category: ["Machine Learning"],
    },
    {
      id: "rf-signal-analysis-system",
      title: "RF Signal Analysis and Electronic Support System",
      period: "2026",
      description: "RF signal analysis workflow for electronic support applications using SDR-based data acquisition, signal preprocessing, and AI-assisted interpretation.",
      image: "/images/rf-system.png",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
        { name: "SDR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Signal Processing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
      responsibilities: [
        "Worked on SDR-based signal collection and preprocessing workflows for RF analysis.",
        "Converted raw IQ signal data into spectrogram-like representations.",
        "Applied FFT and signal processing techniques to extract frequency-domain features.",
        "Prepared structured datasets for AI-based classification and recognition tasks.",
        "Contributed to system design for electronic support and situational awareness applications.",
      ],
      demo: "#", category: ["Machine Learning"],
    },
    {
      id: "face-recognition-attendance-system",
      title: "Face Recognition Attendance Monitoring System",
      period: "March 2026",
      description: "Real-time face recognition attendance system for automatic employee check-in/out with live camera streams, user identification, and attendance logging.",
      image: "/images/face-attendance.png",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      ],
      responsibilities: [
        "Built a real-time face recognition pipeline for employee identification.",
        "Implemented automatic check-in and check-out logic with time-based event handling.",
        "Developed a Flask-based backend to stream camera feeds and manage attendance records.",
        "Stored recognized and unknown face events in structured local folders and database records.",
      ],
      demo: "#", category: ["Machine Learning", "Web Development"],
    },
    {
      id: "adas-real-time-system",
      title: "Real-Time ADAS System for Road Safety",
      period: "March 2026",
      description: "Advanced Driver Assistance System integrating lane detection, vehicle detection, and driver monitoring into a unified real-time perception pipeline.",
      image: "/images/adas.jpg",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "YOLO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      ],
      responsibilities: [
        "Built a real-time lane detection pipeline using perspective transform and polynomial fitting.",
        "Integrated YOLO-based vehicle detection for road obstacles.",
        "Implemented driver monitoring features for fatigue and attention analysis.",
        "Optimized inference and visualization for real-time performance.",
      ],
      demo: "#", category: ["Machine Learning"],
    },
    {
      id: "ai-pedagogical-assistant",
      title: "Health Support Chatbot",
      period: "May 2025",
      description: "AI chatbot for Turkish speakers to get health guidance, possible causes, and suggestions for common symptoms — reducing unnecessary hospital visits.",
      image: "/images/chat.jpeg",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Transformers", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
        { name: "LLaMA 3", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/Meta_Platforms_Inc._logo.svg" },
      ],
      responsibilities: [
        "Designed full data processing pipeline for a 15,000-pair Turkish healthcare Q&A dataset.",
        "Fine-tuned LLaMA-3.2-1B-Instruct for Turkish-language health responses.",
        "Developed Flask web app with real-time health question answering.",
        "Implemented caching and response storage to optimize performance.",
      ],
      demo: "#", category: ["Machine Learning"],
    },
    {
      id: "cicd-pipeline",
      title: "Sugar Beet Leaf Disease Detection (Deep Learning)",
      period: "January 2025",
      description: "CNN to classify sugar beet leaf images into Early Blight, Late Blight, and Healthy categories using TensorFlow with data augmentation.",
      image: "/images/dedp.jpeg",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      ],
      responsibilities: [
        "Collected and prepared image dataset with three disease classes.",
        "Applied data augmentation to enhance dataset diversity.",
        "Built and trained custom CNN architecture for disease classification.",
        "Visualized model performance with accuracy and loss graphs.",
      ],
      demo: "#", category: ["Machine Learning"],
    },
    {
      id: "kubernetes-deployment",
      title: "iste_chat_app — Real-Time Chat Application",
      period: "November 2024",
      description: "Real-time mobile chat application built with Flutter and Firebase, enabling seamless user communication with live message sync and secure authentication.",
      image: "/images/app.jpeg",
      technologies: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Firestore", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Firebase Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
      responsibilities: [
        "Designed and developed real-time chat app using Flutter and Dart.",
        "Integrated Firebase Authentication for secure user login.",
        "Implemented real-time messaging with Firestore for instant delivery.",
        "Tested on Android and iOS for cross-platform performance.",
      ],
      demo: "#", category: ["Web Development", "DevOps & Cloud"],
    },
    {
      id: "road-infrastructure",
      title: "Real-Time Ball Balancing Robot",
      period: "July 2025",
      description: "Ball balancing robot combining Computer Vision and Embedded Control to autonomously stabilize a ball using OpenCV and STM32 with PID algorithms.",
      image: "/images/road-infra.png",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "STM32", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stm32/stm32-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      ],
      responsibilities: [
        "Implemented computer vision module for real-time ball detection and tracking.",
        "Developed serial communication between vision system and STM32.",
        "Implemented PID control and inverse kinematics on STM32.",
        "Achieved 2nd place in the Nawat Alnahda Engineering Qualification Program.",
      ],
      demo: "#", category: ["Machine Learning"],
    },
    {
      id: "energy-management",
      title: "Invisibility Cloak (iste)",
      period: "August 2025",
      description: "Invisibility Cloak effect using Python and OpenCV with real-time color detection and background replacement to simulate visual invisibility.",
      image: "/images/SIME.png",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      ],
      responsibilities: [
        "Implemented real-time color detection and segmentation using OpenCV and NumPy.",
        "Applied HSV color space filtering under variable lighting conditions.",
        "Used morphological operations to clean up noise and smooth the segmented mask.",
        "Blended multiple frames for seamless background integration.",
      ],
      demo: "#", category: ["Machine Learning", "Web Development"],
    },
    {
      id: "chat-application",
      title: "News Summarizer App — AI-Powered Text Summarization",
      period: "April 2025",
      description: "AI-powered app that automatically condenses lengthy news articles into concise summaries using NLP and BERT-based language models.",
      image: "/images/qwe.png",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "BERT", icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/BERT_language_model_logo.svg" },
        { name: "Transformers", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      ],
      responsibilities: [
        "Developed automatic text summarization using extractive and abstractive methods.",
        "Utilized pre-trained BERT models for semantic understanding.",
        "Evaluated performance using ROUGE and BLEU metrics.",
        "Optimized pipeline for speed and readability.",
      ],
      demo: "#", category: ["Web Development"],
    },
    {
      id: "movie-recommendation",
      title: "Intelligent Posture Analysis System with AI",
      period: "July 2025 – Present",
      description: "AI-powered posture analysis detecting body misalignments using 3D image analysis with MediaPipe, TensorFlow Lite, and a smart medical chatbot.",
      image: "/images/pose.webp",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "TensorFlow Lite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "MediaPipe", icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Mediapipe_logo.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
      ],
      responsibilities: [
        "Integrated MediaPipe for 3D pose estimation from user images.",
        "Developed TensorFlow Lite model to analyze postural imbalances.",
        "Integrated chatbot with Hugging Face API for physiotherapy advice.",
        "Built React frontend with 3D body visualization using Three.js.",
      ],
      demo: "#", category: ["Machine Learning", "Web Development"],
    },
    {
      id: "twitter-sentiment",
      title: "DEPRON – AI-Powered Disaster Response System",
      period: "October 2025 – Present",
      description: "UAV-based disaster response platform using computer vision to detect human presence, assess crowd density, and guide humanitarian aid in real time.",
      image: "/images/dron.png",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      ],
      responsibilities: [
        "Developed AI modules for real-time human detection from aerial drone footage.",
        "Implemented Kalman Filter tracking for movement pattern monitoring.",
        "Designed spatial grid mapping for disaster area zone segmentation.",
        "Built automated alert system for high-density humanitarian aid zones.",
      ],
      demo: "#", category: ["Machine Learning"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState({}, "", `#${project.id}`);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    window.history.pushState({}, "", window.location.pathname);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const project = projects.find((p) => p.id === hash);
        if (project) { setSelectedProject(project); window.scrollTo({ top: 0, behavior: "smooth" }); }
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category.includes(filter));

  const categories = ["All", "Machine Learning", "Web Development", "DevOps & Cloud"];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] } }),
  };

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
          transition:all .2s;cursor:pointer;
        }
        .filter-pill:hover{border-color:rgba(34,211,238,.4);color:var(--c-cyan);background:rgba(34,211,238,.06);}
        .filter-pill.active{
          border-color:var(--c-cyan);color:#03060f;
          background:linear-gradient(135deg,var(--c-cyan),var(--c-sky),var(--c-indigo));
          box-shadow:0 4px 18px rgba(34,211,238,.3);
        }

        /* Project card */
        .proj-card{
          background:linear-gradient(135deg,rgba(14,26,48,.85),rgba(7,13,26,.92));
          border:1px solid rgba(34,211,238,.1);border-radius:14px;overflow:hidden;
          transition:all .3s;cursor:pointer;
        }
        .proj-card:hover{
          border-color:rgba(34,211,238,.32);
          box-shadow:0 0 35px rgba(34,211,238,.08),0 8px 32px rgba(0,0,0,.4);
          transform:translateY(-5px);
        }
        .proj-card:hover .proj-img{ transform:scale(1.05); }
        .proj-img{ transition:transform .5s ease; }

        /* Tech tag */
        .tech-tag{
          font-family:var(--font-head);font-size:.52rem;letter-spacing:.08em;
          border:1px solid rgba(34,211,238,.18);background:rgba(34,211,238,.05);
          color:var(--c-cyan);border-radius:999px;padding:.2rem .6rem;
        }

        /* Year badge */
        .year-badge{
          font-family:var(--font-head);font-size:.52rem;letter-spacing:.12em;
          border:1px solid rgba(99,102,241,.3);background:rgba(99,102,241,.07);
          color:var(--c-indigo);border-radius:999px;padding:.2rem .7rem;
        }

        /* Sec heading */
        .sec-heading{
          font-family:var(--font-head);font-size:.72rem;letter-spacing:.15em;
          color:var(--c-white);display:flex;align-items:center;gap:.6rem;
        }
        .sec-heading svg{color:var(--c-cyan);}
        .sec-heading::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,rgba(34,211,238,.25),transparent);}

        /* Modal */
        .modal-glass{
          background:linear-gradient(135deg,rgba(7,14,28,.97),rgba(3,6,15,.98));
          border:1px solid rgba(34,211,238,.18);border-radius:16px;
          backdrop-filter:blur(20px);
        }
        .modal-tech{
          font-family:var(--font-head);font-size:.5rem;letter-spacing:.08em;
          border:1px solid rgba(34,211,238,.18);background:rgba(34,211,238,.05);
          color:var(--c-cyan);border-radius:999px;padding:.25rem .7rem;
          display:inline-flex;align-items:center;gap:.35rem;
        }
        .btn-ghost{
          font-family:var(--font-head);font-size:.65rem;letter-spacing:.12em;font-weight:700;
          border:1px solid rgba(34,211,238,.28);color:var(--c-cyan);
          border-radius:3px;background:transparent;padding:.55rem 1.4rem;
          transition:all .2s;display:inline-flex;align-items:center;gap:.4rem;
        }
        .btn-ghost:hover{background:rgba(34,211,238,.07);border-color:var(--c-cyan);transform:translateY(-2px);}

        /* Scrollbar inside modal */
        .modal-scroll::-webkit-scrollbar{width:4px;}
        .modal-scroll::-webkit-scrollbar-track{background:transparent;}
        .modal-scroll::-webkit-scrollbar-thumb{background:rgba(34,211,238,.2);border-radius:4px;}
        .modal-scroll::-webkit-scrollbar-thumb:hover{background:rgba(34,211,238,.4);}
      `}</style>

      {/* BG orbs */}
      <div className="orb" style={{ width:500, height:500, background:"radial-gradient(circle,rgba(34,211,238,.05),transparent 70%)", top:-100, right:-100 }} />
      <div className="orb" style={{ width:400, height:400, background:"radial-gradient(circle,rgba(99,102,241,.05),transparent 70%)", bottom:200, left:-100 }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8 pt-10 pb-24">

        {/* ── Header ── */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.6, ease:[0.16,1,0.3,1] }} className="mb-12">
          <p className="sec-label mb-3">// PORTFOLIO</p>
          <h1 className="h-font mb-3" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", color:"var(--c-white)", lineHeight:1.1 }}>
            Featured <span className="neon">Projects</span>
          </h1>
          <p className="b-font text-sm" style={{ color:"var(--c-muted)", fontWeight:300 }}>
            {projects.length} projects across AI, Computer Vision, and Robotics.
          </p>
        </motion.div>

        {/* ── Filter pills ── */}
        <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:.15, duration:.5 }}
          className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} className={`filter-pill ${filter === cat ? "active" : ""}`} onClick={() => setFilter(cat)}>
              {cat.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp} custom={i}
              initial="hidden" animate="visible"
              className="proj-card"
              onClick={() => openProjectDetails(project)}
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden" style={{ background:"rgba(7,13,26,.8)" }}>
                <Image src={project.image} alt={project.title} fill className="proj-img object-cover" />
                {/* overlay */}
                <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(3,6,15,.7) 0%,transparent 60%)" }} />
                {/* year badge top-right */}
                <span className="year-badge absolute top-3 right-3">{project.period}</span>
                {/* category top-left */}
                <span className="tech-tag absolute top-3 left-3">{project.category[0].toUpperCase()}</span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="b-font font-medium mb-2 leading-snug" style={{ color:"var(--c-white)", fontSize:".92rem" }}>
                  {project.title}
                </h3>
                <p className="b-font text-xs leading-relaxed mb-4 line-clamp-3" style={{ color:"var(--c-muted)", fontWeight:300 }}>
                  {project.description}
                </p>

                {/* Tech row */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, ti) => (
                    <span key={ti} className="tech-tag">{tech.name}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag">+{project.technologies.length - 4}</span>
                  )}
                </div>

                {/* Bottom accent */}
                <div className="mt-4 h-px rounded-full" style={{ background:"linear-gradient(90deg,rgba(34,211,238,.25),transparent)" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            transition={{ duration:.2 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{ background:"rgba(0,0,0,.75)", backdropFilter:"blur(10px)" }}
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ opacity:0, scale:.95, y:20 }}
              animate={{ opacity:1, scale:1, y:0 }}
              exit={{ opacity:0, scale:.95, y:20 }}
              transition={{ duration:.25, ease:[0.16,1,0.3,1] }}
              className="modal-glass modal-scroll max-w-2xl w-full p-6 relative overflow-y-auto"
              style={{ maxHeight:"88vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button onClick={closeProjectDetails}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                style={{ border:"1px solid rgba(34,211,238,.25)", color:"var(--c-muted)", background:"rgba(34,211,238,.04)" }}
                onMouseEnter={e => (e.currentTarget.style.color="var(--c-cyan)")}
                onMouseLeave={e => (e.currentTarget.style.color="var(--c-muted)")}>
                <X size={14} />
              </button>

              {/* Image */}
              <div className="relative w-full h-52 rounded-lg overflow-hidden mb-5" style={{ border:"1px solid rgba(34,211,238,.12)" }}>
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(3,6,15,.5),transparent)" }} />
              </div>

              {/* Title + period */}
              <div className="flex items-start justify-between gap-3 mb-1">
                <h2 className="b-font font-medium" style={{ color:"var(--c-white)", fontSize:"1.05rem", lineHeight:1.35 }}>
                  {selectedProject.title}
                </h2>
                <span className="year-badge flex-shrink-0 mt-1">{selectedProject.period}</span>
              </div>

              <div className="glow-line my-4" />

              {/* Description */}
              <p className="b-font text-sm leading-relaxed mb-5" style={{ color:"var(--c-muted)", fontWeight:300 }}>
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <p className="sec-label mb-3">TECHNOLOGIES</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="modal-tech">
                    <Image src={tech.icon} alt={tech.name} width={12} height={12} className="w-3 h-3 object-contain" />
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Responsibilities */}
              <p className="sec-label mb-3">KEY RESPONSIBILITIES</p>
              <ul className="space-y-2 mb-6">
                {selectedProject.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-2.5 b-font text-sm" style={{ color:"var(--c-muted)", fontWeight:300 }}>
                    <span style={{ color:"var(--c-cyan)", flexShrink:0, marginTop:"2px" }}>›</span>
                    {r}
                  </li>
                ))}
              </ul>

              {/* Demo button */}
              {selectedProject.demo !== "#" && (
                <Link href={selectedProject.demo} target="_blank">
                  <button className="btn-ghost"><ExternalLink size={12} /> LIVE DEMO</button>
                </Link>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}