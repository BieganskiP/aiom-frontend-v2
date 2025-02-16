"use client";

import { useEffect, useRef } from "react";
import { animate } from "motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 500 500 500",
    href: "tel:+48500500500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kontakt@firma.pl",
    href: "mailto:kontakt@firma.pl",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "ul. Przykładowa 123, 00-000 Warszawa",
    href: "https://maps.google.com",
  },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(
                formRef.current!,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.5 }
              );
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(formRef.current);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
            Skontaktuj się z nami
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Masz pytania? Chętnie na nie odpowiemy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-bg-700/50 backdrop-blur-sm p-8 rounded-lg border border-bg-600"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-bg-800 border border-bg-600 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-bg-800 border border-bg-600 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                Wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-bg-800 border border-bg-600 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors font-medium"
            >
              Wyślij wiadomość
            </button>
          </form>

          {/* Contact Info */}
          <div className="lg:pl-12">
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {item.label}
                    </h3>
                    <p className="text-neutral-400 group-hover:text-primary-500 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map or Additional Info */}
            <div className="mt-12 bg-bg-700/50 backdrop-blur-sm p-8 rounded-lg border border-bg-600">
              <h3 className="text-lg font-medium text-foreground mb-4">
                Godziny pracy
              </h3>
              <div className="space-y-2 text-neutral-400">
                <p>
                  <span className="font-medium">Poniedziałek - Piątek:</span>
                  <br />
                  8:00 - 16:00
                </p>
                <p>
                  <span className="font-medium">Sobota - Niedziela:</span>
                  <br />
                  Zamknięte
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
    </section>
  );
};

export { Contact }; 