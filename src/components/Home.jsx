import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingHeart from "./LoadingHeart";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      navigate("/results");
    }, 3000);
  };

  if (window.location.pathname === "/results") {
    return <ResultsPage />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative p-8 sm:p-12 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md w-full mx-4 hover:scale-[1.02] transition-transform">
        {isLoading ? (
          <LoadingHeart />
        ) : (
          <>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <span className="text-4xl animate-pulse">❤️</span>
            </div>

            <h1 className="text-xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent tracking-tight">
              Find Your Instagram Valentine
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Instagram Username"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-transparent transition-all duration-200"
                    required
                  />
                  <span className="absolute right-4 top-4 text-gray-400 dark:text-slate-400">
                    @
                  </span>
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full py-4 px-6 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 dark:from-pink-500 dark:to-purple-500 dark:hover:from-pink-600 dark:hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl"
                >
                  Find My Valentine 💘
                </button>
              </div>
            </form>
          </>
        )}

        {/* Decorative corner elements */}
        <div className="absolute -inset-2 rounded-2xl border-2 border-pink-200/50 dark:border-slate-700/50 pointer-events-none" />
        <div className="absolute -inset-4 rounded-2xl border-2 border-pink-100/30 dark:border-slate-700/30 pointer-events-none" />
      </div>
    </div>
  );
}

export default Home;
