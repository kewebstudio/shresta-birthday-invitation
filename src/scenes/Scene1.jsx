
import { motion } from "framer-motion";
import Scene from "../components/Scene";
import Fairy from "../components/Fairy";

export default function Scene1({ onNext }) {
  return (
    <Scene
      background="/scenes/scene-1.jpg"
      sceneKey="welcome"
      className="bg-[#251344]"
      backgroundPosition="center"
    >
      <Fairy />

      {/* Rich cinematic contrast */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#21113d]/5 via-transparent to-[#21113d]/65" />

      <div className="absolute inset-x-0 bottom-[9%] z-30 flex flex-col items-center px-4 text-center">

        {/* Small invitation label */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.32em" }}
          transition={{ duration: 1.4 }}
          className="mb-5 font-elegant text-xs font-semibold uppercase text-[#fff5db] sm:text-sm"
          style={{ textShadow: "0 2px 12px #35164f" }}
        >
          A Magical Celebration
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.4 }}
          className="font-heading text-[clamp(3.2rem,12vw,5rem)] leading-[0.95] text-[#ffffff]"
          style={{
            textShadow:
              "0 2px 4px #704b8c, 0 0 22px rgba(255,239,255,0.65)",
          }}
        >
          A Little
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="-mt-1 font-script text-[clamp(4.5rem,18vw,7rem)] leading-[1.1] text-[#ffe6a9]"
          style={{
            textShadow:
              "0 2px 3px #8b5b91, 0 0 25px rgba(255,225,157,0.8)",
          }}
        >
          Fairytale
        </motion.h2>

        {/* Baby's name */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-3 font-elegant text-[clamp(1.4rem,5vw,1.8rem)] font-semibold tracking-wide text-white"
          style={{
            textShadow: "0 2px 12px #35164f",
          }}
        >
          Shresta Turns One
        </motion.p>

        {/* Gold ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="my-5 flex items-center gap-4 text-[#ffe6a9]"
        >
          <span className="h-px w-10 bg-[#ffe6a9]" />
          <span className="text-xl">✧</span>
          <span className="text-sm">♡</span>
          <span className="text-xl">✧</span>
          <span className="h-px w-10 bg-[#ffe6a9]" />
        </motion.div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={onNext}
          className="rounded-full border border-[#fff5dc] bg-gradient-to-r from-[#fffaf1] via-[#fff0d8] to-[#ffe4b4] px-10 py-4 shadow-[0_5px_30px_rgba(255,226,177,0.4)]"
        >
          <span className="font-heading text-lg font-semibold tracking-wide text-[#69377d]">
            Enter the Celebration ✧
          </span>
        </motion.button>

        {/* Final script */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
          className="mt-5 font-script text-4xl text-[#fff1c9]"
          style={{
            textShadow: "0 2px 12px #432052",
          }}
        >
          A little magic awaits...
        </motion.p>
      </div>
    </Scene>
  );
}
