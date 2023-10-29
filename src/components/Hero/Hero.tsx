import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tanmayi</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1+ years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:tanmayi.dev@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage1.png")}
        alt="Hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
