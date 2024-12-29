import { useEffect, useState, useRef } from "react";
import styles from "./App.module.css";
import Background from "./components/Background";
// import Content from "./components/Content";
import Timeline from "./components/TimeLine";
// import Draggable from "./components/Draggable";
// import { Scrollama, Step } from "react-scrollama";
import ScrollamaContainer from "./components/ScrollamaContainer";

const sections = [
  {
    id: "00",
    label: "opening animation",
    background: { type: "video", src: "./assets/ice-output.mp4", play: false },
  },
  {
    id: "2004",
    label: "2004",
    background: { type: "video", src: "./assets/time-lapse.mp4", play: false },
  },
  {
    id: "2014",
    label: "2014",
    background: { type: "video", src: "./assets/time-lapse.mp4", play: true },
  },
  {
    id: "2019",
    label: "2019",
    background: { type: "fill", src: "#242424", play: false },
  },
  {
    id: "2022",
    label: "melting factors",
    background: { type: "video", src: "./assets/ice-output.mp4", play: false },
  },
  {
    id: "2024",
    label: "icefin research",
    background: {
      type: "video",
      src: "./assets/icefin-bg-output.mp4",
      play: true,
    },
  },
  {
    id: "2025",
    label: "icefin through borehole",
    background: {
      type: "video",
      src: "./assets/icefin-underwater-output.mp4",
      play: true,
    },
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const openingAnimationRef = useRef(null);

  return (
    <div className={styles.app}>
      <Background
        sections={sections}
        activeIndex={activeIndex}
        openingAnimationRef={openingAnimationRef}
      />

      <Timeline sections={sections} activeIndex={activeIndex} />

      <div
        style={{
          position: "fixed",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          borderRadius: "5px",
          zIndex: 10,
        }}
      >
        Current Step: {activeIndex !== null ? activeIndex + 1 : "None"}
      </div>

      {/* Scrollama Steps */}
      <ScrollamaContainer
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        sections={sections}
        openingAnimationRef={openingAnimationRef}
      ></ScrollamaContainer>
    </div>
  );
}

export default App;
