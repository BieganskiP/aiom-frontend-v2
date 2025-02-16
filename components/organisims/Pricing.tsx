"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import { Check } from "lucide-react";
import clsx from "clsx";

const tiers = [
  {
    name: "Basic",
    price: "299",
    description: "Podstawowe funkcje zarządzania zespołem",
    userLimit: "do 15 użytkowników",
    features: [
      "Zarządzanie użytkownikami",
      "Zarządzanie trasami",
      "Statystyki wydajności",
      "Podstawowe raporty",
      "Mobilna aplikacja",
      "Wsparcie email",
    ],
  },
  {
    name: "Business",
    price: "499",
    description: "Zaawansowane zarządzanie flotą",
    userLimit: "do 30 użytkowników",
    features: [
      "Wszystko z Basic, plus:",
      "Zarządzanie pojazdami",
      "Regiony i liderzy",
      "Sekcja dokumentów",
      "Rozszerzone raporty",
      "Priorytetowe wsparcie",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "899",
    description: "Pełna kontrola i automatyzacja",
    userLimit: "do 50 użytkowników",
    features: [
      "Wszystko z Business, plus:",
      "System reklamacji",
      "Planowanie tras",
      "Sekcja wydarzeń",
      "Zaawansowane ustawienia",
      "Dedykowany opiekun",
    ],
  },
];

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pricingRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(
                ".pricing-card",
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

      observer.observe(pricingRef.current);
    }
  }, []);

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Wybierz plan dla swojej firmy
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Elastyczne plany dostosowane do Twoich potrzeb
          </p>
        </div>

        <div
          ref={pricingRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={clsx(
                "pricing-card opacity-0 rounded-lg p-8 transition-all",
                tier.highlighted
                  ? "bg-primary-500/10 border-2 border-primary-500 scale-105"
                  : "bg-bg-700 border border-bg-600 hover:border-primary-500"
              )}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-neutral-400 mb-4">{tier.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-neutral-400 mb-1">PLN / msc</span>
                </div>
                <p className="text-sm text-primary-500 mt-2 font-medium">
                  {tier.userLimit}
                </p>
              </div>

              <ul className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3 text-neutral-300"
                  >
                    <Check
                      className={clsx(
                        "w-5 h-5",
                        tier.highlighted
                          ? "text-primary-500"
                          : "text-neutral-400"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={clsx(
                  "w-full mt-8 py-3 px-6 rounded-md font-semibold transition-colors",
                  tier.highlighted
                    ? "bg-primary-500 text-white hover:bg-primary-600"
                    : "bg-bg-600 text-foreground hover:bg-bg-500"
                )}
              >
                Wybierz plan
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Potrzebujesz czegoś więcej?
          </h3>
          <p className="text-neutral-400 mb-6">
            Masz większy zespół lub specjalne wymagania? Oferujemy elastyczne
            rozwiązania dostosowane do indywidualnych potrzeb Twojej firmy.
            Skontaktuj się z nami, aby omówić szczegóły.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-md transition-colors font-semibold"
          >
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
};

export { Pricing }; 