import Image from "next/image";
// import RoundnetBall from "../../images/ball.png";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero} id="introduccion">
      <div className={styles["hero_content"]}>
        <h2>Roundnet</h2>
        <h3>Masters</h3>
        <h4>Costa Rica</h4>
        <div className={styles["hero_cta"]}>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Unirse
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
