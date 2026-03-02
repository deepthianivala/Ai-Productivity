import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Main from "./Layout/Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
