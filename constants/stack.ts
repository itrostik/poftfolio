import redux from "../src/assets/redux.svg";
import react from "../src/assets/react.svg";
import typescript from "../src/assets/typescript.svg";
import sass from "../src/assets/sass.svg";
import vite from "../src/assets/vite.svg";
import express from "../src/assets/express.svg";
import postgresql from "../src/assets/postgresql.svg";
import yarn from "../src/assets/yarn.svg";

type Stack = {
  title: string;
  description: string;
  img: string;
  listThemes: string[];
};

export const mainStack: Stack[] = [
  {
    title: "Redux Toolkit",
    description: "321",
    img: redux,
    listThemes: ["21321", "123321"],
  },
  {
    title: "React",
    description: "321",
    img: react,
    listThemes: ["21321", "123321"],
  },
  {
    title: "TypeScript",
    description: "321",
    img: typescript,
    listThemes: ["21332131321", "123321"],
  },
  {
    title: "SCSS",
    description: "321",
    img: sass,
    listThemes: ["dsadsadsa", "123321"],
  },
  {
    title: "Vite",
    description: "321",
    img: vite,
    listThemes: ["aaaaaaadsa", "1233ssss21"],
  },
  {
    title: "Express",
    description: "321",
    img: express,
    listThemes: ["dsa", "ddddddd"],
  },
  {
    title: "PostgreSQL",
    description: "321",
    img: postgresql,
    listThemes: ["21321", "123321"],
  },
  {
    title: "Yarn",
    description: "321",
    img: yarn,
    listThemes: ["adas", "dsadsa"],
  },
];
