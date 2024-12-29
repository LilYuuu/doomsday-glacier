/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Textbox from "./Textbox";

gsap.registerPlugin(ScrollTrigger);

function VideoScrubber({ videoRef, contentContainerHeight, children }) {
  useEffect(() => {
    const video = videoRef.current;

    const handleVideoMetadata = () => {
      if (video) {
        const videoDuration = video.duration;
        const frameRate = 30; // Adjust to your video's actual frame rate
        const totalFrames = Math.round(videoDuration * frameRate);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".scroll-content",
            start: "top top",
            end: "bottom+=1 bottom",
            scrub: true,
            markers: true,
            // onUpdate: (self) => {
            //   console.log("Scroll Progress:", self.progress); // Dynamically log the progress
            // },
          },
        });

        // Access the ScrollTrigger instance
        // const scrollTriggerInstance = tl.scrollTrigger;

        // Log the progress
        // console.log(scrollTriggerInstance.progress);

        // Map scroll to frame numbers
        tl.to(
          {},
          {
            progress: 1,
            onUpdate: () => {
              const scrollProgress = tl.scrollTrigger.progress;
              const currentFrame = Math.round(scrollProgress * totalFrames);
              const currentTime = currentFrame / frameRate;

              // Update the video time without skipping frames
              if (video.currentTime !== currentTime) {
                video.currentTime = currentTime;
              }
            },
          }
        );
      }
    };

    if (video.readyState >= 1) {
      handleVideoMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleVideoMetadata);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleVideoMetadata);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="scroll-content"
      style={{
        height:
          contentContainerHeight /* Adjust the height of the content to make it scrollable */,
        //   background: "#f0f0f0",
      }}
    >
      <div id="textbox-container">{children}</div>
    </div>
  );
}

export default VideoScrubber;
