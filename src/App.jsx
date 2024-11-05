import styles from "./App.module.css";
import Content from "./components/Content";
import Timeline from "./components/TimeLine";
import { useEffect, useState, useRef } from "react";

const sections = [
  { id: "section1", label: "Start" },
  { id: "section2", label: "First Milestone" },
  { id: "section3", label: "Second Milestone" },
  { id: "section4", label: "Finale" },
];

function App() {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef([]);

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
      setActiveSection(sections[activeIndex].id);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className={styles.app}>
      <>
        <Timeline sections={sections} activeSection={activeSection} />
        <Content sections={sections} sectionRefs={sectionRefs} />
      </>
    </div>
  );
}

export default App;
