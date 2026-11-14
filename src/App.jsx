
import { useCallback, useState } from "react";

import MusicPlayer from "./components/MusicPlayer";

import Scene1 from "./scenes/Scene1";
import Scene4 from "./scenes/Scene4";
import Scene5 from "./scenes/Scene5";
import Scene6 from "./scenes/Scene6";
import Scene8 from "./scenes/Scene8";
import Scene9 from "./scenes/Scene9";
import Scene10 from "./scenes/Scene10";

import birthdayData from "./data/birthdayData";

import "./App.css";

// Scene 7 removed because countdown is now inside Scene6
const sceneOrder = [1, 4, 5, 6, 8, 9, 10];

export default function App() {
  const [currentScene, setCurrentScene] = useState(1);

  const handleNext = useCallback(() => {
    setCurrentScene((previous) => {
      const currentIndex = sceneOrder.indexOf(previous);

      if (currentIndex === -1 || currentIndex === sceneOrder.length - 1) {
        return previous;
      }

      return sceneOrder[currentIndex + 1];
    });
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentScene(1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="app relative min-h-screen min-h-[100dvh] w-full overflow-hidden">
      <MusicPlayer autoPlay={false} />

      {/* Scene 1 - Fairy Entrance */}
      {currentScene === 1 && (
        <Scene1 onNext={handleNext} />
      )}

      {/* Scene 4 - Birthday Invitation */}
      {currentScene === 4 && (
        <Scene4 onNext={handleNext} />
      )}

      {/* Scene 5 - Baby Portrait */}
      {currentScene === 5 && (
        <Scene5
          babyName={birthdayData.baby.name}
          photoSrc="/baby/5.jpg"
          onNext={handleNext}
        />
      )}

      {/* Scene 6 - Birthday Message + Interactive Countdown */}
      {currentScene === 6 && (
        <Scene6 onNext={handleNext} />
      )}

      {/* Scene 8 - Six Baby Memories */}
      {currentScene === 8 && (
        <Scene8 onNext={handleNext} />
      )}

      {/* Scene 9 - Birthday Venue */}
      {currentScene === 9 && (
        <Scene9 onNext={handleNext} />
      )}

      {/* Scene 10 - Thank You Finale */}
      {currentScene === 10 && (
        <Scene10 onRestart={handleRestart} />
      )}
    </main>
  );
}
