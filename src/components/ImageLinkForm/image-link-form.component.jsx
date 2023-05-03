import React from "react";
import "./image-link-form.styles.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 white'>
        {
          "this magic scanner will detect faces in your pictures. give it a try!"
        }
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input
            className='f4 pa2 w-70 center b--white bg-white tc focus-outline'
            style={{ outlineColor: "#fff" }}
            type='text'
            placeholder='enter image url'
            onChange={onInputChange}
          />
          <button
            className='w-30 grow f4 link ph3 pv2 dib b--light-pink white bg-light-pink '
            onClick={onButtonSubmit}
            style={{
              fontSize: "1.2rem",
              transition: "all 0.5s ease",
            }}
          >
            detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
