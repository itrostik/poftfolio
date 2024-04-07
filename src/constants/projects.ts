import next from "../assets/next.svg";
import nest from "../assets/nest.svg";
import postgresql from "../assets/postgresql.svg";
import convex from "../assets/convex.svg";
import typescript from "../assets/ts.svg";
import scss from "../assets/scss.svg";
import lucide from "../assets/lucide.svg";
import react from "../assets/react.svg";
import javascript from "../assets/js.svg";
import axios from "../assets/axios.svg";
import express from "../assets/express.svg";
import webpack from "../assets/webpack.svg";
import vite from "../assets/vite.svg";
import prettier from "../assets/prettier.svg";
import eslint from "../assets/eslint.svg";
import yarn from "../assets/yarn.svg";
import npm from "../assets/npm.svg";

import mono from "/mono.svg";
import mirum from "/mirum.png";
import shop from "/shop.svg";
import watch from "/watch-later.png";

export const projects = [
  {
    name: "Mirum Greece",
    title: "Система мультимедийной инсталляции",
    description: "Коммерческий проект",
    stack: [
      react,
      typescript,
      express,
      scss,
      lucide,
      vite,
      prettier,
      eslint,
      yarn,
    ],
    logo: mirum,
  },
  {
    name: "mono",
    title: "Онлайн монополия",
    link: "https://mono.lldan.ru/",
    description: "Командный проект",
    stack: [next, convex, typescript, scss, lucide, prettier, eslint, yarn],
    logo: mono,
    domain: "mono.lldan.ru",
    github: "https://github.com/lld4n/mono",
  },
  {
    name: "Rostik Shop",
    title: "Интернет-магазин одежды",
    link: "https://shop.itrostik.ru/",
    description: "Первый пет-проект на React",
    stack: [react, scss, javascript, axios, webpack, npm],
    logo: shop,
    domain: "shop.itrostik.ru",
    github: "https://github.com/itrostik/RostikShop",
  },
  {
    name: "Watch Later",
    title: "Платформа для оценки сериалов/фильмов",
    description: "Проект для Лаборатории Агона",
    link: "https://watch.itrostik.ru/",
    stack: [next, nest, postgresql, scss, typescript, axios, yarn],
    logo: watch,
    domain: "watch.itrostik.ru",
    github: "https://github.com/itrostik/watch-later-app",
  },
];
