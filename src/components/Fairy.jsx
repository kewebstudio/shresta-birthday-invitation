
import { motion } from "framer-motion";

export default function Fairy() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {/* Fairy glow */}
      <motion.div
        className="absolute left-0 top-[25%] h-32 w-32 rounded-full bg-pink-300/30 blur-3xl"
        animate={{
          x: ["-20vw", "35vw", "75vw", "120vw"],
          y: ["0vh", "-8vh", "5vh", "-5vh"],
          opacity: [0.2, 0.8, 0.5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Flying fairy */}
      <motion.div
        className="absolute left-0 top-[22%]"
        initial={{ x: "-40vw", y: "8vh", opacity: 0, rotate: -8 }}
        animate={{
          x: ["-40vw", "-12vw", "15vw", "43vw", "72vw", "115vw"],
          y: ["8vh", "-3vh", "-12vh", "-5vh", "-15vh", "-7vh"],
          opacity: [0, 1, 1, 1, 1, 0],
          rotate: [-8, 5, -5, 7, -4, 5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
          times: [0, 0.15, 0.35, 0.55, 0.8, 1],
        }}
      >
        <div className="relative">
          {/* Magical aura */}
          <div className="absolute inset-0 scale-75 rounded-full bg-pink-200/50 blur-2xl" />

          <motion.img
            src="/scenes/fairy.png"
            alt="Flying magical fairy"
            className="relative h-auto w-[clamp(240px,78vw,420px)] max-w-none object-contain"
            style={{
              filter:
                "drop-shadow(0 0 12px rgba(255,220,255,0.95)) drop-shadow(0 0 25px rgba(255,190,240,0.7))",
            }}
            animate={{
              y: [0, -13, 0, -9, 0],
              rotate: [0, 4, -3, 2, 0],
              scale: [1, 1.04, 1, 1.03, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Sparkling trail */}
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: i % 3 === 0 ? 7 : 4,
                height: i % 3 === 0 ? 7 : 4,
                left: `${-10 - i * 11}px`,
                top: `${25 + (i % 4) * 18}px`,
                boxShadow: "0 0 12px 3px rgba(255,220,255,0.9)",
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.4, 1.5, 0.2],
                y: [0, -15, 10],
              }}
              transition={{
                duration: 1.2 + (i % 3) * 0.3,
                repeat: Infinity,
                delay: i * 0.12,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
