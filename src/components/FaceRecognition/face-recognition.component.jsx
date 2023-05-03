const FaceRecognition = ({ imageURL, box }) => {
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
        {box.map((faceLocation, i) => (
          <div
            key={i}
            className='bounding-box'
            title='Face'
            style={{
              top: faceLocation.topRow,
              right: faceLocation.rightColumn,
              bottom: faceLocation.bottomRow,
              left: faceLocation.leftColumn,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
