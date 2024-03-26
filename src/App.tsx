import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import bg from "./assets/img/IMG_20211228_115256.jpg";
import "./App.css";
import { Container } from "react-bootstrap";

const App: FC = () => {
  return (
    <>
      <Container className="mw-100 h-100 m-0 p-0">
        <img src={bg} alt="" className="bg" />
        <NavBar />
        <Outlet />
      </Container>
    </>
  );
};

export default App;
