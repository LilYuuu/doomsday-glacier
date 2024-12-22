import { useRef } from "react";
import { Scrollama, Step } from "react-scrollama";
import styles from "./ScrollamaContainer.module.css";
import Draggable from "./Draggable";

function ScrollamaContainer({ setActiveIndex, sections }) {
  const sectionRefs = useRef([]);

  const onStepEnter = ({ data }) => {
    setActiveIndex(data);
  };

  return (
    <>
      <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
        <Step data={0}>
          <div
            id={sections[0].id}
            ref={(el) => (sectionRefs.current[0] = el)}
            className={styles.section}
          >
            <div className={styles.textOverlay}>
              <h2>{sections[0].label}</h2>
              <p>This is content for {sections[0].label}.</p>
            </div>
          </div>
        </Step>
        <Step data={1}>
          <div
            id={sections[1].id}
            ref={(el) => (sectionRefs.current[1] = el)}
            className={styles.section}
          >
            <div className={styles.textOverlay}>
              <h2>{sections[1].label}</h2>
              <p>This is content for {sections[1].label}.</p>
            </div>
          </div>
        </Step>
        <Step data={2}>
          <div
            id={sections[2].id}
            ref={(el) => (sectionRefs.current[2] = el)}
            className={styles.section}
          >
            <Draggable />
          </div>
        </Step>
      </Scrollama>
    </>
  );
}

export default ScrollamaContainer;
