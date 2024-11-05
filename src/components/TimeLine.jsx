import styles from "./Timeline.module.css";

function TimeLine({ sections, activeSection }) {
  return (
    <div className={styles.timeline}>
      {sections.map((section) => (
        <div key={section.id} className={styles.timelineItem}>
          <div
            className={`${styles.dot} ${
              styles[activeSection === section.id ? "active" : ""]
            }`}
          />
          {section.label}
        </div>
      ))}
    </div>
  );
}

export default TimeLine;
