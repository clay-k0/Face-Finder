import React from "react";
import "./image-link-form.styles.css";

const Logo = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 white'>
        {
          "This Magic Scanner will detect faces in your pictures. Give it a try!"
        }
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input
            className='f4 pa2 w-70 center b--white bg-white tc focus-outline'
            style={{ outlineColor: "#fff" }}
            type='text'
            placeholder='Enter Image URL'
            onChange={onInputChange}
          />
          <button
            className='w-30 grow f4 link ph3 pv2 dib b--light-pink white bg-light-pink '
            onClick={onButtonSubmit}
            style={{
              fontSize: "1.5rem",
              transition: "all 0.5s ease",
            }}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logo;
