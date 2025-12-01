"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Code, Database, Cloud } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    hover: {
      boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)",
      scale: 1.003,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen pt-14 pb-10 bg-background dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 mb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-xl font-medium text-primary dark:text-gray-300 mb-4 tracking-wider"
            >
              WELCOME
            </motion.h2>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground dark:text-white"
            >
              I'm Taqi eddine El mamouni
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="text-xl sm:text-2xl text-primary dark:text-gray-300 font-medium h-10">
                <TypeAnimation
                  sequence={[
                    'AI Engineer', 2000,

                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-semibold"
                />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground dark:text-gray-400 mb-10 leading-relaxed max-w-2xl"
            >
              I'm a computer science student exploring the world of modern technologies, continuously learning and building projects that solve real-world problems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="gap-2 px-8 py-6 text-lg rounded-full bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md transition-all duration-300">
                  <Link href="/projects">
                    View My Work <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline" size="lg" asChild className="gap-2 px-8 py-6 text-lg rounded-full border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 text-foreground dark:text-gray-300">
                  <Link href="/contact">
                    Contact Me
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-primary/10 dark:hover:bg-gray-800" asChild>
                  <Link href="https://github.com/TAQIEDDIN" target="_blank" aria-label="GitHub">
                    <Github className="h-6 w-6 text-foreground dark:text-gray-300" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-primary/10 dark:hover:bg-gray-800" asChild>
                  <Link href="https://www.linkedin.com/in/taqi-eddine-el-mamouni/" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6 text-foreground dark:text-gray-300" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-primary/10 dark:hover:bg-gray-800" asChild>
                  <Link href="mailto:taqieddineelmamouni@gmail.com" aria-label="Email">
                    <Mail className="h-6 w-6 text-foreground dark:text-gray-300" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 dark:from-gray-600/20 to-transparent -z-10 blur-xl" />
             <Image
                src="/images/Poort.png"
                alt="mmmmmmmmmmmmmmmmmmm"
                width={400}
                height={400}
                className="object-cover rounded-full border-[6px] border-background dark:border-black shadow-lg"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Areas of Learning */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-foreground dark:text-white">What I'm Exploring</h2>
            <p className="text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto text-lg">
              I'm currently diving into these areas, growing my knowledge through hands-on projects and continuous learning.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto"
          >
            <motion.div 
              variants={cardVariants} 
              whileHover="hover" 
              className="flex flex-col p-8 border border-border rounded-xl shadow-lg transition-all h-full w-full max-w-sm bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30"
            >
              <div className="p-3 bg-primary/10 dark:bg-gray-700/50 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Database className="h-7 w-7 text-primary dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">Machine Learning</h3>
              <p className="text-muted-foreground dark:text-gray-400">
                Learning to build systems that can analyze patterns and help make better decisions.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants} 
              whileHover="hover" 
              className="flex flex-col p-8 border border-border rounded-xl shadow-lg transition-all h-full w-full max-w-sm bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30"
            >
              <div className="p-3 bg-primary/10 dark:bg-gray-700/50 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Cloud className="h-7 w-7 text-primary dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">Cloud & DevOps</h3>
              <p className="text-muted-foreground dark:text-gray-400">
                Exploring how modern infrastructure and automation can streamline software delivery.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants} 
              whileHover="hover" 
              className="flex flex-col p-8 border border-border rounded-xl shadow-lg transition-all h-full w-full max-w-sm bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30"
            >
              <div className="p-3 bg-primary/10 dark:bg-gray-700/50 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-primary dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">Web Development</h3>
              <p className="text-muted-foreground dark:text-gray-400">
                Developing responsive and dynamic websites using modern frameworks and tools.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-24 p-12 border border-border rounded-xl shadow-lg bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30"
          whileHover={{ boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)", scale: 1.003 }}
        >
          <h2 className="text-3xl font-bold mb-4 tracking-tight text-foreground dark:text-white">Let’s Connect and Create</h2>
          <p className="text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto mb-8 text-lg">
            Interested in collaborating, mentoring, or just chatting tech? Reach out and let’s build something awesome together.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button asChild size="lg" className="px-10 py-7 text-lg rounded-full bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md transition-all duration-300">
              <Link href="/contact" className="gap-2">
                Get in Touch <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}