"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Cloud, Brain, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type CertificationItem = {
  title: string;
  issuer: string;
  issued: string;
  skills: string[];
  credentialUrl: string;
  gradient: string;
  icon: any;
  logo?: string;
};

export default function Certifications() {
  const certifications: CertificationItem[] = [
    {
      title: "Machine Learning with Python",
      issuer: "freeCodeCamp",
      issued: "Jun 2025",
      skills: ["Deep Learning", "Convolutional Neural Networks (CNN)", "Natural Language Processing (NLP)", "Machine Learning",],
      credentialUrl: "https://www.freecodecamp.org/certification/fcca5306f64-8d08-4815-b26f-4d1ffe985772/machine-learning-with-python-v7",
      gradient: "from-orange-500/20 via-orange-400/10 to-blue-600/20",
      icon: Cloud,
      logo: "https://play-lh.googleusercontent.com/MoaYYQjGtmGLhG9HbjCDKyj44kwHj1HfbCI2Am70elRm35vJ-u4y4X5uEJjP97MAAsU=w600-h300-pc0xffffff-pd",
    },
    {
      title: "NLP ",
      issuer: "Bilgi Teknolojileri ve İletişim Kurumu - BTK - ICT",
      issued: "Feb 2025",
      skills: ["Natural Language Processing (NLP)", "Long Short-term Memory (LSTM)", "Decision Trees"],
      credentialUrl: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=EoPfbaVoqq",
      gradient: "from-red-600/20 via-red-500/10 to-gray-800/20",
      icon: Brain,
      logo: "data:image/png;base64,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",
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "DU KALİTET",
      issued: "oct 2025",
      skills: ["data science", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "data analysis"],
      credentialUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQGiVMCNsunnqQ/profile-treasury-image-shrink_160_160/B4DZpFbahSJIAk-/0/1762101415408?e=1762804800&v=beta&t=lGwRdXmVyMkWakTOsfntRjTlaphcYu08sigWuPDsOh4",
      gradient: "from-blue-600/20 via-blue-500/10 to-indigo-600/20",
      icon: MessageSquare,
    },
    {
      title: "AI Agents Fundamentals",
      issuer: "Hugging Face",
      issued: "Aug 2025",
      skills: ["LLM", "Fine-tuning"],
      credentialUrl: "https://huggingface.co/agents-course",
      gradient: "from-red-600/20 via-red-500/10 to-gray-800/20",
      icon: Brain,
    },
  ];

  return (
    <div className="min-h-screen pt-10 pb-6 bg-background dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-white flex items-center">
            <Award className="mr-2 text-primary dark:text-gray-400" />
            Certifications
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: { duration: 0.2 },
                }}
                className={`rounded-xl p-6 bg-gradient-to-br ${cert.gradient} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group`}
              >
                {/* Background decorative icon */}
                <div className="absolute -right-8 -top-8 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300">
                  <IconComponent size={120} />
                </div>

                {/* Logo badge in top-right corner */}
                {cert.logo && (
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                    <Image
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                      unoptimized
                    />
                  </div>
                )}

                <div className="flex-grow relative z-10">
                  {/* Icon badge */}
                  <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-gray-800">
                    <IconComponent className="w-6 h-6 text-primary dark:text-gray-300" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-gray-400 mb-2 font-medium">
                    {cert.issuer}
                  </p>

                  {/* Date with icon */}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground dark:text-gray-400 mb-4">
                    <CheckCircle2 size={14} className="text-green-500" />
                    <span>Issued: {cert.issued}</span>
                  </div>

                  {cert.skills.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground dark:text-white mb-2">
                        Skills Acquired:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="text-xs bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-foreground dark:text-gray-300 px-3 py-1.5 rounded-full border border-primary/20 dark:border-gray-600 font-medium"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-auto w-full rounded-full px-6 py-2.5 font-semibold bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-primary/30 dark:border-gray-600 hover:bg-primary/20 dark:hover:bg-gray-800 hover:border-primary/50 dark:hover:border-gray-500 transition-all duration-300 flex items-center justify-center text-foreground dark:text-gray-300 shadow-sm"
                  >
                    <Link href={cert.credentialUrl} target="_blank">
                      View Credential <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
