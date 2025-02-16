"use client";

import { LogIn } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";
import Link from "next/link";

export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:flex-none lg:w-[600px]">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <Logo />
            <h2 className="mt-6 text-3xl font-bold text-foreground">
              Zaloguj się do panelu
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Lub{" "}
              <Link
                href="/"
                className="text-primary-500 hover:text-primary-400 font-medium"
              >
                wróć do strony głównej
              </Link>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-400"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 bg-bg-800 border border-bg-600 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-400"
              >
                Hasło
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-2 bg-bg-800 border border-bg-600 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-bg-600 text-primary-500 focus:ring-primary-500 bg-bg-800"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-neutral-400"
                >
                  Zapamiętaj mnie
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-primary-500 hover:text-primary-400"
                >
                  Zapomniałeś hasła?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Zaloguj się
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Background Image/Pattern */}
      <div className="hidden lg:block relative flex-1">
        <div className="absolute inset-0 bg-bg-800">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-25" />
        </div>
        {/* Decorative blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>
    </div>
  );
}
