import React from "react";
import "./face-recognition.styles.css";

const FaceRecognition = ({ imageURL, boxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img
          id='inputImage'
          src={imageURL}
          alt=''
          width='500px'
          height='auto'
          title='Face'
        />
        {boxes.map((box) => (
          <div
            key={box.topRow + box.rightColumn + box.bottomRow + box.leftColumn}
            className='bounding-box'
            title='Face'
            style={{
              top: box.topRow,
              right: box.rightColumn,
              bottom: box.bottomRow,
              left: box.leftColumn,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
