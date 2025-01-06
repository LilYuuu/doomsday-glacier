/* eslint-disable react/no-unescaped-entities */
import { Scrollama, Step } from "react-scrollama";
import styles from "./ScrollamaContainer.module.css";
import Draggable from "./Draggable";
import VideoScrubber from "./VideoScrubber";
import Textbox from "./Textbox";
import AnimatedHeading from "./AnimatedHeading";
// import ScrollableVideoContainer from "./ScrollableVideoContainer";

function ScrollamaContainer({
  activeIndex,
  setActiveIndex,
  sections,
  openingAnimationRef,
  structureRef,
}) {
  const onStepEnter = ({ data }) => {
    setActiveIndex(data);
  };

  return (
    <>
      <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
        {/* <Step data={0}>
          <div id={sections[0].id} className={styles.section}>
            <div className={styles.textOverlay}>
              <h2>{sections[0].label}</h2>
              <p>This is content for {sections[0].label}.</p>
            </div>
          </div>
        </Step> */}

        {/* Opening Animation */}
        <Step data={0}>
          <div
            id={sections[0].id}
            className={styles.section}
            style={{ height: "1000vh" }}
          >
            <VideoScrubber
              videoRef={openingAnimationRef}
              contentContainerHeight={"1000vh"}
              id={"opening"}
            >
              {
                <>
                  <Textbox width={"30%"} xPosition={3} yPosition={50}>
                    Imagine a frozen behemoth so massive that its fate could
                    redraw the world's coastlines.
                  </Textbox>

                  <Textbox width={"30%"} xPosition={3} yPosition={400}>
                    Antarctica—a continent of ice—holds 90% of Earth's frozen
                    water, a staggering 30 million cubic kilometers of ice.
                  </Textbox>

                  <Textbox width={"30%"} xPosition={55} yPosition={500}>
                    At the heart of this frozen realm lies the Thwaites Glacier,
                    a colossal river of ice stretching 120 kilometers wide—the
                    widest glacier in Antarctica.
                  </Textbox>

                  <Textbox width={"30%"} xPosition={55} yPosition={650}>
                    The Thwaites Glacier covers an area nearly the size of Great
                    Britain and larger than the state of Florida. Its massive
                    scale makes it a key player in Antarctica's ice sheet
                    dynamics and global sea level rise.
                  </Textbox>
                </>
              }
            </VideoScrubber>
          </div>
        </Step>

        {/* Glacier Structure */}
        <Step data={1}>
          <div
            id={sections[1].id}
            className={styles.section}
            style={{ height: "600vh" }}
          >
            <VideoScrubber
              videoRef={structureRef}
              contentContainerHeight={"600vh"}
              id={"structure"}
            >
              <>
                <Textbox width={"30%"} xPosition={3} yPosition={50}>
                  To understand the rapid changes happening with Thwaites
                  Glacier, we need to look beneath its surface.
                  <br />
                  <br />
                  This 3D model reveals the Glacier's essential parts —its ice
                  tongue extending into the ocean, its grip on the seafloor, and
                  the critical grounding line where ice meets water.
                </Textbox>

                <Textbox width={"30%"} xPosition={55} yPosition={150}>
                  As the glacier flows toward the sea, it forms a floating ice
                  tongue—an extension of the glacier that projects out over the
                  ocean waters. Like a massive frozen pier, this floating
                  platform remains connected to the main glacier but no longer
                  touches the seafloor beneath it.
                </Textbox>

                <Textbox width={"30%"} xPosition={3} yPosition={225}>
                  Beneath the ice, Thwaites Glacier maintains its grip on
                  underwater mountains and ridges on the seafloor. This grip
                  acts like an anchor, helping to stabilize the massive glacier
                  and slow its movement toward the sea.
                </Textbox>

                <Textbox width={"30%"} xPosition={55} yPosition={400}>
                  Beneath the ice, Thwaites Glacier maintains its grip on
                  underwater mountains and ridges on the seafloor. This grip
                  acts like an anchor, helping to stabilize the massive glacier
                  and slow its movement toward the sea.
                </Textbox>
              </>
            </VideoScrubber>
          </div>
        </Step>

        {/* Timeline Begins */}
        <Step data={2}>
          <div
            id={sections[2].id}
            className={styles.section}
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              justifyContent: "center", // Centers content horizontally
            }}
          >
            <div
              style={{
                width: "35vw",
                // backgroundColor: "rgba(0, 0, 0, .5)",
                // border: "solid red 1px",
                // borderRadius: "0.5rem",
                position: "relative",
                minWidth: "30vw",
                marginLeft: "4rem",
                padding: "1rem 3rem", // To offset slides a tiny bit from the left side of the screen
                top: "20vh",
                // left: `${xPosition}vw`,
                zIndex: "50",
              }}
            >
              <hr />

              <AnimatedHeading>
                How Did Thwaites Glacier Begin to Fall Apart?
              </AnimatedHeading>
              <br />
              <p>
                2004 marked a critical turning point.
                <br />
                <br />
                Like a giant hand loosening its grip, the massive Thwaites
                Glacier began to detach from its underwater anchor—a seamount
                that had helped stabilize this colossal ice formation for
                thousands of years.
                <br />
                <br />
                This subtle but profound shift would prove to be the beginning
                of an accelerating transformation, as the glacier's hold on its
                ancient foundation started to weaken, setting the stage for what
                scientists would later recognize as a dramatic acceleration in
                its retreat.
              </p>
            </div>
          </div>
        </Step>

        <Step data={3}>
          <div id={sections[3].id} className={styles.section}>
            <Textbox width={"30%"} yPosition={75}>
              By 2014, the transformation became starkly visible from space.
            </Textbox>
          </div>
        </Step>
        <Step data={3}>
          <div id={sections[3].id} className={styles.section}>
            <Textbox width={"30%"}>
              Satellite imagery captured a dramatic performance of ice in
              motion—the massive ice tongue of Thwaites Glacier, a floating
              extension of the glacier stretching into the Amundsen Sea, began
              to show signs of increasing instability. Like a bridge slowly
              losing its support pillars, the ice tongue started to splinter and
              break apart.
            </Textbox>
          </div>
        </Step>
        <Step data={3}>
          <div id={sections[3].id} className={styles.section}>
            <Textbox width={"30%"}>
              This time-lapse reveals nature's raw power at work—years
              compressed into moments, showing how warming waters relentlessly
              carved away at the glacier's frozen architecture, weakening its
              structure year after year.
            </Textbox>
          </div>
        </Step>
        <Step data={4}>
          <div id={sections[4].id} className={styles.section}>
            <Draggable />
            <br />
            <br />
            <Textbox width={"30%"}>
              What took nature millennia to build vanished in less than two
              decades. By 2019, the massive ice tongue that once stretched
              proudly into the Amundsen Sea had virtually disappeared—a profound
              transformation you can witness by sliding between these two
              satellite images.
            </Textbox>
          </div>
        </Step>
        {/* <Step data={3}>
          <div id={sections[3].id} className={styles.section}>
            <Textbox width={"30%"}>
              In 2001, this floating extension of Thwaites stood as a solid,
              unified structure. But by 2019, where that mighty ice tongue once
              reached into the ocean, only fractured ice and open water
              remained. This stark before-and-after comparison reveals more than
              just a changing landscape—it shows us the rapid pace at which our
              warming world can reshape even the most monumental features of
              Antarctica.
            </Textbox>
          </div>
        </Step> */}
        <Step data={5}>
          <div id={sections[5].id} className={styles.section}>
            <div className={styles.textOverlay}>
              <h2>{sections[5].label}</h2>
              <p>This is content for {sections[5].label}.</p>
            </div>
          </div>
        </Step>
        <Step data={6}>
          <div id={sections[6].id} className={styles.section}>
            <div className={styles.textOverlay}>
              <h2>{sections[6].label}</h2>
              <p>This is content for {sections[6].label}.</p>
            </div>
          </div>
        </Step>
        <Step data={7}>
          <div id={sections[7].id} className={styles.section}>
            <div className={styles.textOverlay}>
              <h2>{sections[7].label}</h2>
              <p>This is content for {sections[7].label}.</p>
            </div>
          </div>
        </Step>
      </Scrollama>
    </>
  );
}

export default ScrollamaContainer;
