import styles from "./main.module.scss";
import Info from "../../screens/Info/Info.tsx";
import Projects from "../../screens/Projects/Projects.tsx";
import Stack from "../Stack/Stack.tsx";
import AboutMe from "../../screens/AboutMe/AboutMe.tsx";

export default function Main() {
  return (
    <div className={styles["main"]}>
      <Info />
      <Projects />
      <Stack />
      <AboutMe />
    </div>
  );
}
