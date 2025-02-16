import { motion } from "motion/react";

interface HamburgerProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Hamburger = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: HamburgerProps) => {
  return (
    <div
      className="flex flex-col gap-1 z-[11] relative"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <motion.span
        className="block w-6 h-1 bg-primary-500"
        initial={{ rotate: 0, y: 0 }}
        animate={{
          rotate: isMobileMenuOpen ? 45 : 0,
          y: isMobileMenuOpen ? 8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-1 bg-primary-500"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isMobileMenuOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-1 bg-primary-500"
        initial={{ rotate: 0, y: 0 }}
        animate={{
          rotate: isMobileMenuOpen ? -45 : 0,
          y: isMobileMenuOpen ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export { Hamburger };
