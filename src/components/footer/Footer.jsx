import LinkText from "../LinkText/LinkText";
// Local
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.novigation}>
          <ul className={styles.list}>
            <li className={styles.item} data-text="Home">
              <a href="#">Home</a>
            </li>
            <li className={styles.item}>
              <a href="#leaderboard">Leaderboard</a>
            </li>
            <li className={styles.item}>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <div className={styles.devider}></div>
        <div className={styles.socials}>
          <ul className={styles.socialsList}>
            <li className={styles.socialItem}></li>
            <li className={styles.socialItem}></li>
            <li className={styles.socialItem}></li>
          </ul>
          <ul className={styles.list}>
            <li className={styles.item}>
              <LinkText text="Terms of Use" />
            </li>
            <li className={styles.item}>
              <LinkText text="Privacy Policy" />
            </li>
            <li className={styles.item}>
              <LinkText text="Cookie Policy" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
