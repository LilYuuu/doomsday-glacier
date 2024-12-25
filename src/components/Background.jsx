import { useEffect, useRef, useState } from "react";
import styles from "./Background.module.css";
import BackgroundVideo from "./BackgroundVideo";
import BackgroundImage from "./BackgroundImage";

function Background({ sections, activeIndex, openingAnimationRef }) {
  return (
    <div className={styles.backgroundLayer}>
      {/* <BackgroundVideo
        section={sections[0]}
        name={`${styles.backgroundItem} ${
          activeIndex === 0 ? styles.active : ""
        }`}
      />
      <BackgroundVideo
        section={sections[1]}
        name={`${styles.backgroundItem} ${
          activeIndex === 1 ? styles.active : ""
        }`}
      />
      <BackgroundImage
        section={sections[2]}
        name={`${styles.backgroundItem}  ${
          activeIndex === 2 ? styles.active : ""
        }`}
      /> */}

      {sections.map((section, idx) => {
        if (!section.background) {
          return <></>;
        }
        if (section.background.type === "video") {
          return (
            <BackgroundVideo
              key={section.id}
              section={section}
              name={`${styles.backgroundItem} ${
                // section.id === activeSection ? styles.active : ""
                idx === activeIndex ? styles.active : ""
              }`}
              videoRef={idx === 3 ? openingAnimationRef : null}
            />
          );
        } else {
          return (
            <BackgroundImage
              key={section.id}
              section={section}
              name={`${styles.backgroundItem}  ${
                idx === activeIndex ? styles.active : ""
              }`}
            />
          );
        }
      })}
    </div>
  );
}

export default Background;
