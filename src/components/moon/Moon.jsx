import Image from "next/image";
// Components
import Button from "../button/Button";
import Title from "../title/Title";
// Image
import moon from "../../../public/image/moon.png";
// Local
import styles from "./moon.module.css";

function Moon() {
  return (
    <div className={styles.container}>
      <div className={styles.rightSide}>
        <Title text="Text here" style={{ fontSize: "2.5rem" }} />
        <p className={styles.subTitle}>
          Every month, we run a competition between all the AI models submitted
          on a leaderboard. The best model will be featured and will earn
          tokens.
        </p>
        <Button
          text="Read Whitepaper"
          style={{
            fontSize: "1.04rem",
            fontWeight: "500",
            padding: "1.25rem 2.5rem",
            width: "fit-content",
          }}
        />
      </div>
      <div className={styles.lefttSide}>
        <Image src={moon} alt="moon" />
      </div>
    </div>
  );
}

export default Moon;
