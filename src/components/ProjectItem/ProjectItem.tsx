import styles from "./ProjectItem.module.scss";
import { Project } from "../../../@types/project.ts";

//https://i.ibb.co/4NfMjLC/postgresql.png
//https://i.ibb.co/7CGNBJP/express.png
//https://i.ibb.co/DfRkbD5/vite.png
//https://i.ibb.co/DRMSbkR/react.png
//https://i.ibb.co/NTt1NX8/redux.png
//https://i.ibb.co/HBq72K7/typescript.png
//https://i.ibb.co/DDQFL8j/sass.png

export default function ProjectItem({
  title,
  description,
  stack,
  imageUrl,
  github,
  linkSite,
  index,
}: Project & { index: number }) {
  return (
    <div
      className={
        index % 2 !== 0
          ? styles["project__block"]
          : styles["project__block-reverse"]
      }
    >
      <div className={styles["project__left"]}>
        <div className={styles["project__title"]}>{title}</div>
        <div className={styles["project__description"]}>{description}</div>
        <div className={styles["project__stack"]}>
          <div className={styles["project__stack-title"]}>
            Используемые технологии
          </div>
          {stack.map((item, index) => {
            return (
              <a
                href={item.linkDoc}
                className={styles["project__stack-block"]}
                key={index}
                target={"_blank"}
              >
                <img
                  src={item.linkImage}
                  alt={item.title}
                  width={30}
                  height={30}
                />
                <span className={styles["project__stack-name"]}>
                  {item.title}
                </span>
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles["project-right"]}>
        <div className={styles["project-right__image"]}>
          <img src={imageUrl} alt="" />
        </div>
        <a
          href={github}
          className={styles["project-right__github"]}
          target={"_blank"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="github"
            fill="#fff"
            width={20}
            height={20}
          >
            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
          </svg>
          <span className={styles["github-link"]}>{github}</span>
        </a>
        {linkSite ? (
          <a
            href={linkSite}
            className={styles["project-right__site"]}
            target={"_blank"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="link"
              fill="#fff"
              width={20}
              height={20}
            >
              <path d="M12.11,15.39,8.23,19.27a2.52,2.52,0,0,1-3.5,0,2.47,2.47,0,0,1,0-3.5l3.88-3.88a1,1,0,1,0-1.42-1.42L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33l3.89-3.88a1,1,0,0,0-1.42-1.42ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L10.47,7.19a1,1,0,1,0,1.42,1.42l3.88-3.88a2.52,2.52,0,0,1,3.5,0,2.47,2.47,0,0,1,0,3.5l-3.88,3.88a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3.88-3.89A4.49,4.49,0,0,0,20.69,3.31ZM8.83,15.17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.92-4.92a1,1,0,1,0-1.42-1.42L8.83,13.75A1,1,0,0,0,8.83,15.17Z"></path>
            </svg>
            <span className={styles["site-link"]}>{linkSite}</span>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
