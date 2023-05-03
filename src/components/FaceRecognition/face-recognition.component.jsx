import React from "react";
import "./face-recognition.styles.css";

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img
          id='inputImage'
          alt=''
          src={imageURL}
          width='500px'
          height='auto'
        />
        {Array.isArray(box) &&
          box.map((faceBox, index) => (
            <div
              key={index}
              className='bounding-box'
              style={{
                top: faceBox.topRow,
                right: faceBox.rightCol,
                bottom: faceBox.bottomRow,
                left: faceBox.leftCol,
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
