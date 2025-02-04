import { motion } from "framer-motion";
import { useState } from "react";

const FloatingMascot = () => {
  const [isWaving, setIsWaving] = useState(false);

  const mascotVariants = {
    wave: {
      rotate: [0, 20, 0],
      transition: {
        duration: 0.5,
        repeat: 2,
      },
    },
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 cursor-pointer select-none"
      animate={isWaving ? "wave" : ""}
      variants={mascotVariants}
      onClick={() => setIsWaving(true)}
      onAnimationComplete={() => setIsWaving(false)}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
    >
      <div className="w-16 h-16 bg-primary dark:bg-white rounded-full flex items-center justify-center animate-bounce shadow-lg">
        <span className="text-2xl">🚀</span>
      </div>
    </motion.div>
  );
};

export default FloatingMascot;