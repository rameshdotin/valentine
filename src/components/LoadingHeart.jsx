function LoadingHeart() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="animate-heartbeat text-6xl">💖</div>
      <p className="text-lg font-medium text-slate-600 dark:text-slate-300 animate-pulse">
        Scanning the universe for your true love...
      </p>
    </div>
  );
}

export default LoadingHeart;
