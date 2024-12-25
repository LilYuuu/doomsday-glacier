/* eslint-disable react/no-unescaped-entities */
import { Scrollama, Step } from "react-scrollama";
import styles from "./ScrollamaContainer.module.css";
import Draggable from "./Draggable";
import VideoScrubber from "./VideoScrubber";
import Textbox from "./Textbox";
// import ScrollableVideoContainer from "./ScrollableVideoContainer";

function ScrollamaContainer({
  activeIndex,
  setActiveIndex,
  sections,
  openingAnimationRef,
}) {
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
          <div
            id={sections[3].id}
            className={styles.section}
            style={{ height: "500vh" }}
          >
            {/* {activeIndex === 3 && ( */}
            <VideoScrubber
              videoRef={openingAnimationRef}
              contentContainerHeight={"500vh"}
            >
              {
                <>
                  <Textbox width={"30%"} viewportPosition={50}>
                    Imagine a frozen behemoth so massive that its fate could
                    redraw the world's coastlines.
                  </Textbox>

                  <Textbox width={"30%"} viewportPosition={150}>
                    Antarctica—a continent of ice—holds 90% of Earth's frozen
                    water, a staggering 30 million cubic kilometers of ice.
                  </Textbox>

                  <Textbox width={"30%"} viewportPosition={350}>
                    At the heart of this frozen realm lies the Thwaites Glacier,
                    a colossal river of ice stretching 120 kilometers wide—the
                    widest glacier in Antarctica.
                  </Textbox>
                </>
              }
            </VideoScrubber>
            {/* )} */}
          </div>
        </Step>
        <Step data={4}>
          <div id={sections[4].id} className={styles.section}>
            <div className={styles.textOverlay}>
              <h2>{sections[4].label}</h2>
              <p>This is content for {sections[4].label}.</p>
            </div>
          </div>
        </Step>
      </Scrollama>
    </>
  );
}

export default ScrollamaContainer;
