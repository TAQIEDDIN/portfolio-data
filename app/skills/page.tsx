"use client";
import { BadgeCheck } from "lucide-react";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          highlight:
            "Developed machine learning models, performed data preprocessing and visualization, and utilized Flask frameworks for web application deployment.",
        },
        {
          name: "Java",
          level: 60,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          highlight:
            "Engineered scalable backend solutions, including REST APIs and real-time Java RMI chat applications, while completing various academic projects.",
        },
        {
          name: "SQL",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          highlight: "Designed and optimized PostgreSQL databases for web apps, ensuring performance, security, and scalability."
        },
        {
          name: "C",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
          highlight: "Built algorithms, data structures, and a Solitaire game in C, applying memory management and modular design."
        },
      ],
    },
    {
      title: "Data Science & ML",
      skills: [
        {
          name: "TensorFlow",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
          highlight:
            "Designed and implemented deep learning solutions for computer vision (pothole detection) and NLP (sentiment analysis), while developing additional ML models for academic projects.",
        },
        {
          name: "Scikit-learn",
          level: 85,
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
          highlight:
            "Developed machine learning models and recommendation systems using scikit-learn, implementing algorithms for data analysis and predictive modeling.",
        },
        {
          name: "Pandas",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
          highlight:
            "Cleaned and processed large-scale datasets for analysis & ML",
        },
        {
          name: "NumPy",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
          highlight:
            "Optimized numerical computations in ML workflows",
        },
        {
          name: "Jupyter",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
          highlight:
            "Used for data exploration and visualization during ML projects",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          level: 88,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          highlight:
            "Designed relational databases for recommendation systems & chat apps",
        },
        {
          name: "MongoDB",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          highlight: "Handled NoSQL storage for flexible data access",
        },
        {
          name: "MySQL",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          highlight: "Managed data for web apps & backend systems",
        },
      ],
    },
  ];

  const [filter, setFilter] = useState<string>(skillCategories[0].title);

  const filteredCategories = skillCategories.filter(category => category.title === filter);

  return (
    <div className="min-h-screen pt-10 pb-6 bg-background dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-white flex items-center">
            <BadgeCheck className="mr-2 text-primary dark:text-gray-400" />
            Skills
         </h1>


        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={filter === category.title ? "default" : "outline"}
                onClick={() => setFilter(category.title)}
                className={`rounded-full px-6 py-2 font-semibold transition-all duration-300 ${
                  filter === category.title
                    ? "bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md"
                    : "bg-background dark:bg-black border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 text-foreground dark:text-gray-300"
                }`}
              >
                {category.title}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="space-y-12">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-foreground dark:text-white">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: skillIndex * 0.1 }}
                    whileHover={{ 
                      y: -3,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      transition: { duration: 0.1 } 
                    }}
                    className="flex gap-4 p-4 rounded-lg bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground dark:text-white">{skill.name}</span>
                        <span className="text-xs text-muted-foreground dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2 mb-1" />
                      {skill.highlight && (
                        <p className="text-xs text-muted-foreground dark:text-gray-400">
                          {skill.highlight}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}