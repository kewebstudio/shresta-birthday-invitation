
import { motion } from "framer-motion";
import Scene from "../components/Scene";
import birthdayData from "../data/birthdayData";

export default function Scene5({ onNext }) {
  const babyName = birthdayData.baby.name;
  const photoSrc = "/baby/6.jpg";

  return (
    <Scene
      sceneKey="scene-5"
      background="/scenes/scene-5.jpg"
      backgroundPosition="center"
      className="min-h-screen"
    >
      {/* Baby photo inside the large golden oval */}
      <div
        className="absolute z-20"
        style={{
          left: "50%",
          top: "21%",
          width: "82%",
          height: "49%",
          transform: "translateX(-50%)",
        }}
      >
        <motion.div
          className="h-full w-full overflow-hidden"
          style={{
            clipPath: "ellipse(48% 49% at 50% 50%)",
          }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <img
            src={photoSrc}
            alt={babyName}
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Name from birthdayData.js */}
      <div
        className="absolute z-30 flex w-[75%] justify-center"
        style={{
          left: "50%",
          top: "72.5%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="whitespace-nowrap font-heading text-[clamp(30px,8vw,42px)] font-bold italic leading-none text-[#8b176f]"
          style={{
            textShadow: "0 1px 0 #fff0d5, 0 2px 4px rgba(91,25,91,0.3)",
          }}
        >
          {babyName}
        </motion.h1>
      </div>

      {/* Continue button */}
      <div className="absolute inset-x-0 bottom-[7%] z-40 flex justify-center px-4">
        <motion.button
          type="button"
          onClick={onNext}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-full border border-white/80 bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-100 px-6 py-2.5 font-body text-xs font-semibold text-purple-800 shadow-lg sm:px-8 sm:py-3 sm:text-sm"
        >
          Celebrate My First Birthday ✨
        </motion.button>
      </div>
    </Scene>
  );
}
