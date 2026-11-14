
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Scene from "../components/Scene";
import birthdayData from "../data/birthdayData";

function getBirthdayTarget(targetDate) {
  const birthday = birthdayData.birthday;

  // Use an explicitly supplied target date if valid.
  if (targetDate) {
    const suppliedDate = new Date(targetDate);
    if (!Number.isNaN(suppliedDate.getTime())) {
      return suppliedDate;
    }
  }

  // Otherwise build the target from birthdayData.js.
  if (birthday.dateTime) {
    const savedDate = new Date(birthday.dateTime);
    if (!Number.isNaN(savedDate.getTime())) {
      return savedDate;
    }
  }

  const cleanTime = (birthday.time || "").replace(/\s*onwards/i, "").trim();
  const combinedDate = new Date(`${birthday.date} ${cleanTime}`);

  return Number.isNaN(combinedDate.getTime()) ? null : combinedDate;
}

function getTimeLeft(targetDate) {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Scene6({ onNext, targetDate }) {
  const [revealed, setRevealed] = useState(false);

  const birthdayTarget = getBirthdayTarget(targetDate);

  const [timeLeft, setTimeLeft] = useState(() =>
    birthdayTarget ? getTimeLeft(birthdayTarget) : null
  );

  useEffect(() => {
    if (!revealed || !birthdayTarget) return;

    const updateCountdown = () => {
      setTimeLeft(getTimeLeft(birthdayTarget));
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [revealed, targetDate, birthdayTarget?.getTime()]);

  const countdownItems = [
    { label: "Days", value: timeLeft?.days },
    { label: "Hours", value: timeLeft?.hours },
    { label: "Minutes", value: timeLeft?.minutes },
    { label: "Seconds", value: timeLeft?.seconds },
  ];

  return (
    <Scene
      sceneKey="scene-6"
      background="/scenes/scene-6.jpg"
      backgroundPosition="center"
      className="min-h-screen"
    >
      {/* Interactive content - positioned inside the white plaque */}
      <div
        className="absolute z-20 flex items-center justify-center"
        style={{
          left: "14%",
          width: "72%",
          top: "48%",
          height: "25%",
        }}
      >
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col items-center text-center"
            >
              <p className="font-elegant text-[clamp(15px,4vw,21px)] italic text-[#91418c]">
                A little surprise awaits...
              </p>

              <motion.button
                type="button"
                onClick={() => setRevealed(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
                animate={{
                  boxShadow: [
                    "0 0 5px rgba(235,160,210,0.2)",
                    "0 0 18px rgba(235,160,210,0.6)",
                    "0 0 5px rgba(235,160,210,0.2)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
                className="mt-4 rounded-full border border-[#d9a84f] bg-gradient-to-r from-[#fff0d7] via-[#f9dced] to-[#fff0d7] px-6 py-2.5 font-body text-xs font-semibold text-[#843b83] shadow-md"
              >
                ✨ Tap to Reveal the Date ✨
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="countdown"
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex w-full flex-col items-center text-center"
            >
              <p className="font-elegant text-[clamp(9px,2.5vw,12px)] font-semibold uppercase tracking-[0.18em] text-[#a66a37]">
                SAVE THE DATE
              </p>

              <h2 className="mt-1 font-heading text-[clamp(19px,5.5vw,27px)] font-bold italic leading-tight text-[#963b88]">
                {birthdayData.birthday.date}
              </h2>

              <p className="mt-1 font-elegant text-[clamp(11px,3vw,15px)] font-semibold text-[#80508d]">
                {birthdayData.birthday.time}
              </p>

              {/* Compact countdown - above the lower frame decoration */}
              {birthdayTarget ? (
                <div className="mt-2 grid w-full grid-cols-4 gap-1">
                  {countdownItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.1 }}
                      className="flex min-w-0 flex-col items-center justify-center rounded-lg border border-[#e8c98c] bg-white/85 px-0.5 py-1.5 shadow-sm"
                    >
                      <span className="font-heading text-[clamp(16px,4.5vw,23px)] font-bold leading-none tabular-nums text-[#bd478e]">
                        {String(item.value).padStart(2, "0")}
                      </span>

                      <span className="mt-1 text-[clamp(6px,1.8vw,9px)] font-semibold uppercase tracking-wide text-[#80508d]">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-xs text-red-600">
                  Please check the date and time in birthdayData.js.
                </p>
              )}

              <p className="mt-2 font-elegant text-[clamp(10px,2.8vw,13px)] italic text-[#91418c]">
                A magical day awaits ✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Next button - separate from the white plaque */}
      <div className="absolute inset-x-0 bottom-[8%] z-30 flex justify-center px-4">
        <motion.button
          type="button"
          onClick={onNext}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-full border border-amber-300 bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-100 px-6 py-2.5 font-body text-xs font-semibold text-purple-800 shadow-lg"
        >
          See My Little Memories ♡
        </motion.button>
      </div>
    </Scene>
  );
}
