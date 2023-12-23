import "./styles/main.scss";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import { useRef } from "react";

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const contactsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="layout">
      <Header
        projectsRef={projectsRef}
        aboutMeRef={aboutMeRef}
        contactsRef={contactsRef}
      />
      <Main
        stackRef={stackRef}
        projectsRef={projectsRef}
        aboutMeRef={aboutMeRef}
        contactsRef={contactsRef}
      />
    </div>
  );
}

export default App;
