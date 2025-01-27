import styles from "./Textbox.module.css";

function Textbox(props) {
  const { isMobile, children, position = "left", yPosition, width } = props;

  // const textboxStyle = {
  //   // width: isMobile ? "100vw" : width || "30vw",
  //   minWidth: "30vw",
  //   maxWidth: isMobile ? "100%" : width || "30vw", // Constrain width on mobile
  //   width: "fit-content", // Allow content to determine width up to maxWidth
  //   // width: width || "100%",
  //   backgroundColor: "rgba(0, 0, 0, .5)",
  //   borderRadius: "0.5rem",
  //   position: "relative",
  //   padding: isMobile ? "0.5rem 1rem" : "2rem", // Reduced padding on mobile

  //   top: `${yPosition}vh`,
  //   zIndex: "50",

  //   marginLeft: isMobile ? "1rem" : position === "left" ? "4rem" : "auto",
  //   marginRight: isMobile ? "1rem" : position === "right" ? "4rem" : "auto",
  // };

  const textStyle = {
    color: "white",
  };

  return (
    // <div style={containerStyle}>
    <div
      className={styles.textContainer}
      style={{
        top: `${yPosition}vh`,
        marginLeft: position === "left" ? "4rem" : "auto",
        marginRight: position === "right" ? "4rem" : "auto",
      }}
    >
      <p style={textStyle}>{children}</p>
    </div>
    // </div>
  );
}

export default Textbox;

// function Textbox(props) {
//   const { children, position = "left", yPosition, width } = props;
//   // console.log("yPosition:", yPosition);

//   const containerStyle = {
//     width: "100vw",
//     display: "flex",
//     justifyContent: "center", // Center horizontally
//     boxSizing: "border-box",
//   };

//   // Create separate style objects for mobile and desktop
//   const mobileStyles = {
//     width: "100vw",
//     backgroundColor: "rgba(0, 0, 0, .5)",
//     borderRadius: "0.5rem",
//     padding: "1.5rem",
//     position: "relative",
//     top: `${yPosition}vh`,
//     zIndex: "50",
//   };

//   const desktopStyles = {
//     width: width || "30vw",
//     backgroundColor: "rgba(0, 0, 0, .5)",
//     borderRadius: "0.5rem",
//     padding: "3rem",
//     position: "relative",
//     top: `${yPosition}vh`,
//     zIndex: "50",
//     marginLeft: position === "left" ? "4rem" : "auto",
//     marginRight: position === "right" ? "4rem" : "auto",
//   };

//   // Create separate stylesheet instead of inline styles
//   const styleSheet = `
//     .textbox {
//       width: 100vw;
//       background-color: rgba(0, 0, 0, .5);
//       border-radius: 0.5rem;
//       padding: 1.5rem;
//       margin: 1rem;
//       box-sizing: border-box;
//       position: relative;
//       top: ${yPosition}vh;
//     }

//     /* Desktop styles */
//     @media screen and (min-width: 768px) {
//       .textbox {
//         width: ${width || "30vw"};
//         padding: 2rem;
//         margin-left: ${position === "left" ? "4rem" : "auto"};
//         margin-right: ${position === "right" ? "4rem" : "auto"};
//         position: relative;
//         top: ${yPosition}vh;
//       }
//     }
//   `;

//   return (
//     <>
//       <style>{styleSheet}</style>
//       <div style={containerStyle}>
//         <div className="textbox">{children}</div>
//       </div>
//     </>
//   );
// }

// export default Textbox;
