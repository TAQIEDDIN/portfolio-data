"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FolderGit2 } from "lucide-react";

type Technology = {
  name: string;
  icon: string;
};

type Project = {
  id: string;
  title: string;
  period: string;
  description: string;
  image: string;
  technologies: Technology[];
  responsibilities: string[];
  demo: string;
  category: string[];
};

export default function Projects() {
  const projects: Project[] = [

    {
  id: "hss-autonomous-defense-system",
  title: "HSS Autonomous Drone Detection & Tracking System",
  period: "2026",
  description:
    "Developed an AI-powered autonomous defense perception system for HSS applications focused on real-time drone detection, tracking, and target engagement support. The system combines YOLO-based object detection, multi-object tracking, and real-time targeting visualization for aerial threat monitoring.",
  image: "/images/hss.png",
  technologies: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "YOLO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "ByteTrack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "DeepSORT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Jetson", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
  ],
  responsibilities: [
    "Built a real-time UAV detection pipeline using YOLO models.",
    "Integrated ByteTrack and DeepSORT for stable drone trajectory tracking.",
    "Implemented reticle stabilization and target smoothing for precise tracking visualization.",
    "Optimized inference for embedded NVIDIA Jetson deployment.",
    "Worked on camera calibration, focal setup, and small-object aerial detection performance.",
    "Prepared the perception module for autonomous defense and surveillance workflows."
  ],
  demo: "#",
  category: ["Machine Learning"]
},

    {
  id: "ida-autonomous-mission-system",
  title: "Autonomous İDA Mission System (TEKNOFEST)",
  period: "2026",
  description:
    "Developed the perception, navigation, and mission execution pipeline for an autonomous Unmanned Surface Vehicle (İDA) designed for TEKNOFEST mission tracks. The system integrates waypoint navigation, LiDAR-assisted obstacle safety, UAV-to-USV telemetry communication, target buoy color detection, and autonomous physical engagement.",
  image: "/images/ida.png",
  technologies: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "NVIDIA Jetson", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Pixhawk", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "LiDAR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "GPS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
  ],
  responsibilities: [
    "Designed the end-to-end mission flow for Parkur-1, Parkur-2, and Parkur-3 autonomous tasks.",
    "Implemented waypoint tracking and heading correction using GPS, IMU, and PID control.",
    "Developed buoy detection and target color matching pipeline using OpenCV.",
    "Integrated UAV-to-İDA telemetry communication for transferring target buoy color information.",
    "Implemented LiDAR-based final approach safety verification before physical engagement.",
    "Worked on Jetson-Pixhawk sensor fusion and telemetry integration.",
    "Prepared competition-ready algorithm flowcharts, communication architecture, and system reports."
  ],
  demo: "#",
  category: ["Machine Learning"]
},

{
  id: "rf-signal-analysis-system",
  title: "RF Signal Analysis and Electronic Support System",
  period: "2026",
  description:
    "Developed an RF signal analysis workflow for electronic support applications using SDR-based data acquisition, signal preprocessing, and AI-assisted interpretation. The system focuses on extracting useful information from radio frequency signals for detection, classification, and situational awareness.",
  image: "/images/rf-system.png",
  technologies: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
    { name: "SDR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Signal Processing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
  ],
  responsibilities: [
    "Worked on SDR-based signal collection and preprocessing workflows for RF analysis.",
    "Converted raw IQ signal data into spectrogram-like representations for interpretation and analysis.",
    "Applied FFT and signal processing techniques to extract relevant frequency-domain features.",
    "Prepared structured datasets for potential AI-based classification and recognition tasks.",
    "Contributed to system design for electronic support and situational awareness applications.",
    "Documented the end-to-end pipeline from signal acquisition to feature extraction."
  ],
  demo: "#",
  category: ["Machine Learning"]
},

    {
  id: "face-recognition-attendance-system",
  title: "Face Recognition Attendance Monitoring System",
  period: "March 2026",
  description:
    "Developed a real-time face recognition attendance system for automatic employee check-in and check-out. The system captures live camera streams, identifies registered users, logs attendance events, and stores unknown faces for review, enabling secure and efficient workplace monitoring.",
  image: "/images/face-attendance.png",
  technologies: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
  ],
  responsibilities: [
    "Built a real-time face recognition pipeline for employee identification and attendance tracking.",
    "Implemented automatic check-in and check-out logic with time-based event handling.",
    "Developed a Flask-based backend to stream camera feeds and manage attendance records.",
    "Stored recognized and unknown face events in structured local folders and database records.",
    "Integrated database support for employee management and attendance history.",
    "Designed the system for reliable local deployment in workplace environments."
  ],
  demo: "#",
  category: ["Machine Learning", "Web Development"]
} ,
    {
  id: "adas-real-time-system",
  title: "Real-Time ADAS System for Road Safety",
  period: "March 2026",
  description:
    "Developed a real-time Advanced Driver Assistance System (ADAS) integrating lane detection, vehicle detection, and driver monitoring into a unified perception pipeline. The system combines deep learning and computer vision techniques to improve road awareness, lane keeping, and driving safety in real time.",
  image: "/images/adas.jpg",
  technologies: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "YOLO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" }
  ],
  responsibilities: [
    "Built a real-time lane detection pipeline using classical computer vision techniques including perspective transform, thresholding, and polynomial fitting.",
    "Integrated YOLO-based vehicle detection for identifying surrounding vehicles and road obstacles.",
    "Implemented driver monitoring features to support fatigue and attention analysis.",
    "Designed a unified frame-by-frame perception pipeline for multi-task road scene analysis.",
    "Optimized inference and visualization for real-time performance.",
    "Generated annotated output videos for testing, evaluation, and demonstration purposes."
  ],
  demo: "#",
  category: ["Machine Learning"]
},
    {
      id: "ai-pedagogical-assistant",
      title: "Health Support Chatbot",
      period: " May 2025 ",
      description:
        "Users can ask natural questions like: “I have a headache” or “I feel nauseous”, and the bot replies with possible causes and suggestions. Designed for native Turkish speakers and optimized to improve health literacy and reduce unnecessary hospital visits. Accessible, real-time, and developed with a focus on public benefit.",
      image: "/images/chat.jpeg",
      technologies: [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
   { name: "Transformers", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "Datasets", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "LLaMA 3", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/Meta_Platforms_Inc._logo.svg" },
  { name: "Torch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "CSV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
],
      responsibilities: [
"Designed and implemented the full data processing pipeline for a 15,000-pair Turkish healthcare Q&A dataset.",
  "Fine-tuned the meta-llama/LLaMA-3.2-1B-Instruct model using PyTorch and Hugging Face Transformers for Turkish-language responses.",
  "Developed a Flask-based web application enabling real-time health question answering through an AI chatbot interface.",
  "Integrated caching and response storage mechanisms to optimize performance and avoid redundant model queries.",
  "Built a clean and responsive frontend using HTML, CSS, and JavaScript for user-friendly interaction.",
  "Implemented data cleaning, normalization, and tokenization workflows to improve model accuracy and reliability.",
  "Configured model training with AdamW optimizer, learning rate scheduling, and evaluation metrics tracking.",
  "Deployed the chatbot as a production-ready Flask web app delivering 24/7 Turkish-language health support."
      ],
      demo: "#",
      category: ["Machine Learning", ],
    },
    {
      id: "cicd-pipeline",
      title: "Sugar Beet Leaf Disease Detection (Deep Learning)",
      period: "January 2025",
      description:
        "Developed a Convolutional Neural Network (CNN) to classify sugar beet leaf images into Early Blight, Late Blight, and Healthy categories.Applied data augmentation and preprocessing techniques using TensorFlow to improve the model’s generalization and accuracy, enabling early detection of plant diseases to support smarter agriculture.",
      image: "/images/dedp.jpeg",
      technologies: [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  { name: "Deep Learning", icon: "https://upload.wikimedia.org/wikipedia/commons/2/28/Neural_network.svg" }
],
      responsibilities: [
  "Collected and prepared image dataset of sugar beet leaves with three disease classes: Early Blight, Late Blight, and Healthy.",
  "Performed data augmentation (rotation, zoom, flip) to enhance dataset diversity and reduce overfitting.",
  "Built and trained a custom CNN architecture using TensorFlow for disease classification.",
  "Split dataset into 80% training, 10% validation, and 10% testing for balanced model evaluation.",
  "Visualized model performance with accuracy and loss graphs across training epochs.",
  "Tested model predictions on unseen data to validate generalization and robustness.",
  "Documented results highlighting the role of AI in improving agricultural efficiency and early disease detection."
],
      demo: "#",
      category: ["Machine Learning"],
    },
    {
      id: "kubernetes-deployment",
      title: "iste_chat_app — Real-Time Chat Application",
      period: "November 2024",
      description:
        "Developed iste_chat_app, a real-time mobile chat application built using Flutter and Firebase, enabling seamless user communication with live message synchronization and secure authentication.The app provides a smooth and modern chat experience while showcasing full-stack mobile development skills with cloud integration.",
      image: "/images/app.jpeg",
      technologies:[
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Firestore", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Firebase Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "iOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" }
],
      responsibilities: [
  "Designed and developed a real-time chat application using Flutter and Dart.",
  "Integrated Firebase Authentication for secure user login and registration.",
  "Implemented real-time messaging functionality with Firestore for instant message delivery.",
  "Utilized Firebase Cloud Firestore for scalable, cloud-based data storage and retrieval.",
  "Built responsive and user-friendly UI components ensuring smooth navigation and chat interactions.",
  "Configured Firebase rules and validation for secure read/write operations.",
  "Tested and debugged the app on Android and iOS devices to ensure cross-platform performance.",
  "Focused on improving full-stack mobile development skills through hands-on cloud integration."
],
      demo: "#",
      category: ["web Development", "DevOps & Cloud"],
    },
    {
      id: "road-infrastructure",
      title: " Real-Time Ball Balancing Robot",
      period: "July 2025",
      description:
        "Developed a Real-Time Ball Balancing Robot that combines Computer Vision and Embedded Control to autonomously stabilize a ball on a moving platform.The system integrates OpenCV for real-time image processing and an STM32 microcontroller for precise motor control using PID algorithms and inverse kinematics.",
      image: "/images/road-infra.png",
      technologies: [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "STM32", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stm32/stm32-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
],
      responsibilities: [
 "Designed and implemented the computer vision module using OpenCV for real-time ball detection and tracking.",
  "Developed serial communication between the vision system and STM32 controller for synchronized data exchange.",
  "Calibrated the system to ensure accurate position feedback and stable response.",
  "Implemented PID control and inverse kinematics on STM32 for precise platform adjustment.",
  "Integrated mechanical, electronic, and software components into a fully functional autonomous system.",
  "Visualized tracking data for debugging and performance optimization.",
  "Collaborated within a multidisciplinary engineering team, achieving 2nd place in the Nawat Alnahda Engineering Qualification Program competition."
      ],
      demo: "#",
      category: ["Web Development"],
    },
    {
      id: "energy-management",
      title: "Invisibility Cloak (iste)",
      period: "August 2025",
      description: "Built an Invisibility Cloak using Python and OpenCV, applying real-time color detection and background replacement to create a visual “invisibility” effect.The system captures the background before the user enters the frame, detects a specific color (sky blue), and replaces that region with the stored background to simulate invisibility.",
      image: "/images/SIME.png",
      technologies: [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Image Processing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
],
      responsibilities: [
  "Implemented real-time color detection and segmentation using OpenCV and NumPy.",
  "Captured and stored static background frames for background replacement.",
  "Applied HSV color space filtering to detect the cloak color more accurately under variable lighting.",
  "Used morphological operations (cv2.morphologyEx) to clean up noise and smooth the segmented mask.",
  "Blended multiple image frames using cv2.addWeighted for seamless background integration.",
  "Resolved camera exposure and brightness adjustment issues for consistent color detection.",
  "Experimented with kernel sizes and HSV thresholds to improve segmentation accuracy.",
  "Documented challenges, learnings, and best practices in Computer Vision as part of the Engineering Qualification Program at Nawat Alnahda."
],
      demo: "#",
      category: ["machine Learning", "Web Development"],
    },
    {
      id: "chat-application",
      title: "News Summarizer App — AI-Powered Text Summarization Tool",
      period: "April 2025",
      description: "Developed an AI-powered News Summarizer App that automatically condenses lengthy news articles into concise, easy-to-read summaries within seconds.Built using Python and advanced Natural Language Processing (NLP) techniques, the system extracts key insights and core ideas to help users stay informed efficiently without information overload.",
      image: "/images/qwe.png",
      technologies:[
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Natural Language Processing (NLP)", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Wordcloud_of_NLP.svg" },
  { name: "BERT", icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/BERT_language_model_logo.svg" },
  { name: "Transformers", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" }
],
      responsibilities: [
  "Developed an automatic text summarization tool using Python and NLP techniques.",
  "Implemented extractive and abstractive summarization methods to generate concise news summaries.",
  "Utilized pre-trained BERT-based language models for semantic understanding and contextual summarization.",
  "Processed and cleaned raw text data for accurate tokenization, sentence segmentation, and keyword extraction.",
  "Designed a simple and intuitive user interface for entering or uploading articles for instant summarization.",
  "Evaluated model performance using ROUGE and BLEU metrics to ensure summary quality and coherence.",
  "Optimized summarization pipeline for speed and readability to improve user experience."
],
      demo: "#",
      category: ["Web Development"],
    },
    {
      id: "movie-recommendation",
      title: "Intelligent Posture Analysis System with AI",
      period: "July 2025 – Present",
      description: "Developed an AI-powered posture analysis system that detects and corrects body misalignments (shoulders, hips, knees) using 3D image analysis.The platform leverages MediaPipe, TensorFlow Lite, and a smart medical chatbot to provide personalized physiotherapy recommendations, automated health reports, and real-time body visualization.",
      image: "/images/pose.webp",
      technologies: [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "TensorFlow Lite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "MediaPipe", icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Mediapipe_logo.svg" },
  { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
      ],
      responsibilities: [
  "Designed and implemented a Flask REST API for managing users, analyses, and medical reports.",
  "Integrated MediaPipe for 3D pose estimation and extraction of 33 body landmarks from user images.",
  "Developed a TensorFlow Lite model to analyze postural imbalances and classify severity levels (mild, moderate, severe).",
  "Integrated an intelligent chatbot combining Hugging Face API with a local rule-based system to provide physiotherapy advice and health tips.",
  "Designed and managed a MySQL database to store user history, medical comments, and analysis results.",
  "Built a responsive React-based frontend featuring 3D body visualization using Three.js.",
  "Implemented secure authentication, downloadable PDF medical reports, and cloud image storage.",
  "Optimized image processing and AI inference pipelines for fast and accurate posture analysis."
],
      demo: "#",
      category: ["Machine Learning", "Web Development"],
    },
    {
      id: "twitter-sentiment",
      title: "DEPRON – AI-Powered Disaster Response and Aerial Analysis System",
      period: "October 2025 – present",
      description: "Developed under ROSAT, the DEPRON Project focuses on building an AI-driven disaster response platform that uses Unmanned Aerial Vehicles (UAVs / Drones) to capture real-time aerial footage of disaster zones (earthquakes, floods, etc.).The system processes high-resolution video streams using computer vision and tracking algorithms to detect human presence, assess crowd density, and guide humanitarian aid efforts in real time.",
      image: "/images/dron.png",
      technologies: [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Drone Data (RTSP/RTMP)", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Drone_icon.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }
],
      responsibilities: [
  "Developed AI modules for real-time human detection and counting from aerial drone footage using deep learning and computer vision techniques.",
  "Implemented object tracking algorithms (e.g., Kalman Filter) to monitor movement patterns and detect abnormal events in disaster areas.",
  "Processed live drone video feeds via RTSP/RTMP protocols for low-latency analysis.",
  "Designed spatial grid mapping logic to segment the disaster area into 1000m² zones for density aggregation.",
  "Built an automated alert system that flags high-density regions (≥100 people) as 'Humanitarian Aid Zones'.",
  "Collaborated on integration of AI inference results into a map-based dashboard for rescue coordination teams.",
  "Contributed to system design ensuring modular integration of aerial data, AI processing, and real-time visualization."
],
      demo: "#",
      category: ["Machine Learning"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState({}, '', `#${project.id}`);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    window.history.pushState({}, '', window.location.pathname);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const project = projects.find(p => p.id === hash);
        if (project) {
          setSelectedProject(project);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen pt-10 pb-6 bg-background dark:bg-black"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-white flex items-center">
            <FolderGit2 className="mr-2 text-primary dark:text-gray-400" />
            Featured Projects
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["All", "Machine Learning", "Web Development", "DevOps & Cloud"].map((cat, index) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === cat ? "default" : "outline"}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-6 py-2 font-semibold transition-all duration-300 ${
                    filter === cat
                      ? "bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md"
                      : "bg-background dark:bg-black border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 text-foreground dark:text-gray-300"
                  }`}
                >
                  {cat}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
                          <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              }}
              className="rounded-2xl overflow-hidden bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openProjectDetails(project)}
            >
              {/* Project Image */}
              <div className="w-full h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
                  {project.period}
                </p>

                <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 dark:bg-gray-800 text-primary dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={closeProjectDetails}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="bg-background dark:bg-gray-900 rounded-2xl max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto border border-gray-200/50 dark:border-gray-800/50 bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors duration-200"
                  onClick={closeProjectDetails}
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="mb-4">
                  <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.title} preview`}
                    width={300}
                    height={200}
                    className="w-full max-w-[300px] h-auto rounded-lg mx-auto"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-foreground dark:text-white">{selectedProject.title}</h2>
                <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">{selectedProject.period}</p>
                <p className="mb-4 text-foreground dark:text-gray-300">{selectedProject.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground dark:text-white">Technologies:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedProject.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs bg-primary/10 dark:bg-gray-800 text-primary dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={16}
                          height={16}
                          className="w-4 h-4 inline-block mr-1"
                        />
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-foreground dark:text-white mb-2">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-1 text-foreground dark:text-gray-300">
                  {selectedProject.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  {selectedProject.demo !== "#" && (
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 transition-all duration-300 flex items-center justify-center text-foreground dark:text-gray-300"
                      >
                        <Link href={selectedProject.demo} target="_blank">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          {selectedProject.title === "RipAns – RMI Chat Application" ? "App Website" : "Live Demo"}
                        </Link>
                      </Button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
