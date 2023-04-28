import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "./face-white.png";
import "./logo.styles.css";

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br2 shadow-2' style={{ height: "150px" }}>
        <div className='Tilt-inner pa3'>
          <img style={{ paddingTop: "5px" }} src={logo} alt='logo' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
