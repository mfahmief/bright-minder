import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Contact.css";

const ContactPage = () => {
  return (
    <Container className="contact-page d-flex flex-column justify-content-center align-items-center m-0 p-0 mw-100 pt-66 text-center">
      <div className="section-shell fade-rise">
        <p className="section-kicker">Bookings</p>
        <h1 className="section-title">Let's Build A Heavy Night</h1>
      </div>
      <Row className="email p-3 metal-card contact-box">
        <h3>Email us</h3>
        <p>brightminder.music@gmail.com</p>
      </Row>
      <Row className="contact p-3 metal-card contact-box">
        <h3>Contact</h3>
        <p>+60 10 457 2475 {"(Daniel)"}</p>
      </Row>
    </Container>
  );
};

export default ContactPage;
