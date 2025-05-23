import Button from "../button/Button";
// Local
import styles from "./header.module.css";

function Header() {
  return (
    <>
      <nav className={styles.navigation} id="home">
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.text} data-text="LLM Leaderboard">
              <a href="#leaderboard">LLM Leaderboard</a>
            </p>
          </li>
          <li className={styles.item}>
            <Button text="Buy Spice AI" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
