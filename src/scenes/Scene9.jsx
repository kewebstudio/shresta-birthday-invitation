
import { motion } from "framer-motion";
import Scene from "../components/Scene";
import birthdayData from "../data/birthdayData";

export default function Scene9({ onNext }) {
  const { birthday } = birthdayData;

  return (
    <Scene
      sceneKey="scene-9"
      background="/scenes/scene-9.jpg"
      backgroundPosition="center"
      className="min-h-screen"
    >
      {/* All information inside the white panel, below the pin */}
      <div className="absolute inset-x-0 top-[51%] z-20 flex justify-center px-4">
        <motion.div
          className="flex w-[76%] flex-col items-center text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="font-elegant text-[9px] font-semibold uppercase tracking-[0.2em] text-[#98602f] sm:text-xs">
            Celebration Venue
          </p>

          <h2 className="mt-1 w-full break-words font-heading text-base font-bold leading-tight text-[#873477] sm:text-2xl">
            {birthday.venue}
          </h2>

          <p className="mt-1 w-full break-words font-elegant text-[11px] text-[#70436f] sm:text-sm">
            {birthday.address}
          </p>

          <div className="my-3 h-px w-3/4 bg-[#d5ad70]" />

          <div className="grid w-full grid-cols-2 gap-2">
            <div>
              <p className="font-elegant text-[9px] uppercase tracking-widest text-[#98602f]">
                Date
              </p>
              <p className="mt-1 font-heading text-[11px] font-semibold text-[#873477] sm:text-sm">
                {birthday.date}
              </p>
            </div>

            <div>
              <p className="font-elegant text-[9px] uppercase tracking-widest text-[#98602f]">
                Time
              </p>
              <p className="mt-1 font-heading text-[11px] font-semibold text-[#873477] sm:text-sm">
                {birthday.time}
              </p>
            </div>
          </div>

          <p className="mt-3 font-elegant text-[11px] italic text-[#873477] sm:text-sm">
            We can't wait to celebrate with you ♡
          </p>
        </motion.div>
      </div>

      {/* Button centered in the bottom empty space */}
      <div className="absolute inset-x-0 bottom-[7%] z-30 flex justify-center px-3">
        <motion.button
          type="button"
          onClick={onNext}
          className="rounded-full border border-[#e5c47e] bg-gradient-to-r from-[#fff0d7] via-[#f8dced] to-[#fff0d7] px-6 py-2.5 font-body text-xs font-semibold text-[#74347d] shadow-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Me for the Grand Finale ♡
        </motion.button>
      </div>
    </Scene>
  );
}
