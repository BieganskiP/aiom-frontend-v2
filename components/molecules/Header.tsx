"use client";

import { useState, useEffect } from "react";

import { menuItems } from "@/constants/navigation";

import { LoginButton } from "../atoms/LoginButton";
import { Logo } from "../atoms/Logo";
import { Hamburger } from "../atoms/Hamburger";
import { MobileMenu } from "./MobileMenu";

import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Handle smooth scroll
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.href.slice(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-bg-700">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <Logo />

        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={clsx(
                  "text-neutral-400 hover:text-foreground transition-colors relative py-2 cursor-pointer",
                  activeSection === item.href && [
                    "text-foreground",
                    "after:absolute",
                    "after:bottom-0",
                    "after:left-0",
                    "after:right-0",
                    "after:h-0.5",
                    "after:bg-primary-500",
                  ]
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="lg:hidden">
            <Hamburger
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>

          <div className="hidden lg:block min-w-[120px]">
            <LoginButton />
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full h-screen bg-bg-700 z-10 p-10 pt-4"
            >
              <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export { Header };
