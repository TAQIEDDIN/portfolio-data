"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap');

        .nav-pill {
          background: rgba(10, 18, 35, 0.75);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(34, 211, 238, 0.15);
          border-radius: 999px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .nav-pill.scrolled {
          border-color: rgba(34, 211, 238, 0.28);
          box-shadow: 0 0 40px rgba(34, 211, 238, 0.06), 0 8px 32px rgba(0,0,0,0.4);
        }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(148, 180, 210, 0.85);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
          position: relative;
        }
        .nav-link:hover {
          color: #22d3ee;
          background: rgba(34, 211, 238, 0.07);
        }
        .nav-link.active {
          color: #22d3ee;
          background: rgba(34, 211, 238, 0.1);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #22d3ee;
          box-shadow: 0 0 6px #22d3ee;
        }

        .nav-logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          background: linear-gradient(135deg, #22d3ee, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;
        }

        .nav-divider {
          width: 1px;
          height: 18px;
          background: rgba(34, 211, 238, 0.2);
          margin: 0 4px;
        }

        .btn-contact {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 0.6rem 1.4rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #22d3ee, #38bdf8, #818cf8);
          color: #03060f;
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
          white-space: nowrap;
        }
        .btn-contact:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(34, 211, 238, 0.4);
          filter: brightness(1.08);
        }

        /* Mobile menu */
        .mobile-menu {
          background: rgba(7, 13, 26, 0.97);
          border: 1px solid rgba(34, 211, 238, 0.15);
          border-radius: 16px;
          backdrop-filter: blur(20px);
        }
        .mobile-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(148, 180, 210, 0.85);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          display: block;
        }
        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: #22d3ee;
          background: rgba(34, 211, 238, 0.07);
        }

        .hamburger-btn {
          width: 42px; height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(34, 211, 238, 0.25);
          color: #22d3ee;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, border-color 0.2s;
          background: rgba(34, 211, 238, 0.05);
        }
        .hamburger-btn:hover {
          background: rgba(34, 211, 238, 0.1);
          border-color: rgba(34, 211, 238, 0.5);
        }
      `}</style>

      {/* ── Wrapper: full width, items centered ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <div style={{ width: "100%", maxWidth: "1050px" }}>

          {/* ── Pill navbar ── */}
          <nav className={`nav-pill px-6 py-3 flex items-center justify-between gap-4 ${scrolled ? "scrolled" : ""}`}>

            {/* Logo */}
            <Link href="/" className="nav-logo flex-shrink-0">
              TAQI
            </Link>

            <div className="nav-divider hidden md:block" />

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
              {navItems.slice(0, -1).map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`nav-link ${pathname === item.path ? "active" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="nav-divider hidden md:block" />

            {/* CTA button */}
            <Link href="/contact" className="hidden md:block flex-shrink-0">
              <button className="btn-contact">CONTACT</button>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden hamburger-btn ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </nav>

          {/* ── Mobile dropdown ── */}
          {isMenuOpen && (
            <div className="mobile-menu mt-2 p-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`mobile-nav-link ${pathname === item.path ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Spacer so content isn't hidden under navbar */}
      <div style={{ height: "68px" }} />
    </>
  );
}