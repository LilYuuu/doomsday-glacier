import styles from "./BackgroundImage.module.css";

function BackgroundImage({ section, name }) {
  const source = section.background.src;
  //   return <div className={name} style={{ backgroundImage: `url(${source})` }} />;
  return (
    <div className={name}>
      <img src={source} alt="" />
    </div>
  );
}

export default BackgroundImage;
