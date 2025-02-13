import React from "react";
import { GithubIcon, InstagramIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative  mt-24">
      {/* Floating hearts - Hidden on mobile */}
      {/* <div className="hidden md:flex absolute -top-6 left-1/2 -translate-x-1/2 space-x-4">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="text-2xl animate-float"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            ❤️
          </span>
        ))}
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* Made with love section */}
          <div className="group relative text-center md:text-left">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <span className="relative inline-block items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent font-medium text-sm md:text-base">
                Made with{" "}
                <span className="animate-pulse text-2xl text-red-600">❤️</span>{" "}
                by{" "}
                <span>
                  <a href="https://rameshdotin.vercel.app">Ramesh</a>
                </span>
              </span>
            </span>
          </div>

          {/* Social links with responsive spacing */}
          {/* <div className="hidden sm:flex space-x-6 md:space-x-4">
            <a
              href="https://github.com/rameshdotin"
              className="p-2 md:p-1.5 rounded-lg hover:bg-pink-50 dark:hover:bg-slate-800/50 transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6 md:w-5 md:h-5 text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400" />
            </a>
            <a
              href="https://instagram.com/rameshdotin"
              className="p-2 md:p-1.5 rounded-lg hover:bg-pink-50 dark:hover:bg-slate-800/50 transition-colors duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6 md:w-5 md:h-5 text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400" />
            </a>
          </div> */}
        </div>

        {/* Responsive copyright text */}
        <div className="mt-6 md:mt-4 text-center mx-auto">
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">
            © {new Date().getFullYear()} Instagram Valentine
            <br className="md:hidden" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
