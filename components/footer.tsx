"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Footer() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.97 },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="border-t border-border py-4 bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* Left section - Name */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium text-foreground dark:text-white tracking-tight"
          >
            Taqi eddine El mamouni
          </motion.p>

          {/* Center section - Copyright (desktop) */}
          <motion.p
            variants={itemVariants}
            className="text-[0.7rem] text-muted-foreground dark:text-gray-400 hidden md:block"
          >
            © {new Date().getFullYear()} All rights reserved
          </motion.p>

          {/* Right section - Social links */}
          <motion.div
            variants={containerVariants}
            className="flex space-x-4"
          >
            <motion.div variants={itemVariants} whileHover={buttonVariants.hover} whileTap={buttonVariants.tap}>
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 hover:bg-primary/10 dark:hover:bg-gray-800"
                asChild
              >
                <a
                  href="https://github.com/TAQIEDDIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-4 w-4 text-foreground dark:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={buttonVariants.hover} whileTap={buttonVariants.tap}>
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 hover:bg-primary/10 dark:hover:bg-gray-800"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/taqi-eddine-el-mamouni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-4 w-4 text-foreground dark:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={buttonVariants.hover} whileTap={buttonVariants.tap}>
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 hover:bg-primary/10 dark:hover:bg-gray-800"
                asChild
              >
                <a
                  href="mailto:taqieddineelmamouni@gmail.com"
                  aria-label="Email"
                >
                  <svg
                    className="h-4 w-4 text-foreground dark:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile copyright */}
        <motion.p
          variants={itemVariants}
          className="text-[0.65rem] text-muted-foreground dark:text-gray-400 mt-2 text-center sm:hidden"
        >
          © {new Date().getFullYear()}
        </motion.p>
      </div>
    </motion.footer>
  );
}