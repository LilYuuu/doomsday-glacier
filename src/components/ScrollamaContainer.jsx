import { Scrollama, Step } from "react-scrollama";
import styles from "./ScrollamaContainer.module.css";
import Draggable from "./Draggable";

function ScrollamaContainer({ setActiveIndex, sections }) {
  const onStepEnter = ({ data }) => {
    setActiveIndex(data);
  };

  return (
    <>
      <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
        <Step data={0}>
          <div id={sections[0].id} className={styles.section}>
            <div className={styles.textOverlay}>
              <h2>{sections[0].label}</h2>
              <p>This is content for {sections[0].label}.</p>
            </div>
          </div>
        </Step>
        <Step data={1}>
          <div id={sections[1].id} className={styles.section}>
            <div className={styles.textOverlay}>
              <h2>{sections[1].label}</h2>
              <p>This is content for {sections[1].label}.</p>
            </div>
          </div>
        </Step>
        <Step data={2}>
          <div id={sections[2].id} className={styles.section}>
            <Draggable />
          </div>
        </Step>
        <Step data={3}>
          <div id={sections[3].id} className={styles.section}>
            <div className={styles.textOverlay}>
              <h2>{sections[3].label}</h2>
              <p>This is content for {sections[3].label}.</p>
            </div>
          </div>
        </Step>
      </Scrollama>
    </>
  );
}

export default ScrollamaContainer;
