import styles from "./Stack.module.scss";

import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import scss from "../../assets/scss.svg";
import js from "../../assets/js.svg";
import ts from "../../assets/ts.svg";
import react from "../../assets/react.svg";
import next from "../../assets/next.svg";
import axios from "../../assets/axios.svg";
import redux from "../../assets/redux.svg";
import express from "../../assets/express.svg";
import nest from "../../assets/nest.svg";
import firebase from "../../assets/firebase.svg";
import convex from "../../assets/convex.svg";
import tailwind from "../../assets/tailwind.svg";
import postgresql from "../../assets/postgresql.svg";
import prettier from "../../assets/prettier.svg";
import eslint from "../../assets/eslint.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import jwt from "../../assets/jwt.svg";
import yarn from "../../assets/yarn.svg";
import npm from "../../assets/npm.svg";
import pnpm from "../../assets/pnpm.svg";
import prisma from "../../assets/prisma.svg";
import lucide from "../../assets/lucide.svg";
import vite from "../../assets/vite.svg";
import webpack from "../../assets/webpack.svg";
import gulp from "../../assets/gulp.svg";

const stack = [
  {
    title: "HTML",
    logo: html,
    link: "https://doka.guide/html/",
  },
  { title: "CSS", logo: css, link: "https://doka.guide/css/" },
  { title: "SCSS", logo: scss, link: "https://sass-lang.com/documentation/" },
  { title: "JavaScript", logo: js, link: "https://learn.javascript.ru/" },
  { title: "TypeScript", logo: ts, link: "https://www.typescriptlang.org/" },
  { title: "React", logo: react, link: "https://react.dev/" },
  { title: "Next", logo: next, link: "https://nextjs.org/" },
  { title: "Axios", logo: axios, link: "https://axios-http.com/ru/docs/intro" },
  { title: "Redux", logo: redux, link: "https://redux-toolkit.js.org/" },
  { title: "Express", logo: express, link: "https://expressjs.com/" },
  { title: "Nest", logo: nest, link: "https://docs.nestjs.com/" },
  {
    title: "Firebase",
    logo: firebase,
    link: "https://firebase.google.com/docs",
  },
  { title: "Convex", logo: convex, link: "https://docs.convex.dev/home" },
  { title: "Tailwind", logo: tailwind, link: "https://tailwindcss.com/" },
  {
    title: "PostgreSQL",
    logo: postgresql,
    link: "https://www.postgresql.org/",
  },
  { title: "Prettier", logo: prettier, link: "https://prettier.io/" },
  { title: "ESLint", logo: eslint, link: "https://eslint.org/" },
  { title: "Git", logo: git, link: "https://git-scm.com/" },
  { title: "Github", logo: github, link: "https://github.com/" },
  { title: "JWT", logo: jwt, link: "https://jwt.io/" },
  { title: "Yarn", logo: yarn, link: "https://yarnpkg.com/" },
  { title: "Npm", logo: npm, link: "https://www.npmjs.com/" },
  { title: "Pnpm", logo: pnpm, link: "https://pnpm.io/" },
  { title: "Prisma", logo: prisma, link: "https://www.prisma.io/" },
  { title: "Lucide", logo: lucide, link: "https://lucide.dev/guide/" },
  { title: "Vite", logo: vite, link: "https://vitejs.dev/" },
  { title: "Webpack", logo: webpack, link: "https://webpack.js.org/" },
  { title: "Gulp", logo: gulp, link: "https://gulpjs.com/" },
];

export default function Stack() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Мой стек технологий</h1>
      <div className={styles.stack}>
        {stack.map((tech, index) => {
          if (tech.title === "Github") return;
          if (tech.title === "Git") {
            return (
              <div className={styles.block} key={index}>
                <span className={styles.name}>Git/Github</span>
                <a href={tech.link} className={styles.git} target={"_blank"}>
                  <img
                    src={tech.logo}
                    className={styles.logo}
                    alt={"technology"}
                  />
                </a>
                <div className={styles.line}></div>
                <a
                  href={"https://github.com"}
                  className={styles.github}
                  target={"_blank"}
                >
                  <img
                    src={github}
                    className={styles.logo}
                    alt={"technology"}
                  />
                </a>
              </div>
            );
          }
          return (
            <a
              href={tech.link}
              className={styles.block}
              key={index}
              target={"_blank"}
            >
              <span className={styles.name}>{tech.title}</span>
              <img src={tech.logo} className={styles.logo} alt={"technology"} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
