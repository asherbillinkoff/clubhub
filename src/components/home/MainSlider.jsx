import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router";

function MainSlider() {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Carousel
        interval={2000}
        className="mx-auto"
        style={{ maxWidth: "75vw" }}
      >
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              style={{ maxWidth: "75vw" }}
              src={require("../../assets/carousel-wallpaper/golf-course.jpg")}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Holiday Sale</h3>
            <a href="/products/1">30-50% Marked Items</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              style={{ maxWidth: "75vw" }}
              src={require("../../assets/carousel-wallpaper/ping-driver.jpeg")}
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3>PING G425 Driver</h3>
            <a href="/productdetails/2">Shop Now</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              style={{ maxWidth: "75vw" }}
              src={require("../../assets/carousel-wallpaper/titleist-irons.jpeg")}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Titleist T200 Irons</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default MainSlider;
