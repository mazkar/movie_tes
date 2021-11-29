import gambar1 from "./../../assets/images/imageCarousel/gambar1.jpg";
import gambar2 from "./../../assets/images/imageCarousel/gambar2.jpg";
import gambar3 from "./../../assets/images/imageCarousel/gambar3.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../carousel/style.css";
import { Carousel } from "react-bootstrap";

function Moviecarousel() {
  return (
    <Carousel style={{ marginTop: "60px" }} interval={3500}>
      <Carousel.Item style={{ height: "500px" }}>
        <img className="d-block w-100" src={gambar2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img className="d-block w-100" src={gambar3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Moviecarousel;
