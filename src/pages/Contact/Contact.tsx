import React from "react";
import { Container, Row } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center m-0 p-5 vh-100 mw-100 mh-100 bg-secondary pt-66 text-center">
      <Row className="email p-2">
        <h3>Email us</h3>
        <p>brightminder.music@gmail.com</p>
      </Row>
      <Row className="contact p-2">
        <h3>Contact</h3>
        <p>+60 10 457 2475 {"(Daniel)"}</p>
      </Row>
    </Container>
  );
};

export default ContactPage;
