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
    id: "01",
    label: "glacier structure",
    background: {
      type: "video",
      src: "./assets/structure-output.mp4",
      play: false,
    },
  },
  {
    id: "02",
    label: "2004",
    background: { type: "fill", src: "#68757D", play: false },
  },
  {
    id: "03",
    label: "2014",
    background: {
      type: "video",
      src: "./assets/time-lapse-output.mp4",
      play: true,
    },
  },
  {
    id: "04",
    label: "2019",
    background: { type: "fill", src: "#68757D", play: false },
  },
  {
    id: "05",
    label: "melting factors",
    background: {
      type: "video",
      src: "./assets/factors-output.mp4",
      play: false,
    },
  },
  {
    id: "06",
    label: "Late 2019",
    background: {
      type: "fill",
      src: "#68757D",
      play: false,
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
  const structureRef = useRef(null);
  const factorsRef = useRef(null);

  return (
    <div className={styles.app}>
      <Background
        sections={sections}
        activeIndex={activeIndex}
        openingAnimationRef={openingAnimationRef}
        structureRef={structureRef}
        factorsRef={factorsRef}
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
        structureRef={structureRef}
        factorsRef={factorsRef}
      ></ScrollamaContainer>
    </div>
  );
}

export default App;
