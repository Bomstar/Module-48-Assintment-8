import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
