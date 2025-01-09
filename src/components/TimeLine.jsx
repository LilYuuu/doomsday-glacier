import styles from "./Timeline.module.css";

function TimeLine({ sections, activeIndex, visible }) {
  const getActiveIndex = (section, idx) => {
    console.log(section);
    if (section && !section.showInTimeLine) {
      for (let i = idx - 1; i > 1; i--) {
        console.log("idx:", i);
        console.log(sections[i]);
        if (sections[i].showInTimeLine) {
          return i;
        }
      }
    }

    return activeIndex; // If no next section with true showInTimeLine, keep the active index
  };

  const activeIndexToUse = getActiveIndex(); // Calculate the correct active index
  return (
    <div
      className={`${styles.timeline} ${
        visible ? styles.visible : styles.hidden
      }`}
    >
      {sections.map((section, idx) =>
        section.showInTimeLine ? (
          <div key={section.id} className={styles.timelineItem}>
            <div
              className={`${styles.dot} ${
                styles[
                  activeIndex === idx || getActiveIndex(section, idx) === idx
                    ? "active"
                    : ""
                ]
              }`}
            />
            <div>
              <div className={styles.label}>{section.label}</div>
              {section.subtitle && (
                <div
                  className={`${styles.subtitle} ${
                    styles[activeIndex === idx ? "active" : ""]
                  }`}
                >
                  {section.subtitle}
                </div>
              )}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default TimeLine;
