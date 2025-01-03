import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import firstImage from "../assets/first.jpg";
import secondImage from "../assets/second.jpg";
import thirdImage from "../assets/third.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src={firstImage}
          alt="First slide"
          className="d-block"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={secondImage}
          alt="Second slide"
          className="d-block"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={thirdImage}
          alt="Third slide"
          className="d-block "
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
