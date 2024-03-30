import { FC } from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import YouTube, { YouTubeEvent } from "react-youtube";

const HomePage: FC = () => {
  const options = {
    playerVars: {
      controls: 1
    }
  };

  const onReady = (event: YouTubeEvent) => {
    event.target.pauseVideo();
  };

  return (
    <Container className="d-flex flex-column align-items-center m-0 p-2 mw-100 mh-100 bg-secondary pt-66 container-fluid">
      <Row className="justify-content-center align-items-center default-height w-100">
        <Col className="text-center">
          <h1 className="title">
            <span>BRIGHT</span> <span>MINDER</span>
          </h1>
          <p className="subtitle">
            Instrumental Melodic trio with a pinch of progressive
          </p>
        </Col>
      </Row>

      <Row className="px-5 mb-5 w-100">
        <Col>
          <h2 className="my-5 primary-color text-center">MUSIC VIDEO</h2>
          <YouTube
            videoId="HJfmCtTCh2I"
            opts={options}
            onReady={onReady}
            id="video"
            className="video-container"
            iframeClassName="video-iframe"
          />
          <h4 className="text-center my-3 primary-color">Two Are Two </h4>
        </Col>
      </Row>

      <Row className="px-5 mb-5 w-100">
        <Col>
          <h2 className="mb-5 primary-color text-center">LIVE SESSION</h2>
          <YouTube
            videoId="duF1Hr_haP0"
            opts={options}
            onReady={onReady}
            id="video"
            className="video-container"
            iframeClassName="video-iframe"
          />
          <h3 className="text-center my-4 primary-color">Sheren</h3>
          <YouTube
            videoId="zacmwYafltU"
            opts={options}
            onReady={onReady}
            id="video"
            className="video-container"
            iframeClassName="video-iframe"
          />
          <h3 className="text-center my-4 primary-color">Two Are Two </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
