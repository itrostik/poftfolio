import "./styles/main.scss";
import Profile from "./components/Profile/Profile.tsx";
import Stack from "./components/Stack/Stack.tsx";

function App() {
  return (
    <div className="wrapper">
      <Profile />
      <Stack />
    </div>
  );
}

export default App;
