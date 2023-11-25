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
    description:
      "Redux Toolkit - пакет, облегчающий работу с Redux. Redux - стейт-менеджер, позволяющий управлять состояниями компонентов",
    img: redux,
    listThemes: ["Store", "Actions", "Reducers", "Slices"],
  },
  {
    title: "React",
    description:
      "React - JavaScript-библиотека для создания пользовательских интерфейсов",
    img: react,
    listThemes: [
      "Синтаксис JSX",
      "Функциональные компоненты. Жизненный цикл компонента",
      "Основные хуки (UseState, UseEffect, UseRef)",
      "Кастомные хуки",
      "React Hook Form",
      "React Router V6",
      "React Transition Group",
    ],
  },
  {
    title: "TypeScript",
    description:
      "TypeScript - надстройка над JavaScript, включает в себя статическую типизацию, позволяя разработчиком допускать меньше ошибок при разработке",
    img: typescript,
    listThemes: [
      "Основные типы",
      "Обобщение типов (Generics)",
      "Операторы typeof и keyof",
      "Утилитарные типы",
    ],
  },
  {
    title: "SCSS",
    description:
      "SASS (SCSS) - препроцессор CSS, имеет обширный функционал, позволяет удобнее писать стили. Я использую синтаксис SCSS, наверное из-за скобок",
    img: sass,
    listThemes: [
      "Вложенность классов (&)",
      "Переменные",
      "Миксины",
      "Наследование",
    ],
  },
  {
    title: "Vite",
    description:
      "Vite - сборщик проектов, вообще скоро заменит Webpack из-за своей скорости",
    img: vite,
    listThemes: ["Конфигурация (vite.config.[j|t]s)", "Работа с плагинами"],
  },
  {
    title: "Express",
    description:
      "Express - быстрый, гибкий, минималистичный веб-фреймворк для приложений Node.js. Я использовал его при написании своего бэкенда, но в теории не силён, есть просто понимание как работает взаимодействие клиента и сервера. Я всё-таки Frontend-разработчик, а не Backend 🙂",
    img: express,
    listThemes: [
      "Маршрутизация (routes)",
      "Middleware",
      "Запросы (GET, POST, PUT, PATCH)",
    ],
  },
  {
    title: "PostgreSQL",
    description:
      "PostgreSQL - СУБД, изучаю её в универе и использовал в проектах, поэтому что-то знаю, да 🙂",
    img: postgresql,
    listThemes: [
      "CRUD-операции",
      "Фильтрация (WHERE)",
      "Сортировка (ORDER BY)",
      "Уникальные и первичные ключи",
      "Внешние ключи",
      "Ограничения (CHECK CONSTRAINTS)",
      "Тестирования (pgbench)",
    ],
  },
  {
    title: "Yarn",
    description: "Yarn - пакетный менеджер, быстрее чем npm",
    img: yarn,
    listThemes: [
      "Основные команды (yarn add, yarn remove, yarn upgrade)",
      "Работа с плагинами (yarn plugin)",
    ],
  },
];
