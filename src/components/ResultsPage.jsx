import { useState, useEffect } from "react";

function ResultsPage() {
  const [attempts, setAttempts] = useState(0);
  const [showMeme, setShowMeme] = useState(false);

  // Load attempts from localStorage on mount
  useEffect(() => {
    const savedAttempts = localStorage.getItem("valentineAttempts") || 0;
    setAttempts(Number(savedAttempts));
    setShowMeme(Number(savedAttempts) > 5);
  }, []);

  const funnyQuotes = [
    "Our algorithms detected your Valentine... is your pet! 🐾",
    "Surprise! It's your WiFi router - it's always there for you 📶",
    "Drumroll... It's your reflection! 💁♂️ Love yourself first!",
    "The stars say: Your true Valentine is pizza 🍕 Forever cheesy!",
    "Plot twist! It's your childhood imaginary friend 👻",
    "Big reveal: Your bed pillow - never leaves your side 🛌",
  ];

  const memeImages = [
    // Popular "Distracted Boyfriend" meme template
    "/Chala-ja-BSDK.webp",

    // Classic "Success Kid" meme
    // "https://i.imgflip.com/1bh3.jpg",

    // Popular "Drake Hotline Bling" template
    "/meme-image.webp",

    // "Woman Yelling at a Cat" meme
    "https://i.imgflip.com/2hgfw.jpg",
  ];

  const handleTryAgain = () => {
    const newAttempts = attempts + 1;
    localStorage.setItem("valentineAttempts", newAttempts);

    if (newAttempts > 5) {
      setShowMeme(true);
    }

    window.location.reload();
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
          <h2 className=" text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent tracking-tight relative inline-block">
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
                {/* <div className="absolute -top-4 -right-4 rotate-12 bg-yellow-100 dark:bg-slate-700 px-3 py-1 rounded-lg text-sm shadow-sm">
                  🔥 Fresh Meme!
                </div> */}
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
            className="cursor-pointer mt-6 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-2xl hover:rounded-xl transition-all duration-300 relative overflow-hidden group/button transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-shine" />

            {/* Button content */}
            <span className="relative text-nowrap z-10 flex items-center justify-center gap-2 text-sm sm:text-lg font-semibold">
              {showMeme ? (
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
