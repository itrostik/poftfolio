import styles from "./main.module.scss";
import Info from "../../screens/Info/Info.tsx";
import Projects from "../../screens/Projects/Projects.tsx";
import Stack from "../Stack/Stack.tsx";
import AboutMe from "../../screens/AboutMe/AboutMe.tsx";
import React from "react";

type MainProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  contactsRef: React.RefObject<HTMLDivElement>;
  stackRef: React.RefObject<HTMLDivElement>;
};

export default function Main({
  stackRef,
  projectsRef,
  aboutMeRef,
  contactsRef,
}: MainProps) {
  return (
    <div className={styles["main"]}>
      <Info stackRef={stackRef} />
      <Projects projectsRef={projectsRef} />
      <Stack stackRef={stackRef} />
      <AboutMe aboutMeRef={aboutMeRef} />
    </div>
  );
}
