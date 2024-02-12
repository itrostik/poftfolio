import avatar from "/avatar.jpg";
import styles from "./Profile.module.scss";
export default function Profile() {
  return (
    <div className={styles.wrapper}>
      <h1>itrostik</h1>
      <img src={avatar} alt="avatar" className={styles.logo} />
      <span>Привет, меня зовут Ростислав</span>
      <span>Я frontend-разработчик</span>
    </div>
  );
}
