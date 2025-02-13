import React from "react";
import Navbar from "./Navbar";

function Body({ children }) {
  return (
    <div className="min-h-screen font-sans bg-black dark:bg-white">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 p-4 text-black dark:text-white">
        {" "}
        {children}
      </div>
    </div>
  );
}

export default Body;
