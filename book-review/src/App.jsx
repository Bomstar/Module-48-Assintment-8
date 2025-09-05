import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
