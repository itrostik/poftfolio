import styles from "./header.module.scss";
import ListItem from "../UI/ListItem.tsx";

export default function Header() {
  const menuItems: string[] = ["главная", "проекты", "информация", "контакты"];

  return (
    <div className={styles["header"]}>
      <div className={styles["header__logo"]}>
        <img src="/Logo.svg" alt="" />
      </div>
      <div className={styles["header__menu"]}>
        <ul className={styles["header__list"]}>
          {menuItems.map((item) => (
            <ListItem title={item} key={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
