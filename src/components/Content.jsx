import styles from "./Content.module.css";

function Content({ sections, sectionRefs }) {
  return (
    <div className={styles.content}>
      {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={styles.section}
        >
          <div className={styles.textOverlay}>
            <h2>{section.label}</h2>
            <p>This is content for {section.label}.</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
