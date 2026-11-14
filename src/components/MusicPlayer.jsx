
import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const music = new Howl({
      src: ["/audio/birthday-music.mp3"],
      loop: true,
      volume: 0.4,
      preload: true,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
    });

    soundRef.current = music;

    return () => {
      music.stop();
      music.unload();
      soundRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    const music = soundRef.current;

    if (!music) return;

    if (music.playing()) {
      music.pause();
    } else {
      music.play();
    }
  };

  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      className="fixed right-4 top-4 z-[100] flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/80 text-purple-700 shadow-lg backdrop-blur-md transition-transform hover:scale-110"
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </button>
  );
}
