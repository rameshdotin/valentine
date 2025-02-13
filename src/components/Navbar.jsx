import React from "react";
import { Link } from "react-router-dom";
import { GithubIcon, InstagramIcon } from "./icons";
import ThemeBtn from "./ThemeBtn";

export default function Navbar() {
  return (
    <nav className="sticky top-0 inset-x-0 z-50 border-b border-slate-200/80 dark:border-slate-800 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-2 group transform transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-pink-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-2xl animate-float hidden sm:inline-block">💘</span>
            </div>
            <h1 className="text-sm sm:text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 dark:from-pink-300 dark:to-purple-400 bg-clip-text text-transparent">
              Instagram Valentine
              <span className="ml-2 text-sm text-pink-400  sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ❤️ Find your match
              </span>
            </h1>
          </Link>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-1 sm:space-x-4">
            <a
              href="https://github.com/rameshdotin"
              className="p-2 rounded-xl relative group transition-all duration-300"
              aria-label="GitHub profile"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-inner" />

              {/* Animated border effect */}
              <div className="absolute inset-0 border-2 border-pink-200/30 dark:border-slate-700/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <GithubIcon
                size={28}
                className="text-slate-700 dark:text-slate-300 transition-all duration-300 
               group-hover:text-purple-600 dark:group-hover:text-purple-400
               group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_5px_10px_rgba(219,39,119,0.2)]
               dark:group-hover:drop-shadow-[0_5px_10px_rgba(219,114,157,0.3)]"
              />

              {/* Subtle glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl transition-opacity duration-300" />
            </a>
            <a
              href="https://www.instagram.com/rameshdotin/"
              className="p-2 rounded-lg relative group transition-all duration-300"
            >
              <div className="absolute inset-0 bg-pink-500/10 rounded-lg scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
              <InstagramIcon
                size={28}
                className="text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
              />
            </a>

            <ThemeBtn className="relative overflow-hidden group h-10 w-10 rounded-xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </ThemeBtn>
          </div>
        </div>

        {/* Animated underline */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400/0 via-pink-400/40 to-purple-500/0 dark:via-pink-300/30 animate-underline-glow" />
      </div>
    </nav>
  );
}
