import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Logo } from "../atoms/Logo";
import { menuItems } from "@/constants/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-neutral-400">
              Kompleksowe rozwiązanie do zarządzania flotą pojazdów i zespołem
              kierowców dostawczych.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Nawigacja</h3>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-primary-500 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+48500500500"
                  className="text-neutral-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  +48 500 500 500
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@firma.pl"
                  className="text-neutral-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  kontakt@firma.pl
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>
                  ul. Przykładowa 123
                  <br />
                  00-000 Warszawa
                </span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">
              Godziny pracy
            </h3>
            <ul className="space-y-4 text-neutral-400">
              <li>
                <span className="font-medium">Poniedziałek - Piątek</span>
                <br />
                8:00 - 16:00
              </li>
              <li>
                <span className="font-medium">Sobota - Niedziela</span>
                <br />
                Zamknięte
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-bg-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © {currentYear} Fitlit. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-500 transition-colors"
              >
                Polityka prywatności
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-500 transition-colors"
              >
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
