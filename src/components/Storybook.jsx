
import { motion, AnimatePresence } from "framer-motion";

export default function Storybook({
  isOpening = false,
  onOpened,
}) {
  return (
    <div className="pointer-events-none relative flex min-h-screen w-full items-center justify-center overflow-hidden">

      {/* Magical glow */}
      <motion.div
        className="absolute h-64 w-64 rounded-full bg-pink-300/40 blur-[80px] sm:h-96 sm:w-96"
        animate={{
          scale: isOpening ? [1, 1.5, 1.8] : [0.9, 1.1, 0.9],
          opacity: isOpening ? [0.4, 0.9, 0.6] : [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: isOpening ? 2.5 : 3.5,
          repeat: isOpening ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scene 2 - Closed book */}
      <AnimatePresence>
        {!isOpening && (
          <motion.img
            key="closed-book"
            src="/scenes/scene-2.jpg"
            alt="Closed magical storybook"
            draggable="false"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{
              opacity: 1,
              scale: [1, 1.025, 1],
              y: [0, -8, 0],
            }}
            exit={{
              opacity: 0,
              scale: 1.12,
              rotateY: -75,
              filter: "blur(10px)",
            }}
            transition={{
              opacity: { duration: 0.6 },
              scale: { duration: 3, repeat: Infinity },
              y: { duration: 3, repeat: Infinity },
              rotateY: { duration: 1.4 },
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}
      </AnimatePresence>

      {/* Scene 3 - Open book */}
      <AnimatePresence>
        {isOpening && (
          <motion.img
            key="open-book"
            src="/scenes/scene-3.jpg"
            alt="Magical open storybook"
            draggable="false"
            initial={{
              opacity: 0,
              scale: 0.8,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              scale: [0.8, 1.04, 1],
              filter: "blur(0px)",
            }}
            transition={{
              duration: 2.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={onOpened}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}
      </AnimatePresence>

      {/* Golden sparkles */}
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute z-20 h-1.5 w-1.5 rounded-full bg-yellow-100 shadow-[0_0_12px_4px_rgba(255,226,145,0.8)]"
          style={{
            left: `${15 + ((index * 19) % 70)}%`,
            top: `${20 + ((index * 23) % 60)}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.3, 1.4, 0.3],
            y: [15, -25, -45],
          }}
          transition={{
            duration: 2 + (index % 3),
            delay: index * 0.15,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
