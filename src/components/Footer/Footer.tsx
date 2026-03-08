import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/Heading.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="site-footer py-5">
      <Container className="footer-shell">
        <Row className="w-100 align-items-center">
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <img src={logo} alt="Bright Minder" className="footer-logo" />
            <p className="footer-tag mt-3 mb-0">
              Progressive instrumental metal from Malaysia.
            </p>
          </Col>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <p className="footer-label">Follow</p>
            <div className="social-links">
              <a href="https://www.facebook.com/BrightMinder.music/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              </a>
              <a href="https://twitter.com/BrightMinder_" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a href="https://www.instagram.com/brightminder/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <p className="footer-label">Streaming & Booking</p>
            <div className="stream-links">
              <a href="https://www.youtube.com/watch?v=HJfmCtTCh2I" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "youtube"]} /> Watch
              </a>
              <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "spotify"]} /> Listen
              </a>
              <a href="/contact">
                <FontAwesomeIcon icon={["fas", "envelope"]} /> Book Us
              </a>
            </div>
          </Col>
        </Row>
        <Row className="w-100 mt-4">
          <p className="copy">Bright Minder 2026 ©. All rights reserved.</p>
        </Row>
      </Container>
    </footer>
  );
};
