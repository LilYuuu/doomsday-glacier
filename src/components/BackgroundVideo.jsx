import styles from "./BackgroundVideo.module.css";
import { useEffect } from "react";

function BackgroundVideo({ section, name, videoRef }) {
  const ifPlay = section.background.play;
  const source = section.background.src;

  useEffect(() => {
    const loadVideo = () => {
      if (videoRef?.current) {
        try {
          videoRef.current.load();
        } catch (error) {
          console.warn("Error loading video:", error);
        }
      }
    };

    // Try loading immediately if ref is available
    loadVideo();

    // Set a short timeout as fallback if ref isn't immediately available
    const timeoutId = setTimeout(loadVideo, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`${styles.videoContainer} ${name}`}>
      <video
        ref={videoRef}
        autoPlay={ifPlay}
        muted
        loop
        playsInline
        preload="metdata"
      >
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;
