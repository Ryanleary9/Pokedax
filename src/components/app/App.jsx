import { AppRouter } from "../app-router/app-router";
import { Header } from "../header/header";
import "./App.scss";

function App() {
  return (
    <span className="app">
      <Header></Header>
      <AppRouter />
    </span>
  );
}

export default App;
