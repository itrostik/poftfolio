import styles from "./Stack.module.scss";

import { mainStack } from "../../../constants/stack.ts";
import { useState } from "react";
export default function Stack() {
  const [activeTechnology, setActiveTechnology] = useState(0);
  return (
    <div className={styles["stack"]}>
      <div className={styles["stack__title"]}>Технологический стэк</div>
      <div className={styles["stack__description"]}>
        Здесь указаны основные технологии, которые я использую при разработке
        своих проектов
      </div>
      <div className={styles["stack__list"]}>
        {mainStack.map((technology, index) => (
          <img
            src={technology.img}
            onClick={() => setActiveTechnology(index)}
            alt={""}
          ></img>
        ))}
      </div>
      <div className={styles["stack__technology"]}>
        <div className={styles["stack__technology-info"]}>
          <div className={styles["stack__technology-title"]}>
            {mainStack[activeTechnology].title}
          </div>
          <div className={styles["stack__technology-description"]}>
            {mainStack[activeTechnology].description}
          </div>
          <div className={styles["stack__technology-list"]}>
            {mainStack[activeTechnology].listThemes.map((theme) => (
              <div className={styles["stack__technology-item"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_56_11)">
                    <path
                      d="M10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20ZM10 1.66667C5.41667 1.66667 1.66667 5.41667 1.66667 10C1.66667 14.5833 5.41667 18.3333 10 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 10C18.3333 5.41667 14.5833 1.66667 10 1.66667Z"
                      fill="#CD00FF"
                    />
                    <path
                      d="M9.16671 13.3333C8.91671 13.3333 8.75004 13.25 8.58337 13.0833L6.08337 10.5833C5.75004 10.25 5.75004 9.74996 6.08337 9.41663C6.41671 9.08329 6.91671 9.08329 7.25004 9.41663L9.75004 11.9166C10.0834 12.25 10.0834 12.75 9.75004 13.0833C9.58337 13.25 9.41671 13.3333 9.16671 13.3333Z"
                      fill="#CD00FF"
                    />
                    <path
                      d="M9.16671 13.3333C8.91671 13.3333 8.75004 13.25 8.58337 13.0833C8.25004 12.75 8.25004 12.25 8.58337 11.9166L13.5834 6.91663C13.9167 6.58329 14.4167 6.58329 14.75 6.91663C15.0834 7.24996 15.0834 7.74996 14.75 8.08329L9.75004 13.0833C9.58337 13.25 9.41671 13.3333 9.16671 13.3333Z"
                      fill="#CD00FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_56_11">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>{theme}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["stack__technology-image"]}>
          <img
            src={mainStack[activeTechnology].img}
            alt=""
            style={{ width: 250, height: 250 }}
          />
        </div>
      </div>
    </div>
  );
}
