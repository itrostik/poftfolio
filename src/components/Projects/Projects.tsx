import styles from "./Projects.module.scss";
import { projects } from "../../constants/projects.ts";

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <h1>Мои проекты</h1>
      <div className={styles.projects}>
        {projects.map((project) => (
          <div className={styles.project}>
            <img src={project.logo} alt="" className={styles.logo} />
            <span className={styles.name}>{project.name}</span>
            <span className={styles.title}>{project.title}</span>
            <span className={styles.description}>{project.description}</span>
            <div className={styles.stack}>
              {project.stack.map((tech) => (
                <img src={tech} alt="" className={styles.tech} />
              ))}
            </div>
            <div className={styles.links}>
              {project.github ? (
                <>
                  <a href={project.github} className={styles.link}>
                    Github
                  </a>
                  <a href={project.link} className={styles.link}>
                    {project.domain}
                  </a>
                </>
              ) : (
                <span>Если нужно подробнее — напишите</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
