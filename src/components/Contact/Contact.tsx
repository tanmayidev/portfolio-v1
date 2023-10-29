import styles from "./Contact.module.css";
import { getImageUrl } from "../../util";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <span>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </span>
          <a href="mailto:tanmayi.dev@gmail.com">tanmayi.dev@gmail.com</a>
        </li>
        <li className={styles.link}>
          <span>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </span>
          <a href="https://www.linkedin.com/in/tanmayi-d-a875ba1a4/">
            linkedin.com/in/tanmayi-d-a875ba1a4/
          </a>
        </li>
        <li className={styles.link}>
          <span>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
          </span>
          <a href="https://www.github.com/tanmayidev">github.com/tanmayidev</a>
        </li>
      </ul>
    </footer>
  );
};
