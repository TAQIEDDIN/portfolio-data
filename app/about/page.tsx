"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Calendar, GraduationCap, Cpu, ArrowRight, Code, FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type EducationItem = {
  school: string;
  degree: string;
  period: string;
  description: string;
  image: string;
};

type SkillItem = {
  name: string;
  icon: string;
};

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  period: string;
};

type ExpandedSections = {
  education: number[];
};

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
      degree: "Science Physique ",
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
      id: "energy-management",
      title: "Energy Consumption Management Platform (SIME)",
      description: "Full-stack platform for monitoring factory energy consumption with real-time analytics using Spring Boot and Angular.",
      period: "August 2024 – October 2024",
    },
    {
      id: "road-infrastructure",
      title: "AI-Powered Road Infrastructure Management",
      description: "Computer vision system for pothole detection using YOLOv8 and Vision Transformers with real-time mapping.",
      period: "March 2025 – June 2025",
    }
    // {
    //   id: "chat-application",
    //   title: "RipAns – RMI Chat Application",
    //   description: "Real-time chat application built with Java RMI for secure communication between multiple clients.",
    //   period: "February 2025 – March 2025",
    // }
  ];

  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    education: []
  });

  const toggleExpanded = (section: keyof ExpandedSections, index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: prev[section].includes(index)
        ? prev[section].filter(item => item !== index)
        : [...prev[section], index]
    }));
  };

  const isExpanded = (section: keyof ExpandedSections, index: number) => 
    expandedSections[section].includes(index);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-10 pb-6 bg-background dark:bg-black"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Profile Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12"
          >
            <div className="shrink-0">
              <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-background dark:border-gray-900 shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-white">About Me</h1>
            <p className="text-lg text-muted-foreground dark:text-gray-400 leading-relaxed">
              I am a AI Engineer with hands-on experience in developing intelligent systems using Deep Learning, Natural Language Processing (NLP), and ComputerVision. Specialized in building end-to-end AI solutions for real-time applications in physiotherapy, robotics, and data analysis. Proficient in modelengineering, fine-tuning LLMs, and deploying AI models via scalable APIs. Passionate about applied research, innovation, and transformingadvanced AI concepts into real-world technologies.
            </p>

            </div>
          </motion.div>
        </motion.div>

        {/* CV Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-2xl font-semibold mb-6 flex items-center border-b pb-2 text-foreground dark:text-white"
          >
            <FileText className="mr-2 text-primary dark:text-gray-400" />
            Curriculum Vitae
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 border rounded-xl bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 shadow-lg"
            whileHover={{ boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)", scale: 1.003 }}
          >
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">My Resume</h3>
              <p className="text-muted-foreground dark:text-gray-400">You can view or download my CV to learn more about my professional background and skills</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 transition-all duration-300 flex items-center gap-2 text-foreground dark:text-gray-300"
                >
                  <Link href="/CV">
                    <Eye className="h-4 w-4" /> View CV
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button 
                  asChild 
                  variant="default" 
                  size="lg" 
                  className="rounded-full px-6 py-2 font-semibold bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md transition-all duration-300 flex items-center gap-2"
                >
                  <a href="/docs/cv-son-eng.pdf" download="cv-son-eng.pdf">
                    <Download className="h-4 w-4" /> Download CV
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-2xl font-semibold mb-6 flex items-center border-b pb-2 text-foreground dark:text-white"
          >
            <GraduationCap className="mr-2 text-primary dark:text-gray-400" />
            Education
          </motion.h2>
          
          <motion.div variants={containerVariants} className="space-y-4">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="border rounded-xl overflow-hidden bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 shadow-lg"
                whileHover={{ boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)", scale: 1.003 }}
              >
                <button
                  onClick={() => toggleExpanded('education', index)}
                  className="w-full p-5 flex items-center justify-between hover:bg-primary/10 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="flex items-center text-left">
                    <div className="mr-4">
                      <div className="p-2 bg-primary/5 dark:bg-gray-800 rounded-full">
                        <GraduationCap className="h-5 w-5 text-primary dark:text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground dark:text-white">{edu.degree}</h3>
                      <p className="text-muted-foreground dark:text-gray-400">{edu.school}</p>
                      <div className="flex items-center mt-1 text-sm text-muted-foreground dark:text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground dark:text-gray-400 transition-transform duration-300 ${
                      isExpanded('education', index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded('education', index) ? 'auto' : 0,
                    opacity: isExpanded('education', index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0">
                    <div className="mt-4 relative h-48 rounded-md overflow-hidden shadow-sm">
                      <Image
                        src={edu.image}
                        alt={edu.school}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-muted-foreground dark:text-gray-400">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Key Technologies Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-2xl font-semibold mb-6 flex items-center border-b pb-2 text-foreground dark:text-white"
          >
            <Cpu className="mr-2 text-primary dark:text-gray-400" />
            Key Technologies
          </motion.h2>
          
          <motion.div 
            variants={containerVariants} 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6"
          >
            {featuredSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                variants={itemVariants}
                className="flex items-center gap-3 p-3 border rounded-xl bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 shadow-lg hover:bg-primary/10 dark:hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)", scale: 1.003 }}
              >
                <div className="p-1.5 bg-background dark:bg-black rounded-md">
                  <Image 
                    src={skill.icon} 
                    width={22} 
                    height={22} 
                    alt={skill.name}
                  />
                </div>
                <span className="font-medium text-foreground dark:text-white">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 transition-all duration-300 flex items-center gap-2 text-foreground dark:text-gray-300"
            >
              <Link href="/skills">
                View all skills <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-2xl font-semibold mb-6 flex items-center border-b pb-2 text-foreground dark:text-white"
          >
            <Code className="mr-2 text-primary dark:text-gray-400" />
            Featured Work
          </motion.h2>
          
          <motion.div 
            variants={containerVariants} 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border rounded-xl p-6 bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
                whileHover={{ boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)", scale: 1.003 }}
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">{project.title}</h3>
                  <p className="text-muted-foreground dark:text-gray-400 mb-3">{project.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground dark:text-gray-400 mb-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.period}
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="mt-auto w-full rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 transition-all duration-300 flex items-center justify-center text-foreground dark:text-gray-300"
                  >
                    <Link 
                      href={`/projects#${project.id}`} 
                      scroll={false}
                    >
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button 
                asChild 
                variant="default"
                className="rounded-full px-6 py-2 font-semibold bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md transition-all duration-300 flex items-center"
              >
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}