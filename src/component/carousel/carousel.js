import gambar1 from "./../../assets/images/imageCarousel/gambar1.jpg";
import gambar2 from "./../../assets/images/imageCarousel/gambar2.jpg";
import gambar3 from "./../../assets/images/imageCarousel/gambar3.jpg";
import "./style.css";
import { Carousel } from "react-bootstrap";

function Moviecarousel() {
  let images = [gambar1, gambar2, gambar3];

  return (
    <Carousel style={{ marginTop: "60px" }} interval={3500}>
      {images.map((img) => (
        <Carousel.Item>
          <img className="d-block w-100 heightCarousel" src={img} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Moviecarousel;
