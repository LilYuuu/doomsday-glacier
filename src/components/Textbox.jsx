function Textbox(props) {
  const { children, viewportPosition, width } = props;
  return (
    <div
      style={{
        width: width || "100%",
        backgroundColor: "rgba(0, 0, 0, .5)",
        // border: "solid red 1px",
        borderRadius: "0.5rem",
        position: "relative",
        minWidth: "30vw",
        marginLeft: "4rem",
        padding: "1rem 3rem", // To offset slides a tiny bit from the left side of the screen
        top: `${viewportPosition}vh`,
        zIndex: "50",
      }}
    >
      <p
        style={{
          //   width: width || "100%",
          color: "white",
        }}
      >
        {children}
      </p>
    </div>
  );
}

export default Textbox;
