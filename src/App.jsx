import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  const [night, setNight] = useState(false);
  return (
    <div className={night ? "App night" : "App"}>
      <Header />
      <button onClick={() => setNight(!night)}>bgcolor</button>
      <Main />
      <Cards />
    </div>
  );
}

export default App;
