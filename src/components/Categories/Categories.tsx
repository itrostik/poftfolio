import styles from "./Categories.module.scss";

type Category = {
  activeCategory: number;
  setActiveCategory: (index: number) => void;
};
export default function Categories({
  activeCategory,
  setActiveCategory,
}: Category) {
  const categories = [
    "Все",
    "HTML + CSS/SCSS",
    "HTML + SCSS + JS",
    "SCSS + React + JS",
    "SCSS + React + TS",
    "Redux + React + TS",
    "Redux + Next + TS",
  ];

  return (
    <ul className={styles["projects__categories-list"]}>
      {categories.map((category, index) => (
        <li
          className={
            index === activeCategory
              ? [
                  styles["projects__categories-item"],
                  styles["active-category"],
                ].join(" ")
              : styles["projects__categories-item"]
          }
          key={category}
          onClick={() => setActiveCategory(index)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
