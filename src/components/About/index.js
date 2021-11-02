import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpeg";

function About() {
    return (
        <section className="my-5">
          <div className="profile-container">
        <h1 id="intro">Conner Cochrane's Portfolio</h1>
        <div className="image">
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </div>
        <h1 id="aboutMe">Background</h1>
        <p>My name is Conner and this is a place to learn more about me. I am currently 21 years of age and I am in my final semester at the University of Central Florida. I am a very big fan of fishing, football and hockey, and I do enjoy editing and designing videos in my spare time. I am receiving a bachelors degree from UCF in Health Sciences Pre-Clinical. My favorite class that I have ever taken has been Organic Chemistry 2, and I also have a love for Anatomy. I am currently taking an online bootcamp in Software Development from the University of Central Florida. Feel free to reach out ... </p>
        </div>
      </section>
      );
}

export default About;