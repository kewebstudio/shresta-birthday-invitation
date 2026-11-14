
import { motion } from "framer-motion";
import Scene from "../components/Scene";
import birthdayData from "../data/birthdayData";

export default function Scene10({ onRestart }) {
  const { baby } = birthdayData;

  return (
    <Scene
      sceneKey="scene-10"
      background="/scenes/scene-10.jpg"
      backgroundPosition="center"
      className="min-h-screen"
    >
      {/* Thank-you message inside the white plaque */}
      <div className="absolute inset-x-0 top-[39%] z-20 flex justify-center px-4">
        <motion.div
          className="flex w-[76%] flex-col items-center text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="font-elegant text-2xl text-[#c47a9d]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            ♡
          </motion.span>

          <h1 className="mt-1 font-heading text-3xl font-bold leading-tight text-[#873477] sm:text-5xl">
            Thank You!
          </h1>

          <div className="my-2 h-px w-1/2 bg-[#c99a50]" />

          <p className="font-elegant text-sm leading-snug text-[#70436f] sm:text-lg">
            Thank you for celebrating {baby.name}'s special day.
          </p>

          <p className="mt-1 font-elegant text-sm italic text-[#873477] sm:text-lg">
            With love, always ♡
          </p>
        </motion.div>
      </div>

      {/* Bottom buttons */}
      <div className="absolute inset-x-0 bottom-[3%] z-40 flex flex-col items-center gap-2.5 px-4">

        {/* Relive the Magic */}
        {onRestart && (
          <motion.button
            type="button"
            onClick={onRestart}
            className="whitespace-nowrap rounded-full border border-[#e5c47e] bg-gradient-to-r from-[#fff0d7] via-[#f8dced] to-[#fff0d7] px-7 py-2.5 font-body text-xs font-semibold text-[#74347d] shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✨ Relive the Magic
          </motion.button>
        )}

        {/* Download Birthday Invitation */}
        <motion.a
          href="/baby/invitation.png"
          download="Sreshta-First-Birthday-Invitation.png"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#d9ad60] bg-gradient-to-r from-[#fff0d7] via-[#f8dced] to-[#fff0d7] px-6 py-2.5 font-body text-xs font-bold text-[#74347d] shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>↓</span>
          Download Birthday Invitation
        </motion.a>

      </div>
    </Scene>
  );
}
