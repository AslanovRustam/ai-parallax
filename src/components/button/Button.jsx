import styles from "./button.module.css";

function Button({ type = "button", text, onClick, style }) {
  return (
    <button
      type={type}
      onClick={onClick ? onClick : undefined}
      className={styles.button}
      style={style}
    >
      {text}
    </button>
  );
}

export default Button;
