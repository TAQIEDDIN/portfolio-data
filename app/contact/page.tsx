"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useRef } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address with a proper domain (e.g., .com, .org).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "9ddf9bd6-45e9-48f9-84b9-ef65b14ecd9d",
          name: name || email,
          email: email,
          subject: subject,
          message: message,
        })
      });

      const result = await response.json();
      console.log("Web3Forms response:", result);

      if (result.success) {
        setIsSubmitted(true);
        formRef.current?.reset();
      } else {
        console.error("Form submission error:", result);
        alert(result.message || "There was an issue with the form submission. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDiscard = () => {
    formRef.current?.reset();
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen pt-10 pb-6 bg-background dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-white">Get in Touch</h1>
          <p className="text-lg text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            whileHover={{ 
              y: -3,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              transition: { duration: 0.1 } 
            }}
            className="flex flex-col p-6 rounded-2xl bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-transparent dark:border-none transform-gpu hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
          >
            <h2 className="text-2xl font-semibold mb-6 text-foreground dark:text-white">Contact Information</h2>
            <div className="space-y-6 flex-grow">
              {[
                { 
                  icon: <Mail className="h-5 w-5" />, 
                  text: "taqieddineelmamouni@gmail.com",
                  href: "mailto:taqieddineelmamouni@gmail.com" 
                },
                { 
                  icon: <Phone className="h-5 w-5" />, 
                  text: "+905013270987" 
                },
                { 
                  icon: <Linkedin className="h-5 w-5" />, 
                  text: "linkedin.com/in/taqi-eddine-el-mamouni",
                  href: "https://www.linkedin.com/in/taqi-eddine-el-mamouni/" 
                },
                { 
                  icon: <Github className="h-5 w-5" />, 
                  text: "github.com/TAQIEDDIN",
                  href: "https://github.com/TAQIEDDIN" 
                },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-2 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors duration-200"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground dark:text-gray-400">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            whileHover={{ 
              y: -3,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              transition: { duration: 0.1 } 
            }}
            className="flex flex-col rounded-2xl bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-transparent dark:border-none transform-gpu hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)] overflow-hidden"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl text-center flex flex-col items-center justify-center h-full"
              >
                <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">Message Sent!</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400 mb-6">
                  Thank you for reaching out. I'll respond soon.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button 
                    onClick={() => setIsSubmitted(false)} 
                    variant="outline"
                    className="rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-700 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-600 text-foreground dark:text-gray-300 transition-all duration-200"
                  >
                    New Message
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="h-full flex flex-col"
              >
                <div className="bg-gray-100 dark:bg-gray-800 px-6 py-3 border-b border-gray-200/50 dark:border-gray-700/50 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-foreground dark:text-white">Send a Message</h2>
                </div>

                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex items-center border-b border-gray-200/50 dark:border-gray-700/50 py-2"
                  >
                    <span className="text-sm font-medium w-16 shrink-0 text-foreground dark:text-white">To:</span>
                    <Input
                      type="text"
                      value="taqieddineelmamouni@gmail.com"
                      className="flex-1 border-0 px-0 shadow-none focus-visible:ring-0 bg-transparent text-foreground dark:text-white"
                      readOnly
                    />
                  </motion.div>

                  <motion.div
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex items-center border-b border-gray-200/50 dark:border-gray-700/50 py-2"
                  >
                    <span className="text-sm font-medium w-16 shrink-0 text-foreground dark:text-white">From:</span>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="flex-1 border-0 px-0 shadow-none focus-visible:ring-0 bg-transparent text-foreground dark:text-white"
                      required
                    />
                  </motion.div>

                  <motion.div
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex items-center border-b border-gray-200/50 dark:border-gray-700/50 py-2"
                  >
                    <span className="text-sm font-medium w-16 shrink-0 text-foreground dark:text-white">Subject:</span>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="How can I help you?"
                      className="flex-1 border-0 px-0 shadow-none focus-visible:ring-0 bg-transparent text-foreground dark:text-white"
                      required
                    />
                  </motion.div>

                  {/* Hidden name field for Web3Forms */}
                  <input type="hidden" name="name" value="Portfolio Contact" />

                  <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex-grow flex flex-col mt-4"
                  >
                    <Textarea
                      name="message"
                      placeholder="Write your message here..."
                      className="w-full h-full min-h-[150px] border-0 px-0 shadow-none resize-none focus-visible:ring-0 text-sm bg-transparent text-foreground dark:text-white flex-grow"
                      required
                    />
                  </motion.div>

                  <motion.div
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex justify-between items-center pt-4"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        className="rounded-full px-6 py-2 font-semibold border border-destructive/20 dark:border-destructive/20 text-destructive hover:bg-destructive/10 dark:hover:bg-destructive/10 hover:border-destructive/40 dark:hover:border-destructive/40 transition-all duration-200"
                        onClick={handleDiscard}
                      >
                        Discard
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Button 
                        type="submit" 
                        size="sm"
                        className="rounded-full px-6 py-2 font-semibold bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md transition-all duration-200"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
