import { Navbar } from '../../Navbar/Navbar';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import React, { useState, useRef, useEffect } from 'react';

import Image1 from '../images/I1.jpg';
import Image2 from '../images/I2.jpg';
import Image3 from '../images/I3.jpg';
import Image4 from '../images/I4.webp';
import Image5 from '../images/I5.webp';
import Image6 from '../images/I6.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Card({ src }) {
  return (
    <div className="card">
      <img src={src} alt="card" />
    </div>
  );
}

export const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const images = [
    { src: Image1 },
    { src: Image2 },
    { src: Image3 },
    { src: Image4 },
    { src: Image5 },
    { src: Image6 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentIndex(next),
  };


  return (
    <div className='home'>
      <Navbar/>
      <div className="carousel-container">

      {/* Here the carousal must show the given images in a slideshow manner you can use any method to complete the effect  */}

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <Card key={index} src={image.src} />
        ))}
      </Slider>
      
      </div>
    
      
      <br></br>
      <div className='content'>
          <h3>
              Welcome to our online clothing store! We offer a wide range of high-quality and fashionable clothing for men, women, and children. Our collection includes the latest trends and styles from top brands at affordable prices. Whether you're looking for casual wear, formal attire, or accessories to complete your outfit, we have everything you need to look your best. Shop now and experience the convenience of online shopping with fast and reliable delivery.
          </h3>
          <button className='btn'>Explore</button>
      </div>
    </div>
    
  );

}



export default Home;