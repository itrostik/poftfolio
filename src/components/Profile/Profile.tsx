import avatar from "/avatar.svg";
import styles from "./Profile.module.scss";
export default function Profile() {
  return (
    <div className={styles.wrapper}>
      <h1>itrostik</h1>
      <img src={avatar} alt="avatar" />
      <span>Привет, меня зовут Ростислав</span>
      <span>Я frontend-разработчик</span>
    </div>
  );
}
