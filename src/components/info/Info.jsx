import Button from "../button/Button";
import Title from "../title/Title";
// Local
import styles from "./info.module.css";

function Info() {
  return (
    <div className={styles.container} id="about">
      <Title text="Crowdsourcing our collective intelligence to build the best AI" />

      <p className={styles.subtitle}>
        Open source AI has been lagging behind the likes of Google and OpenAI by
        billions of dollars.<br></br>
        <br></br> Salt aims to solve that by rewarding open source developers
        who contribute to the democratization of AI. We run competitions between
        AI models to find and reward the best AI models. As a result, our users
        will be able to access the latest cutting edge AI models.
      </p>
      <Button
        text="Use The Cutting Edge AI"
        style={{
          fontSize: "24px",
          fontWeight: "500",
          padding: "24px 48px",
          width: "fit-content",
        }}
      />
    </div>
  );
}

export default Info;
