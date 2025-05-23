import Title from "../title/Title";
// Image
import Solana from "../../../public/icon/solana.svg";
import Arweave from "../../../public/icon/arweave.svg";
import Bittensor from "../../../public/icon/bittensor.svg";
import Red from "../../../public/icon/red.svg";
import Tg from "../../../public/icon/tg.svg";
// Local
import styles from "./projects.module.css";

function Projects({ projectRef }) {
  return (
    <div className={styles.container}>
      <Title
        text="Projects integrated into the Arrakis AI Ecosystem"
        style={{ textAlign: "center", marginBottom: "2.55rem" }}
      />
      <div className={styles.list} ref={projectRef}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Solana className={styles.icon} />
          </li>
          <li className={styles.item}>
            <Arweave className={styles.icon} />
          </li>
          <li className={styles.item}>
            <Bittensor className={styles.icon} />
          </li>
          <li className={styles.item}>
            <Red className={styles.icon} />
          </li>
          <li className={styles.item}>
            <Tg className={styles.icon} />
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Solana className={styles.icon} />
          </li>
          <li className={styles.item}>
            <Arweave className={styles.icon} />
          </li>
          <li className={styles.item}>
            <Bittensor className={styles.icon} />
          </li>
          <li className={styles.item}>
            <Red className={styles.icon} />
          </li>
          <li className={styles.item}>
            <Tg className={styles.icon} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
