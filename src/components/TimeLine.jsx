import styles from "./Timeline.module.css";

function TimeLine({ sections, activeIndex }) {
  return (
    <div className={styles.timeline}>
      {sections.map((section, idx) => (
        <div key={section.id} className={styles.timelineItem}>
          <div
            className={`${styles.dot} ${
              styles[activeIndex === idx ? "active" : ""]
            }`}
          />
          {section.label}
        </div>
      ))}
    </div>
  );
}

export default TimeLine;
