import styles from "./header.module.scss";
import React from "react";

type HeaderProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  contactsRef: React.RefObject<HTMLDivElement>;
};

export default function Header({
  projectsRef,
  aboutMeRef,
  contactsRef,
}: HeaderProps) {
  const scrollToSection = (section: string) => {
    switch (section) {
      case "проекты":
        projectsRef.current?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
        break;
      case "информация":
        aboutMeRef.current?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
        break;
      case "контакты":
        contactsRef.current?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["header__logo"]}>
        <img src="/Logo.svg" alt="" />
      </div>
      <div className={styles["header__menu"]}>
        <ul className={styles["header__list"]}>
          <li
            className={styles["header__list-item"]}
            onClick={() => scrollToSection("проекты")}
          >
            <span className={styles["header__list-hashtag"]}>#</span>
            проекты
          </li>
          <li
            className={styles["header__list-item"]}
            onClick={() => scrollToSection("информация")}
          >
            <span className={styles["header__list-hashtag"]}>#</span>
            информация
          </li>
          <li
            className={styles["header__list-item"]}
            onClick={() => scrollToSection("контакты")}
          >
            <span className={styles["header__list-hashtag"]}>#</span>
            контакты
          </li>
        </ul>
      </div>
    </div>
  );
}
