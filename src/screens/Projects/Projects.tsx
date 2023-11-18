import styles from "./Projects.module.scss";
import Categories from "../../components/Categories/Categories.tsx";
import { useState } from "react";
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <div className={styles["projects"]}>
      <div className={styles["projects__title"]}>
        <span>#</span>проекты
      </div>
      <div className={styles["projects__subtitle"]}>
        Ты можешь посмотреть текущие проекты и какой стэк* использовался
      </div>
      <div className={styles["projects__categories"]}>
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </div>
  );
}
