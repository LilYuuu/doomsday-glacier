import { useEffect, useRef, useState } from "react";
import styles from "./Background.module.css";

function Background({ sections, activeSection, background }) {
  const videoRef = useRef(null);
  const [fade, setFade] = useState(false);
  const [currentBg, setCurrentBg] = useState(background);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     if (background.play) {
  //       videoRef.current.play(); // Start playing the video
  //     } else {
  //       videoRef.current.pause(); // Pause the video
  //     }
  //   }
  // }, [background]);

  useEffect(() => {
    if (currentBg !== background) {
      setCurrentBg(background);
      // Start fade out
      setFade(true);

      // After a short delay, switch backgrounds and fade back in
      const fadeTimeout = setTimeout(() => {
        setCurrentBg(background);
        setFade(false);
      }, 500); // Adjust for fade duration

      return () => clearTimeout(fadeTimeout);
    }
  }, [background, currentBg]);

  return (
    <div className={styles.backgroundLayer}>
      {sections.map((section) =>
        section.background.type === "video" ? (
          <video
            key={section.id}
            className={`${styles.backgroundItem} ${
              section.id === activeSection ? styles.active : ""
            }`}
            ref={videoRef}
            autoPlay={section.background.play}
            muted
            loop
          >
            <source src={section.background.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            key={section.id}
            className={`${styles.backgroundItem}  ${
              section.id === activeSection ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${section.background.src})` }}
          />
        )
      )}
    </div>
  );
}

export default Background;
