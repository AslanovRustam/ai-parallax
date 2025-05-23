import styles from "./title.module.css";

function Title({ text, style }) {
  return (
    <h2 className={styles.title} style={style}>
      {text}
    </h2>
  );
}

export default Title;
