import React from "react";
import "./image-link-form.styles.css";

const Logo = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3 white">
        {
          "This Magic Scanner will detect faces in your pictures. Give it a try!"
        }
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center b--near-white bg-light-gray tc focus-outline"
            style={{ outlineColor: "#0fd2b1" }}
            type="text"
            placeholder="Enter Image URL"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib b--light-purple white bg-light-purple outline-none"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logo;
