// src/components/ImageSlider.jsx
import Carousel from 'react-bootstrap/Carousel';
import './ImageSlider.css'; // فایل استایل سفارشی (اختیاری)

function ImageSlider() {
  return (
    <Carousel interval={3000} controls={true} indicators={true} fade={true}>
      <Carousel.Item>
        <img
          className="d-block img-wh"
          src="/src/assets/slider1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Beautiful scenery and wonderful views.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block img-wh"
          src="/src/assets/slider2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Explore new places and adventures.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block img-wh"
          src="/src/assets/slider3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Slide 3</h3>
          <p>Experience the joy of travel and discovery.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-wh"
          src="/src/assets/slider4.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Slide 4</h3>
          <p>Experience the joy of travel and discovery.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
