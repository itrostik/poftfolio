import styles from "../Header/header.module.scss";

export default function ListItem({ title }: { title: string }) {
  return (
    <li className={styles["header__list-item"]}>
      <span className={styles["header__list-hashtag"]}>#</span>
      {title}
    </li>
  );
}
