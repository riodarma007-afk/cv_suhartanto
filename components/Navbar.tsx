"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, Award, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const desktopLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Pendidikan", href: "#education" },
  { label: "Skills", href: "#skills" },

];

const mobileLinks = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Profil", href: "#about", icon: User },
  { label: "Karier", href: "#experience", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Award },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active hash based on scroll position (optional but good for UX)
      const sections = mobileLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveHash(`#${section}`);
          }
        }
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveHash(href);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-header shadow-sm" : "bg-transparent py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleClick(e, "#hero")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--purple-main)] flex items-center justify-center font-bold text-white text-sm font-serif-display shadow-lg shadow-[var(--purple-glow)] group-hover:scale-105 transition-transform">
              ST
            </div>
            <span className="font-serif-display font-bold text-xl text-[var(--text-main)] tracking-wide">
              Suhartanto
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {desktopLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-[var(--text-main)] hover:text-[var(--purple-main)] transition-colors duration-200 text-sm font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--purple-main)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Contact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="inline-flex items-center justify-center bg-[var(--purple-main)] text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-[var(--purple-dark)] transition-colors shadow-md shadow-[var(--purple-glow)]"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-header border-t border-gray-100 pb-2 pt-2">
        <ul className="flex justify-around items-center px-2">
          {mobileLinks.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <li key={link.href} className="flex-1">
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`flex flex-col items-center justify-center gap-1 w-full transition-colors ${
                    isActive ? "text-[var(--purple-main)]" : "text-gray-400 hover:text-gray-500"
                  }`}
                >
                  <div className={`relative p-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[var(--purple-glow)] scale-110" : ""
                  }`}>
                    <link.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span className={`text-[10px] font-medium transition-all ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`}>
                    {link.label}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
