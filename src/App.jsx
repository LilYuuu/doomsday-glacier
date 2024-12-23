import styles from "./App.module.css";
import Background from "./components/Background";
// import Content from "./components/Content";
import Timeline from "./components/TimeLine";
// import Draggable from "./components/Draggable";
import { useEffect, useState } from "react";
// import { Scrollama, Step } from "react-scrollama";
import ScrollamaContainer from "./components/ScrollamaContainer";

const sections = [
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
    background: { type: "image", src: "./assets/slider-2001.png", play: false },
  },
  {
    id: "2022",
    label: "2022",
    background: {},
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.app}>
      <Background sections={sections} activeIndex={activeIndex} />
      {/* <Content sections={sections} sectionRefs={sectionRefs} /> */}

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
        setActiveIndex={setActiveIndex}
        sections={sections}
      ></ScrollamaContainer>
    </div>
  );
}

export default App;
