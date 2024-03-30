import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/Footing.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="site-footer py-4">
      <Container className="d-flex flex-column align-items-center">
        <Row>
          <img src={logo} alt="Bright Minder" className="footer-logo" />
        </Row>

        <Row>
          <Col className="social-links m-3">
            <a href="https://www.facebook.com/BrightMinder.music/">
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </a>
            <a href="https://twitter.com/BrightMinder_">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="https://www.instagram.com/brightminder/">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </Col>
        </Row>

        <Row>
          <p className="copy">Bright Minder 2024 ©. All rights reserved.</p>
        </Row>
      </Container>
    </footer>
  );
};
