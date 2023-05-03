import React from "react";
import "./face-recognition.styles.css";

const FaceRecognition = ({ imageURL, faceLocations }) => {
  const faceBoxes = faceLocations.map((faceLocation, i) => {
    const { leftCol, topRow, rightCol, bottomRow } = faceLocation;
    return (
      <div
        key={i}
        className='bounding-box'
        style={{
          top: topRow,
          right: rightCol,
          bottom: bottomRow,
          left: leftCol,
        }}
      ></div>
    );
  });

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img
          id='inputImage'
          src={imageURL}
          alt=''
          width='500px'
          height='auto'
        />
        {faceBoxes}
      </div>
    </div>
  );
};

export default FaceRecognition;
