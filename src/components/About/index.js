import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
      <div className="jumbotron jumbotron-fluid" id="container-about">
  <div className="container">
  <h1 id="one" className="display-4 text-center">About Me</h1>
  <img src={coverImage} className="profile" alt="profile-pic" />
  <br></br>
  <br></br>
    
    <p id="two" className="lead">My name is Conner and you can explore some of my projects here! I am currently 21 years of age and I am in my final semester at the University of Central Florida. I am a very big fan of fishing, football and hockey, and enjoy editing and designing videos in my spare time. I am receiving a bachelors degree from UCF in Health Sciences Pre-Clinical. My favorite class that I have ever taken has been Organic Chemistry 2, and I also have a love for Anatomy. I am currently taking an online bootcamp in Software Development from the University of Central Florida. Feel free to reach out using the contact page! </p>

    <h4>Github Links!</h4>
    <a href="https://github.com/connerc11/Trivia-Brews-Project1">Trivia Brews</a><br></br>
    <a href="https://github.com/connerc11/Fitness-Buddy">Fitness Buddy</a><br></br>
    <a href="https://github.com/connerc11/Conner-Cochrane-Portfolio">Original Portfolio</a><br></br>
    <a href="https://github.com/connerc11/Note-Taker">Note Taker</a><br></br>
    <a href="https://github.com/connerc11/My-React-Portfolio">React Portfolio</a>
  </div>
</div>
      //   <div className="bio my-5">
      //     <div className="profile-container">
      //   <div className="profile-div" id="pfp">
      //   <img src={coverImage} className="profile" alt="profile-pic" />
      //   </div>
      //   </div>
      //   <h2 className="justify-content-md-center">Background Information</h2>
      //   <p id="anoutInfo">My name is Conner and this is a place to learn more about me. I am currently 21 years of age and I am in my final semester at the University of Central Florida. I am a very big fan of fishing, football and hockey, and I do enjoy editing and designing videos in my spare time. I am receiving a bachelors degree from UCF in Health Sciences Pre-Clinical. My favorite class that I have ever taken has been Organic Chemistry 2, and I also have a love for Anatomy. I am currently taking an online bootcamp in Software Development from the University of Central Florida. Feel free to reach out ... </p>
        
      // </div>
      );
}

export default About;