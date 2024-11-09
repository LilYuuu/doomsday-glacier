import styles from "./App.module.css";
import Background from "./components/Background";
import Content from "./components/Content";
import Draggable from "./components/Draggable";
import Timeline from "./components/TimeLine";
import { useEffect, useState, useRef } from "react";

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
];

function App() {
  const [activeSection, setActiveSection] = useState("2004");
  const sectionRefs = useRef([]);
  const [background, setBackground] = useState(sections[0].background);

  function handleScroll() {
    const offsets = sectionRefs.current.map(
      (ref) => ref.getBoundingClientRect().top
    );
    const activeIndex = offsets.findIndex((offset, index) => {
      const nextOffset = offsets[index + 1];
      return (
        offset <= window.innerHeight / 2 &&
        (!nextOffset || nextOffset > window.innerHeight / 2)
      );
    });

    if (activeIndex !== -1 && sections[activeIndex].id !== activeSection) {
      const activeBackground = sections[activeIndex].background;
      setActiveSection(sections[activeIndex].id);
      setBackground(activeBackground);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className={styles.app}>
      <Background
        sections={sections}
        activeSection={activeSection}
        background={background}
      />
      <Content sections={sections} sectionRefs={sectionRefs} />

      <Timeline sections={sections} activeSection={activeSection} />
    </div>
  );
}

export default App;
