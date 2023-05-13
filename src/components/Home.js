import { Navbar } from '../Navbar/Navbar';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import React, { useState, useRef, useEffect } from 'react';

import gymImage1 from '../components/images/gym1.jpg';
import gymImage2 from '../components/images/gym2.jpg';
import gymImage3 from '../components/images/gym3.jpg';
import gymImage4 from '../components/images/gym4.jpg';
import gymImage5 from '../components/images/gym5.jpg';
import gymImage6 from '../components/images/gym6.jpg';

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
    { src: gymImage1 },
    { src: gymImage2 },
    { src: gymImage3 },
    { src: gymImage4 },
    { src: gymImage5 },
    { src: gymImage6 },
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
    < >
          <Navbar/>
      <h1>Home</h1>
      <div className="carousel-container">

      {/* Here the carousal must show the given images in a slideshow manner you can use any method to complete the effect  */}

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <Card key={index} src={image.src} />
        ))}
      </Slider>
      
      </div>
    
      
      <br></br>
      <div>
      <h3 style={{ backgroundColor: 'yellow' }}>Gym, short for gymnasium, is a space designed for physical exercise and fitness activities. It typically contains a range of equipment such as weights, treadmills, stationary bikes, and resistance machines, as well as open space for activities such as stretching, yoga, and group fitness classes. Gyms are popular for individuals looking to improve their health and fitness levels, as well as for athletes and bodybuilders who use weight training and cardio exercises to build muscle and improve their physical performance.

Going to the gym can have a variety of benefits beyond just physical fitness, such as reducing stress, improving mood, and promoting better sleep. It can also provide an opportunity for social interaction and community-building, as many gyms offer group fitness classes and other activities that can help people connect with others who share similar fitness goals and interests.

However, it's important to note that gym memberships and equipment can be expensive, and not everyone has access to a gym or feels comfortable in that environment. Luckily, there are many other ways to stay active and achieve fitness goals, such as outdoor activities, home workouts, and other forms of physical exercise. Overall, while gyms can be a great resource for many people, it's important to find a fitness routine that works best for your individual needs and lifestyle.
</h3>
      </div>
    </>
    
  );

}



export default Home;