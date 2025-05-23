import styles from "./badge.module.css";

function Badge({ bigText, smallText }) {
  return (
    <div className={`${styles.container} gsap-badge`}>
      <p className={styles.bigText}>{bigText}</p>
      <p className={styles.smallText}>{smallText}</p>
    </div>
  );
}

export default Badge;
