import { useEffect, useRef, useState } from "react";
import styles from "./Background.module.css";
import BackgroundVideo from "./BackgroundVideo";
import BackgroundImage from "./BackgroundImage";

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
      <BackgroundVideo
        section={sections[0]}
        name={`${styles.backgroundItem} ${
          sections[0].id === activeSection ? styles.active : ""
        }`}
      />
      <BackgroundVideo
        section={sections[1]}
        name={`${styles.backgroundItem} ${
          sections[1].id === activeSection ? styles.active : ""
        }`}
      />
      {/* <BackgroundImage
        section={sections[2]}
        name={`${styles.backgroundItem}  ${
          sections[2].id === activeSection ? styles.active : ""
        }`}
      /> */}

      {/* {sections.map(function (section) {
        if (section.background.type === "video") {
          return (
            <BackgroundVideo
              key={section.id}
              source={section.background.src}
              ifPlay={section.background.play}
              name={`${styles.backgroundItem} ${
                section.id === activeSection ? styles.active : ""
              }`}
            />
          );
        } else {
          return (
            <BackgroundImage
              key={section.id}
              source={section.background.src}
              name={`${styles.backgroundItem}  ${
                section.id === activeSection ? styles.active : ""
              }`}
            />
          );
        }
      })} */}
    </div>
  );
}

export default Background;
