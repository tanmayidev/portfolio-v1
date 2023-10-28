import { getImageUrl } from "../../util";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
      </div>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              Frontend developer with experience in building responsive and
              optimized sites
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>
              Backend developer with experience in developing fast and optimized
              back-end systems and APIs
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
          <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>
              I have designed multiple pages and have designed systems as well
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
