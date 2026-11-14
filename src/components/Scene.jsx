
import { motion } from "framer-motion";

export default function Scene({
  background,
  children,
  sceneKey,
  className = "",
  backgroundPosition = "center",
}) {
  return (
    <motion.section
      key={sceneKey}
      className={`relative h-screen min-h-screen w-full overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Full-screen background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("${background}")`,
          backgroundPosition,
        }}
      />

      {/* Content layer */}
      <div className="absolute inset-0 z-10">
        {children}
      </div>
    </motion.section>
  );
}
