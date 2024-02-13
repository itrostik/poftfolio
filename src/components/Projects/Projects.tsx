import next from "../../assets/next.svg";
import convex from "../../assets/convex.svg";
import typescript from "../../assets/ts.svg";
import scss from "../../assets/scss.svg";
import lucide from "../../assets/lucide.svg";
import react from "../../assets/react.svg";
import javascript from "../../assets/js.svg";
import axios from "../../assets/axios.svg";

import mono from "/mono.svg";
import rostikshop from "/rostikshop.svg";
import styles from "./Projects.module.scss";

const projects = [
  {
    name: "mono",
    title: "Онлайн монополия",
    link: "https://mono.lldan.ru/",
    description: "Командный проект",
    stack: [next, convex, typescript, scss, lucide],
    logo: mono,
    domain: "mono.lldan.ru",
    github: "https://github.com/lld4n/mono",
  },
  {
    name: "Rostik Shop",
    title: "Онлайн магазин",
    link: "https://shop.itrostik.ru/",
    description: "Онлайн магазин одежды",
    stack: [react, scss, javascript, axios],
    logo: rostikshop,
    domain: "shop.itrostik.ru",
    github: "https://github.com/itrostik/RostikShop",
  },
];

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
              <a href={project.github} className={styles.link}>
                Github
              </a>
              <a href={project.link} className={styles.link}>
                {project.domain}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
