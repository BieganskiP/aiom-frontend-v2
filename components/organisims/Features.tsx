"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import { BarChart3, Car, Users2, MapPin, Shield, Bell } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Zarządzanie Flotą",
    description:
      "Monitoruj stan pojazdów, otrzymuj przypomnienia o przeglądach i wymianach oraz przypisuj pojazdy do kierowców.",
  },
  {
    icon: BarChart3,
    title: "Analiza Wydajności",
    description:
      "Szczegółowe statystyki i raporty dla pojedynczych kierowców oraz całej firmy. Monitoruj efektywność i optymalizuj działania.",
  },
  {
    icon: Users2,
    title: "Zarządzanie Regionami",
    description:
      "Organizuj kierowców w regiony i przydzielaj liderów. Efektywne zarządzanie zespołami w różnych lokalizacjach.",
  },
  {
    icon: MapPin,
    title: "Planowanie Tras",
    description:
      "Automatyczne dodawanie i zarządzanie trasami. Importuj listy punktów dostawy z plików Excel lub dodawaj ręcznie.",
  },
  {
    icon: Bell,
    title: "System Zgłoszeń",
    description:
      "Zarządzaj reklamacjami i zgłoszeniami. Śledź statusy, przypisuj odpowiedzialnych i monitoruj rozwiązania.",
  },
  {
    icon: Shield,
    title: "Panel Administracyjny",
    description:
      "Zaawansowane zarządzanie użytkownikami, uprawnieniami i globalnymi ustawieniami systemu.",
  },
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (featuresRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(
                ".feature-card",
                {
                  opacity: [0, 1],
                  y: [20, 0],
                },
                {
                  duration: 0.5,
                  delay: stagger(0.1),
                }
              );
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(featuresRef.current);
    }
  }, []);

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-bg-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
            Wszystko czego potrzebujesz
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Kompleksowe narzędzia do zarządzania flotą i zespołem
          </p>
        </div>

        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-0 p-6 rounded-lg bg-bg-700/50 backdrop-blur-sm border border-bg-600 hover:border-primary-500 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative blurs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>
    </section>
  );
};

export { Features };
