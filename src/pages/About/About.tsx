import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import image1 from "../../assets/img/DSC_9956.png";
import image2 from "../../assets/img/DSC_9964.png";
import "./About.css";

const AboutPage = () => {
  return (
    <Container className="d-flex flex-column align-items-center m-0 p-5 mw-100 mh-100 bg-secondary pt-66">
      <Row className="mt-5">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img src={image1} alt="" className="slide-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={image2} alt="" className="slide-img" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <p className="about-text">
            Based in Bandar Baru Bangi, Selangor, Bright Minder is a band
            attached to the Instrumental Progressive Rock and Metal/J-Rock vibes
            genre. The band was formed in early 2017 with two guitarists, Nabil
            and Daniel, and later added Fahmie as a drummer. Bright Minder draws
            inspiration from artists such as Intervals, Polyphia, Sithu Aye,
            Protest The Hero, and Plini. Currently, the band is in the process
            of writing their new single and album.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
