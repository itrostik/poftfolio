import avatar from "/avatar.png";
import styles from "./Profile.module.scss";

import telegram from "../../assets/telegram.svg";
import vk from "../../assets/vk.svg";
import github from "../../assets/github.svg";
export default function Profile() {
  return (
    <div className={styles.wrapper}>
      <h1>itrostik</h1>
      <img src={avatar} alt="avatar" className={styles.logo} />
      <span>Привет, меня зовут Ростислав</span>
      <span>Я frontend-разработчик</span>
      <div className={styles.contacts}>
        <a href={"https://github.com/itrostik"} className={styles.contact}>
          <img src={github} alt="" />
        </a>
        <a href={"https://t.me/itrostik"} className={styles.contact}>
          <img src={telegram} alt="" />
        </a>
        <a href={"https://vk.com/itrostik"} className={styles.contact}>
          <img src={vk} alt="" />
        </a>
      </div>
    </div>
  );
}
