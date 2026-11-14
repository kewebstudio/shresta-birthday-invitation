
import { motion } from "framer-motion";

export default function MagicEffects({
  intensity = "normal",
  butterflies = true,
  sparkles = true,
}) {
  const particleCount =
    intensity === "heavy" ? 35 : intensity === "light" ? 12 : 22;

  const particles = Array.from(
    { length: particleCount },
    (_, index) => ({
      id: index,
      left: `${(index * 37 + 11) % 100}%`,
      top: `${(index * 53 + 7) % 100}%`,
      delay: (index % 8) * 0.35,
      duration: 2.5 + (index % 4),
      size: 3 + (index % 4),
    })
  );

  const butterflyPositions = [
    { left: "12%", top: "22%", delay: 0 },
    { left: "78%", top: "30%", delay: 1.2 },
    { left: "24%", top: "72%", delay: 2.1 },
    { left: "86%", top: "68%", delay: 0.8 },
  ];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft magical ambient glow */}
      <motion.div
        className="absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-pink-300/20 blur-[90px]"
        animate={{
          x: [0, 45, 0],
          y: [0, -30, 0],
          opacity: [0.3, 0.65, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-purple-300/20 blur-[100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 35, 0],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating sparkles */}
      {sparkles &&
        particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-yellow-100 shadow-[0_0_10px_3px_rgba(255,230,160,0.65)]"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0.3, 1.3, 0.3],
              y: [15, -15, -35],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Twinkling four-point stars */}
      {sparkles &&
        Array.from({ length: 8 }).map((_, index) => (
          <motion.span
            key={`star-${index}`}
            className="absolute text-yellow-100"
            style={{
              left: `${10 + ((index * 29) % 80)}%`,
              top: `${12 + ((index * 31) % 75)}%`,
              fontSize: `${12 + (index % 3) * 5}px`,
              textShadow: "0 0 12px rgba(255,230,160,0.9)",
            }}
            animate={{
              opacity: [0.15, 1, 0.15],
              scale: [0.6, 1.3, 0.6],
              rotate: [0, 45, 90],
            }}
            transition={{
              duration: 2 + (index % 3),
              delay: index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>
        ))}

      {/* Floating butterflies */}
      {butterflies &&
        butterflyPositions.map((butterfly, index) => (
          <motion.span
            key={`butterfly-${index}`}
            className="absolute text-xl sm:text-2xl"
            style={{
              left: butterfly.left,
              top: butterfly.top,
              filter: "drop-shadow(0 0 8px rgba(255,210,245,0.9))",
            }}
            animate={{
              x: [0, 25, -15, 0],
              y: [0, -30, -10, 0],
              rotate: [-12, 12, -8, -12],
            }}
            transition={{
              duration: 7 + index,
              delay: butterfly.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🦋
          </motion.span>
        ))}
    </div>
  );
}
