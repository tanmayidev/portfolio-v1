import { getImageUrl } from "../../util";
import styles from "./ProjectCard.module.css";

interface IProject {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
}

interface IProjectCard {
  project: IProject;
}

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}: IProjectCard) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a
          href={demo}
          className={`${styles.link} ${demo === "" ? styles.disabled : ""}`}
          target="_blank"
        >
          Demo
        </a>
        <a
          href={source}
          className={`${styles.link} ${source === "" ? styles.disabled : ""}`}
          target="_blank"
        >
          Source
        </a>
      </div>
    </div>
  );
};
