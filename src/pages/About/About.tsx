import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import image1 from "../../assets/img/DSC_9956.png";
import image2 from "../../assets/img/DSC_9964.png";
import "./About.css";

const AboutPage = () => {
  return (
    <Container className="about-page m-0 mw-100 pt-66">
      <Row className="section-shell fade-rise">
        <Col>
          <p className="section-kicker">Band Story</p>
          <h1 className="section-title">About Bright Minder</h1>
          <Carousel className="metal-card about-carousel">
            <Carousel.Item>
              <img src={image1} alt="" className="slide-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={image2} alt="" className="slide-img" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row className="section-shell pb-5 fade-rise">
        <Col>
          <p className="about-text metal-card">
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
