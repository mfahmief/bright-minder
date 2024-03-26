import { FC } from "react";
import image from "../../assets/img/IMG_20211228_115256.jpg";
import "./Home.css";
import { Container } from "react-bootstrap";
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
    <Container className="d-flex flex-column align-items-center m-0 p-5 mw-100 h-100 bg-secondary">
      <h1 className="mb-5 primary-color">Music Video</h1>
      <YouTube
        videoId="HJfmCtTCh2I"
        opts={options}
        onReady={onReady}
        id="video"
      />
      <h3 className="text-center my-5 primary-color">Two Are Two </h3>
      <div className="divider mb-5" />
      <h1 className="mb-5 primary-color">Live Session</h1>
      <YouTube
        videoId="duF1Hr_haP0"
        opts={options}
        onReady={onReady}
        id="video"
      />
      <h3 className="text-center my-5 primary-color">Sheren</h3>
      <YouTube
        videoId="zacmwYafltU"
        opts={options}
        onReady={onReady}
        id="video"
      />
      <h3 className="text-center my-5 primary-color">Two Are Two </h3>
    </Container>
  );
};

export default HomePage;
