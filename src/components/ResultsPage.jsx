import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ResultsPage() {
  const [attempts, setAttempts] = useState(0);
  const [showMeme, setShowMeme] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const loginUser = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginUser) {
      navigate("/");
    }
    const savedAttempts = localStorage.getItem(`${loginUser}Attempts`) || 0;
    setAttempts(Number(savedAttempts));
    setShowMeme(Number(savedAttempts) > 5);
  }, [loginUser, navigate]);

  const funnyQuotes = [
    "Our algorithms detected your Valentine... is your pet! 🐾",
    "Surprise! It's your WiFi router - it's always there for you 📶",
    "Drumroll... It's your reflection! 💁♂️ Love yourself first!",
    "Plot twist! It's your childhood imaginary friend 👻",
    "Big reveal: Your bed pillow - never leaves your side 🛌",
  ];

  const memeImages = [
    "/Chala-ja-BSDK.webp",
    "/meme-image.webp",
    "/babaji.jpg",
    "https://i.imgflip.com/2hgfw.jpg",
  ];

  const handleTryAgain = () => {
    setIsLoading(true);
    const newAttempts = attempts + 1;

    setTimeout(() => {
      localStorage.setItem(`${loginUser}Attempts`, newAttempts);
      setAttempts(newAttempts);
      setShowMeme(newAttempts > 4);
      setIsLoading(false);
    }, 1500); // Simulated loading delay
  };

  const currentContent = showMeme
    ? memeImages[Math.floor(Math.random() * memeImages.length)]
    : funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 max-w-md w-full mx-4 group/container">
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              {i % 3 === 0 ? "❤️" : i % 3 === 1 ? "✨" : "💫"}
            </div>
          ))}
        </div>

        <div className="relative text-center space-y-8 z-10">
          {/* Animated emoji header */}
          <div className="relative inline-block">
            <div className="animate-wiggle text-4xl sm:text-6xl transform-gpu">
              {showMeme ? "🤦♂️" : "🎉"}
            </div>
            <div className="absolute -inset-4 bg-pink-500/10 rounded-full blur-xl opacity-0 group-hover/container:opacity-40 transition-opacity duration-300" />
          </div>

          {/* Gradient title with shine effect */}
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent tracking-tight relative inline-block">
            {showMeme ? "Seriously? Again?!" : "Results Are In!"}
            <span className="absolute -inset-1 bg-gradient-to-r from-white/30 to-transparent dark:from-black/30 opacity-0 group-hover/container:opacity-100 transition-opacity duration-300 rounded-full" />
          </h2>

          {/* Content area */}
          {showMeme ? (
            <div className="animate-tilt-shake">
              <div className="relative inline-block transform hover:-rotate-2 transition-transform duration-300">
                <img
                  src={currentContent}
                  alt="Funny meme"
                  className="rounded-xl border-4 border-pink-100 dark:border-slate-700 mx-auto shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 font-handwriting">
                Ja na ❤️De
              </p>
            </div>
          ) : (
            <p className="text-xl text-slate-700 dark:text-slate-300 bg-pink-50/50 dark:bg-slate-700/50 p-6 rounded-xl border border-pink-100/50 dark:border-slate-700/50 hover:bg-pink-100/30 dark:hover:bg-slate-700/30 transition-colors duration-300">
              ✨ {currentContent} ✨
            </p>
          )}

          {/* Interactive button */}
          <button
            onClick={handleTryAgain}
            disabled={isLoading}
            className="cursor-pointer mt-6 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-2xl hover:rounded-xl transition-all duration-300 relative overflow-hidden group/button transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-shine" />
            <span className="relative text-nowrap z-10 flex items-center justify-center gap-2 text-sm sm:text-lg font-semibold">
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Scanning Universe...
                </>
              ) : showMeme ? (
                <>
                  <span className="animate-bounce">🥺</span>I Swear, Last Try!
                  <span className="animate-bounce">🥺</span>
                </>
              ) : (
                <>
                  Try Again 🔄
                  <span className="group-hover/button:animate-spin">💫</span>
                </>
              )}
            </span>
          </button>

          {/* Attempt counter */}
          <div className="absolute -top-2 right-4 text-sm text-pink-500/80 dark:text-pink-400/80 font-mono">
            Attempts: {attempts}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
