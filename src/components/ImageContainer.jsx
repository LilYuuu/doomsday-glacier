function ImageContainer({ src, caption }) {
  return (
    <div
      style={{
        width: "50vw",
        position: "relative",
        padding: "1rem 3rem", // To offset slides a tiny bit from the left side of the screen
        zIndex: "50",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centers content vertically
        justifyContent: "center", // Centers content horizontally
      }}
    >
      <img src={src} style={{ width: "100%", height: "auto" }}></img>
      <p>{caption}</p>
    </div>
  );
}

export default ImageContainer;
