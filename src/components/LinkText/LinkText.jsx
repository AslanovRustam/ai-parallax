import styles from "./link.module.css";

function LinkText({ text, style }) {
  return (
    <p className={styles.link} data-text={text} style={style}>
      {text}
    </p>
  );
}

export default LinkText;
