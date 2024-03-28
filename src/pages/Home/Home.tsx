import { FC } from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import YouTube, { YouTubeEvent } from "react-youtube";

const HomePage: FC = () => {
  const options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 1
    }
  };

  const onReady = (event: YouTubeEvent) => {
    event.target.pauseVideo();
  };

  return (
    <Container className="d-flex flex-column align-items-center m-0 p-5 mw-100 mh-100 bg-secondary pt-66">
      <Row className="justify-content-center align-items-center default-height">
        <Col className="text-center">
          <h1 className="title">BRIGHT MINDER</h1>
          <p className="subtitle">
            Instrumental Melodic trio with a pinch of progressive
          </p>
        </Col>
      </Row>

      <Row className="mb-5 default-height">
        <Col>
          <h2 className="my-5 primary-color text-center">Music Video</h2>
          <YouTube
            videoId="HJfmCtTCh2I"
            opts={options}
            onReady={onReady}
            id="video"
          />
          <h4 className="text-center my-3 primary-color">Two Are Two </h4>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="mb-5 primary-color text-center">Live Session</h2>
          <YouTube
            videoId="duF1Hr_haP0"
            opts={options}
            onReady={onReady}
            id="video"
          />
          <h3 className="text-center my-3 primary-color">Sheren</h3>
          <YouTube
            videoId="zacmwYafltU"
            opts={options}
            onReady={onReady}
            id="video"
          />
          <h3 className="text-center my-3 primary-color">Two Are Two </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
