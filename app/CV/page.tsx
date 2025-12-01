"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CVViewer() {
  const [isMounted, setIsMounted] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const pdfFile = {
    url: "/docs/cv-son-eng.pdf",
    name: "cv-son-eng.pdf"
  };

  useEffect(() => {
    setIsMounted(true);
    
    fetch(pdfFile.url)
      .then(res => {
        if (!res.ok) throw new Error("PDF not found");
        return res.blob();
      })
      .catch(() => setPdfError(true));
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile.url;
    link.download = pdfFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadTriggered(true);
  };

  if (!isMounted) return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-10 bg-background dark:bg-black flex items-center justify-center"
    >
      <p className="text-lg text-muted-foreground dark:text-gray-400">Loading viewer...</p>
    </motion.div>
  );

  if (pdfError) return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-10 bg-background dark:bg-black flex items-center justify-center"
    >
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.1)] border border-transparent dark:border-none"
        whileHover={{ scale: 1.02 }}
      >
        <p className="mb-6 text-lg text-muted-foreground dark:text-gray-400">PDF could not be loaded</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Button 
            onClick={handleDownload} 
            className="rounded-full px-6 py-2 font-semibold bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md transition-all duration-200 inline-flex gap-2"
          >
            <Download className="h-4 w-4" /> Download CV
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-10 pb-6 bg-background dark:bg-black"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground dark:text-white">
          My Curriculum Vitae
        </h1>


        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button 
              variant="outline" 
              asChild 
              className="rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-700 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-600 text-foreground dark:text-gray-300 transition-all duration-200"
            >
              <Link href="/about" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to About
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button 
              variant="default" 
              onClick={handleDownload} 
              className="rounded-full px-6 py-2 font-semibold bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md transition-all duration-200 flex items-center gap-2"
            >
              <Download className="h-4 w-4" /> Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mx-auto rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.1)] bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-transparent dark:border-none transform-gpu"
          whileHover={{ scale: 1.02 }}
          style={{
            width: '595px', // A4 width at 72dpi
            height: '842px', // A4 height at 72dpi
            maxWidth: '100%',
            aspectRatio: '210/297', // Maintain A4 ratio
          }}
        >
          <iframe 
            src={`${pdfFile.url}#toolbar=0&view=FitH`}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="CV Preview"
            onError={() => setPdfError(true)}
          />
        </motion.div>

        {downloadTriggered && (
          <a href={pdfFile.url} download={pdfFile.name} className="hidden" />
        )}
      </div>
    </motion.div>
  );
}