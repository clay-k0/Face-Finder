import React from "react";
import "./about.styles.css";

const About = () => {
  return (
    <div className='container'>
      <div className='glass-about'>
        <h1>About</h1>
        <p>
          This is a face detection app that uses the Clarifai API to find faces
          in images. It was built using React and Node.js. To get started,
          register or sign in, then paste an image URL into the input field and
          click the "detect" button. The app will then display the image with a
          box around any faces that it detects. The app will also keep track of
          how many images you have submitted. Hope you enjoy!
        </p>
        <p>
          The source code for this project can be found{" "}
          <a
            href='https://github.com/clay-k0/face-finder'
            target='_blank'
            rel='noopener noreferrer'
            className='link blue underline'
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
