import "./styles/main.scss";
import Profile from "./components/Profile/Profile.tsx";
import Stack from "./components/Stack/Stack.tsx";
import Projects from "./components/Projects/Projects.tsx";

function App() {
  return (
    <div className="wrapper">
      <Profile />
      <Stack />
      <Projects />
    </div>
  );
}

export default App;
