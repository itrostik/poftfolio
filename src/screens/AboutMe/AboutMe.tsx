import styles from "./AboutMe.module.scss";
import React from "react";

type AboutMeProps = {
  aboutMeRef: React.RefObject<HTMLDivElement>;
};

export default function AboutMe({ aboutMeRef }: AboutMeProps) {
  return (
    <div className={styles["about"]} ref={aboutMeRef}>
      <div className={styles["about__title"]}>
        #<span>информация</span>
      </div>
      <div className={styles["about__subtitle"]}>
        Краткая информация о том, кто я вообще такой
      </div>
      <div className={styles["about__info"]}>
        <div className={styles["about__image"]}>
          <img src="/itrostik.png" alt="" className={styles["image"]} />
        </div>
        <div className={styles["about__text"]}>
          Я Ростислав из Казани, мне 20 лет. Начал интересоваться сайтами ещё в
          2020/21 году, в школе, но серьёзно изучать технологии начал лишь в
          конце 2022. Сейчас, на конец 2023/начало 2024 года я:
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="check-circle"
              >
                <path
                  fill="#CD00FF"
                  d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                ></path>
              </svg>
              <span>Больше года во frontend-разработке</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="check-circle"
              >
                <path
                  fill="#CD00FF"
                  d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                ></path>
              </svg>
              <span>
                Владею современным стэком на уровне Junior, который позволит мне
                в соло сделать какое-то fullstack приложение/сайт
              </span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="check-circle"
              >
                <path
                  fill="#CD00FF"
                  d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                ></path>
              </svg>
              <span>
                Учусь на направлении "Программная инженерия" в КФУ ИТИС (2 курс)
              </span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="check-circle"
              >
                <path
                  fill="#CD00FF"
                  d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                ></path>
              </svg>
              <span>Участвовал и побеждал в хакатонах</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="check-circle"
              >
                <path
                  fill="#CD00FF"
                  d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                ></path>
              </svg>
              <span>Имею опыт в командной разработке</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
