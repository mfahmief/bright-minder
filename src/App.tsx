import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";

const App: FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
