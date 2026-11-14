
import { motion } from "framer-motion";
import Scene from "../components/Scene";
import birthdayData from "../data/birthdayData";

export default function Scene4({ onNext }) {
  const babyName = birthdayData.baby.name;

  return (
    <Scene
      background="/scenes/scene-4.jpg"
      sceneKey="invitation"
      backgroundPosition="center"
      className="bg-[#291344]"
    >
      <div className="absolute inset-0 bg-purple-950/10" />

      {/* Invitation text inside the ornate box */}
      <div className="absolute inset-x-[12%] top-[45%] z-20 flex flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-elegant text-[clamp(12px,3.5vw,18px)] tracking-[0.18em] text-[#9b551c]"
        >
          YOU ARE INVITED
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="my-2 text-[#d69b38]"
        >
          ✧ ───── ❀ ───── ✧
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 1.3, ease: "easeOut" }}
          className="font-heading text-[clamp(31px,8vw,45px)] font-bold italic leading-tight tracking-wide"
          style={{
            background: "linear-gradient(135deg, #ff3d9a, #c026a5, #f08a32)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "0.4px rgba(255,255,255,0.45)",
            filter: "drop-shadow(0 2px 5px rgba(255,90,180,0.3))",
          }}
        >
          {babyName}'s
          <br />
          First Birthday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="font-script mt-2 text-[clamp(17px,4.5vw,24px)] text-[#a35a37]"
        >
          A little celebration of love
        </motion.p>
      </div>

      {/* Button centered below the message box */}
      <div className="absolute inset-x-0 bottom-[13%] z-30 flex justify-center px-4">
        <motion.button
          type="button"
          onClick={onNext}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.5 }}
          className="whitespace-nowrap rounded-full border border-[#e9bd68] bg-gradient-to-r from-[#fff1d8] via-[#ffe2ed] to-[#fff1d8] px-8 py-3 font-body text-sm font-semibold text-[#853b83] shadow-[0_5px_20px_rgba(255,190,220,0.4)] transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          Meet Our Little Princess ♡
        </motion.button>
      </div>
    </Scene>
  );
}
