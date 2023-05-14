import React from 'react'
import "./Trainers.css"
import { Navbar } from '../../Navbar/Navbar';


export const Trainers = () => {
  const Trainers = [{
      "expertise": "Expert Trainer",
      "name": "John Deo",
      "experience": 10,
      "age": 36,
      "phone": 9999999999,
      "socialMedia": {
        "insta": "https://www.instagram.com/",
        "youtube": "https://www.youtube.com/",
        "pinterest": "https://in.pinterest.com/"
      },
      "img": "https://www.dronacharyathegym.com/wp-content/uploads/2021/03/help-desk.jpg",
    },
    {
      "expertise": "Intermediate Trainer",
      "name": "Mark Wood",
      "experience": 7,
      "age": 39,
      "phone": 8999999999,
      "socialMedia": {
        "insta": "https://www.instagram.com/",
        "youtube": "https://www.youtube.com/",
        "pinterest": "https://in.pinterest.com/"
      },
      "img": "https://www.shutterstock.com/image-photo/young-coach-gym-260nw-187383314.jpg"
    },
    {
      "expertise": "New Trainer",
      "name": "James Carl",
      "experience": 1,
      "age": 26,
      "phone": 6999999999,
      "socialMedia": {
        "insta": "https://www.instagram.com/",
        "youtube": "https://www.youtube.com/",
        "pinterest": "https://in.pinterest.com/",
      },
      "img": "https://media.istockphoto.com/id/675179390/photo/muscular-trainer-writing-on-clipboard.jpg?s=612x612&w=0&k=20&c=9NKx1AwVMpPY0YBlk5H-hxx2vJSCu1Wc78BKRM9wFq0="
    },
    {
      "expertise": "Expert Trainer",
      "name": "Johnson",
      "experience": 12,
      "age": 40,
      "phone": 7999999999,
      "socialMedia": {
        "insta": "https://www.instagram.com/",
        "youtube": "https://www.youtube.com/",
        "pinterest": "https://in.pinterest.com/"
      },
      "img": "https://previews.123rf.com/images/michaeljung/michaeljung1205/michaeljung120500136/13738057-handsome-male-personal-trainer-in-gym.jpg"
    },
  ];
  return (
    <div className='trainers'>
      <Navbar />
      <hr className='hr1' /> <h1 className='expert-heading'>Meet Our Expert Trainers</h1> <hr />

      <p className='intro-trainers'>
        At [Your Gym's Name], we take pride in having a team of highly qualified and dedicated trainers who are passionate about helping you achieve your fitness goals. Our trainers are more than just fitness enthusiasts; they are certified professionals with years of experience in the industry. <br /> <br />

        Each trainer at [Your Gym's Name] brings a unique set of skills and specialties to cater to a wide range of fitness needs. Whether you're a beginner looking to kickstart your fitness journey, an athlete aiming to enhance performance, or someone seeking personalized training sessions, our diverse team has got you covered. <br /> <br />

        We believe in a holistic approach to fitness, focusing not only on physical strength and endurance but also on nutrition, injury prevention, and overall well-being. Our trainers are equipped with the latest knowledge and techniques to design tailored workout programs that align with your specific goals and fitness level. <br /> <br />

        But it's not just about expertise; our trainers are also known for their friendly and supportive approach. They understand that motivation plays a crucial role in achieving success, and they will be there to guide and encourage you every step of the way. Building a strong rapport with our clients is important to us, and our trainers are committed to creating a positive and inspiring environment for everyone. <br /> <br />

        Take a moment to get to know our trainers below. You'll find their profiles highlighting their qualifications, areas of specialization, and a glimpse into their fitness philosophy. We're confident that you'll find the perfect trainer who matches your preferences and fitness goals. <br /> <br />

        Start your fitness journey with confidence and trust in our exceptional team of trainers at [Your Gym's Name]. We're here to support you in reaching your full potential and embracing a healthier lifestyle. Let's work together to make your fitness dreams a reality!" <br /> <br />
      </p>
      <div className="trainers">
        <div className="box-container">
          {Trainers.map((trainer)=>{
            return (<div className="box">
            <img src={trainer.img}  alt="" />
            <div className="content">
              <span>{trainer.expertise}</span>
              <h3>{trainer.name}</h3>
              <div className="share">
                <a to={trainer.socialMedia.insta} className="fab fa-instagram socials-icon"></a>
                <a to={trainer.socialMedia.youtube} className="fab fa-youtube socials-icon"></a>
                <a to={trainer.socialMedia.pinterest} className="fab fa-pinterest socials-icon"></a>
              </div>
            </div>
          </div>)
          })}
        </div>
      </div>
    </div>
  )
}
