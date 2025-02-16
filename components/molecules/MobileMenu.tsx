import { LoginButton } from "../atoms/LoginButton";
import { Logo } from "../atoms/Logo";
import { ChevronRight } from "lucide-react";
import { menuItems } from "@/constants/navigation";

interface MobileMenuProps {
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ setIsMobileMenuOpen }: MobileMenuProps) => {
  const handleClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Wait for menu close animation
  };

  return (
    <div className="h-full flex flex-col justify-between gap-16">
      <Logo />

      <div className="flex flex-col gap-4 h-full justify-between">
        <div className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
              className="w-full flex justify-between p-4 cursor-pointer"
            >
              {item.label}
              <ChevronRight className="w-5 h-5" />
            </a>
          ))}
        </div>
        <LoginButton />
      </div>
    </div>
  );
};

export { MobileMenu };
