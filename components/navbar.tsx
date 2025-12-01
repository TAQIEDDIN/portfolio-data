"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "CV", path: "/CV" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-gradient-to-b from-gray-200/95 to-gray-100/90 dark:from-gray-800/95 dark:to-gray-900/90 z-50 border-b border-border shadow-[0_6px_15px_-5px_rgba(0,0,0,0.2)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1.5">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-semibold text-foreground dark:text-white hidden sm:inline-block">TAQI</span>
              <span className="text-lg font-semibold text-foreground dark:text-white sm:hidden">TAQI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-gray-300 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full h-12 w-12 hover:bg-primary/10 dark:hover:bg-gray-800"
            >
              <Sun className="h-5 w-5 text-foreground dark:text-gray-300 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 text-foreground dark:text-gray-300 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2 rounded-full h-12 w-12 hover:bg-primary/10 dark:hover:bg-gray-800"
            >
              <Sun className="h-5 w-5 text-foreground dark:text-gray-300 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 text-foreground dark:text-gray-300 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full h-12 w-12 hover:bg-primary/10 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-foreground dark:text-gray-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-2">
            <div className="px-2 pt-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-gray-300 hover:bg-primary/10 dark:hover:bg-gray-800 transition-colors duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}