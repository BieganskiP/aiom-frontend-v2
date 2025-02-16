"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { animate, stagger } from "motion";
import { Truck, CalendarDays, DollarSign } from "lucide-react";

const Hero = () => {
  const headingRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      animate(
        headingRef.current,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5 }
      );
    }

    if (featuresRef.current) {
      animate(
        ".feature-item",
        { opacity: [0, 1], y: [20, 0] },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, []);

  // Handle smooth scroll
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden bg-background min-h-[100vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1
                ref={headingRef}
                className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl opacity-0"
              >
                <span className="block">Zarządzaj flotą</span>
                <span className="block text-primary-500">
                  i zespołem kierowców
                </span>
              </h1>
              <p className="mt-3 text-base text-neutral-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                System do kompleksowego zarządzania flotą pojazdów i
                monitorowania pracy kierowców. Śledź wydajność, reaguj na
                zdarzenia i optymalizuj pracę zespołu.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#features"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neutral-50 bg-primary-500 hover:bg-primary-600 transition-colors md:py-4 md:text-lg md:px-10"
                    onClick={(e) => handleClick(e, "#features")}
                  >
                    Rozpocznij teraz
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#features"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neutral-50 bg-bg-700 hover:bg-bg-800 transition-colors md:py-4 md:text-lg md:px-10"
                    onClick={(e) => handleClick(e, "#features")}
                  >
                    Dowiedz się więcej
                  </a>
                </div>
              </div>
            </div>

            <div
              ref={featuresRef}
              className="mt-16 grid grid-cols-3 gap-12 max-w-3xl mx-auto"
            >
              <div className="feature-item flex flex-col items-center text-center opacity-0">
                <Truck className="h-16 w-16 text-primary-500 mb-4" />
                <h3 className="text-lg font-medium text-foreground">
                  Monitoring floty
                </h3>
              </div>

              <div className="feature-item flex flex-col items-center text-center opacity-0">
                <CalendarDays className="h-16 w-16 text-primary-500 mb-4" />
                <h3 className="text-lg font-medium text-foreground">
                  Wydajność pracy
                </h3>
              </div>

              <div className="feature-item flex flex-col items-center text-center opacity-0">
                <DollarSign className="h-16 w-16 text-primary-500 mb-4" />
                <h3 className="text-lg font-medium text-foreground">
                  Rozliczenia
                </h3>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          src="/delivery-illustration.svg"
          alt="Ilustracja dostawy"
          width={800}
          height={600}
          className="h-56 w-full object-contain sm:h-72 md:h-96 lg:h-full lg:w-full p-4"
          priority
        />
      </div>
    </div>
  );
};

export { Hero };
