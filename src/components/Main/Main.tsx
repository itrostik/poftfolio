import styles from "./main.module.scss";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <div className={styles["main"]}>
      <div className={styles["main__info"]}>
        <div className={styles["main__info-left"]}>
          <div className={styles["info-left__title"]}>
            <span>ItRostik – </span>
            Frontend
            <span>-разработчик</span>
          </div>
          <div className={styles["info-left__subtitle"]}>
            Я создаю клиентскую часть приложения/сайта, используя свой{" "}
            <span className={styles["info-left__span"]}>
              технологический стек
            </span>
          </div>
          <div className={styles["info-left__button"]}>Связаться со мной</div>
        </div>
        <div className={styles["main__info-right"]}>
          <motion.div
            className={styles["info-right__circle"]}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              type: "tween",
              ease: [],
            }}
          />
          <div className={styles["info-right__image"]}>
            <img src="/itrostik.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
