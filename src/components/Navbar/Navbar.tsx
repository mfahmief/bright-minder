import { FC, MouseEvent, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/img/Heading.png";

const pages = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact" }
];

const NavBar: FC = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const onNavClick = (e: MouseEvent, route: string) => {
    e.preventDefault();
    nav(route);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position
  const opacity = Math.min(1, scrollPosition / 100); // Adjust the division factor as needed

  // Apply the opacity to your background style
  const backgroundStyle = {
    backgroundColor: `rgba(8, 6, 2, ${opacity})`
  };

  return (
    <>
      <Container className="m-0 p-0  mw-100 fixed-top" style={backgroundStyle}>
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="#" onClick={(e) => onNavClick(e, "")}>
              <img src={logo} alt="" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {pages.map((page) => (
                  <Nav.Link
                    key={page.name}
                    href="#"
                    onClick={(e) => onNavClick(e, page.route)}
                    active={location.pathname === page.route}
                  >
                    {page.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default NavBar;
