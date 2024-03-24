import { FC, MouseEvent, MouseEventHandler, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#" onClick={e => onNavClick(e, "")}>
            Bright Minder
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {pages.map(page => (
                <Nav.Link
                  key={page.name}
                  href="#"
                  onClick={e => onNavClick(e, page.route)}
                >
                  {page.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
