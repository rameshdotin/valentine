import React from "react";
import useTheme from "../context/theme";
import { MoonFilledIcon, SunFilledIcon } from "./icons";

function ThemeBtn({ className }) {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[6px]" />

      <button
        onClick={onChangeBtn}
        className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300"
      >
        {themeMode === "dark" ? (
          <MoonFilledIcon
            size={24}
            className="text-slate-600 dark:text-slate-300 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-all duration-300 transform group-hover:scale-110"
          />
        ) : (
          <SunFilledIcon
            size={24}
            className="text-slate-600 dark:text-slate-300 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-all duration-300 transform group-hover:scale-110"
          />
        )}

        {/* Subtle hover effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-white/30 dark:to-slate-900/30 pointer-events-none" />
      </button>
    </div>
  );
}

export default ThemeBtn;
