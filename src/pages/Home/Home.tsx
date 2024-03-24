import { FC } from "react";
import image from "../../assets/img/IMG_20211228_115256.jpg";

const HomePage: FC = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      ></div>
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "ffffff",
          opacity: "10%",
          position: "absolute"
        }}
      ></div>
    </div>
  );
};

export default HomePage;
