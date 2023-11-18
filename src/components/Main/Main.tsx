import styles from "./main.module.scss";
import Info from "../../screens/Info/Info.tsx";
import Projects from "../../screens/Projects/Projects.tsx";

export default function Main() {
  return (
    <div className={styles["main"]}>
      <Info />
      <Projects />
    </div>
  );
}
