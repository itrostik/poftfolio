import "./styles/main.scss";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";

function App() {
  return (
    <div className="layout">
      <Header />
      <Main />
    </div>
  );
}

export default App;
