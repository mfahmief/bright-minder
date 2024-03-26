import { FC, MouseEvent, MouseEventHandler, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const pages = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact" }
];

const NavBar: FC = () => {
  const nav = useNavigate();

  const onNavClick = (e: MouseEvent, route: string) => {
    e.preventDefault();
    nav(route);
  };
  return (
    <>
      <Container className="m-0 p-0 bg-secondary mw-100">
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="#" onClick={(e) => onNavClick(e, "")}>
              Bright Minder
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                {pages.map((page) => (
                  <Nav.Link
                    key={page.name}
                    href="#"
                    onClick={(e) => onNavClick(e, page.route)}
                  >
                    {page.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home">Mind it Bright</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default NavBar;
