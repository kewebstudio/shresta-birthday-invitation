
import { useState } from "react";
import { motion } from "framer-motion";
import Scene from "../components/Scene";

const photos = [
  { src: "/baby/1.jpg", rotate: -6, delay: 0.3 },
  { src: "/baby/2.jpg", rotate: 3, delay: 0.5 },
  { src: "/baby/3.jpg", rotate: 6, delay: 0.7 },
  { src: "/baby/4.jpg", rotate: 5, delay: 0.9 },
  { src: "/baby/5.jpg", rotate: -3, delay: 1.1 },
  { src: "/baby/6.jpg", rotate: -6, delay: 1.3 },
];

const positions = [
  { left: "9%", top: "29%", width: "25%", height: "13%" },
  { left: "37.5%", top: "30%", width: "25%", height: "13%" },
  { left: "66%", top: "29%", width: "25%", height: "13%" },
  { left: "9%", top: "52%", width: "25%", height: "13%" },
  { left: "37.5%", top: "53%", width: "25%", height: "13%" },
  { left: "66%", top: "52%", width: "25%", height: "13%" },
];

const sparkles = [
  { left: "8%", top: "24%", delay: 0 },
  { left: "88%", top: "25%", delay: 0.6 },
  { left: "5%", top: "46%", delay: 1.1 },
  { left: "93%", top: "48%", delay: 0.3 },
  { left: "16%", top: "72%", delay: 1.5 },
  { left: "83%", top: "72%", delay: 0.9 },
  { left: "50%", top: "23%", delay: 1.8 },
];

function MemoryPhoto({ photo, index, position }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      className="absolute z-20 overflow-hidden rounded-[3px] border border-white/90 bg-[#fffaf3] p-[4px] shadow-[0_5px_18px_rgba(55,20,65,0.35)] sm:p-[7px]"
      style={{
        left: position.left,
        top: position.top,
        width: position.width,
        height: position.height,
      }}
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.7,
        rotate: photo.rotate - 8,
      }}
      animate={{
        opacity: 1,
        y: [0, -2, 0],
        scale: 1,
        rotate: photo.rotate,
      }}
      transition={{
        opacity: { duration: 0.6, delay: photo.delay },
        scale: { duration: 0.9, delay: photo.delay },
        rotate: { duration: 0.9, delay: photo.delay },
        y: {
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: photo.delay,
        },
      }}
      whileHover={{ scale: 1.07, zIndex: 40 }}
    >
      {error ? (
        <div className="flex h-full w-full items-center justify-center bg-pink-100 text-center text-[9px] text-purple-800">
          Photo {index + 1} not found
        </div>
      ) : (
        <img
          src={photo.src}
          alt={`Baby memory ${index + 1}`}
          draggable="false"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`h-full w-full rounded-[2px] object-cover object-center transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </motion.div>
  );
}

export default function Scene8({ onNext }) {
  return (
    <Scene
      sceneKey="scene-8"
      background="/scenes/scene-8.jpg"
      backgroundPosition="center"
      className="min-h-screen"
    >
      {/* Soft magical atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {sparkles.map((sparkle, index) => (
          <motion.span
            key={index}
            className="absolute text-sm text-[#fff5b5] sm:text-xl"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              textShadow: "0 0 8px #fff, 0 0 16px #f5b6ff",
            }}
            animate={{
              opacity: [0.2, 1, 0.3],
              scale: [0.7, 1.3, 0.7],
              y: [0, -12, 0],
              rotate: [0, 45, 90],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>
        ))}
      </div>

      {/* Centered heading */}
      <motion.div
        className="absolute left-0 top-[17%] z-30 flex w-full flex-col items-center px-3 text-center"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1
          className="font-heading text-xl font-bold text-white sm:text-4xl"
          style={{
            textShadow: "0 2px 5px #54215f, 0 0 12px #9a4caa",
          }}
        >
          Little Moments, Big Memories
        </h1>

        <p
          className="mt-1 font-elegant text-xs italic text-white sm:text-base"
          style={{ textShadow: "0 2px 5px #54215f" }}
        >
          A beautiful journey through my first year ✨
        </p>
      </motion.div>

      {/* Six photographs */}
      {photos.map((photo, index) => (
        <MemoryPhoto
          key={photo.src}
          photo={photo}
          index={index}
          position={positions[index]}
        />
      ))}

      {/* Magical glow around the memories */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[47%] z-10 h-16 w-[80%] rounded-full bg-pink-300/20 blur-2xl"
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Fixed centered message - no translate conflict */}
      <motion.div
        className="absolute inset-x-0 bottom-[12%] z-30 flex justify-center px-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.9 }}
      >
        <p
          className="w-full text-center font-elegant text-sm font-semibold italic text-white sm:text-xl"
          style={{
            textShadow: "0 2px 5px rgba(55,15,75,0.95), 0 0 10px #8b4a9c",
          }}
        >
          Every picture holds a little piece of my heart 💗
        </p>
      </motion.div>

      {/* Properly centered continue button */}
      <motion.div
        className="absolute inset-x-0 bottom-[4%] z-40 flex justify-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.button
          type="button"
          onClick={onNext}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-full border border-white/90 bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-100 px-7 py-2.5 font-body text-xs font-bold text-[#642477] shadow-[0_4px_20px_rgba(80,30,100,0.35)] sm:px-9 sm:py-3 sm:text-sm"
        >
          Discover the Celebration Venue ♡
        </motion.button>
      </motion.div>
    </Scene>
  );
}
