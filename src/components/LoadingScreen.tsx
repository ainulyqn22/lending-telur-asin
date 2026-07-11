import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND_INFO, IMAGES } from "../data";

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 300); // Small delay for smooth exit
          return 100;
        }
        return prev + 5;
      });
    }, 45); // Takes around 900ms to complete

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-6" id="preloader">
      <div className="flex flex-col items-center max-w-sm w-full text-center">
        {/* Animated Brand Logo initials */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-20 h-20 rounded-full bg-brand-sec-bg border border-brand-border/40 flex items-center justify-center shadow-md mb-6 relative overflow-hidden"
          id="preloader-logo"
        >
          <img
            src={IMAGES.logo}
            alt="KT Brand Logo"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Subtle spinning glow effect */}
          <div className="absolute inset-0 rounded-full border border-brand-orange/30 border-t-transparent animate-spin" style={{ animationDuration: "3s" }} />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display font-extrabold text-2xl tracking-widest text-brand-dark"
          id="preloader-title"
        >
          KING <span className="text-brand-orange">TELUR</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-sans text-[11px] text-brand-gray tracking-wide font-medium mt-1 uppercase"
          id="preloader-desc"
        >
          Satu Telur, Sejuta Rasa, Kualitas Tiada Dua.
        </motion.p>

        {/* Loading Progress Bar Container */}
        <div className="w-40 bg-brand-border/50 h-1 rounded-full overflow-hidden mt-10 relative" id="preloader-progress-bar">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-yellow to-brand-orange"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Progress Percent text */}
        <span className="font-sans text-[10px] text-brand-gray font-semibold tracking-widest mt-2 block uppercase">
          Memuat Kualitas {progress}%
        </span>
      </div>
    </div>
  );
}
