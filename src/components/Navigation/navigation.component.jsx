import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
          marginRight: "20px",
        }}
      >
        <button
          onClick={() => onRouteChange("signout")}
          className='f4 link dim pa2 pointer bg-transparent bn'
          style={{
            outline: "none",
            border: "1px solid black",
          }}
        >
          Sign Out
        </button>
      </nav>
    );
  } else {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
          marginRight: "20px",
          paddingBottom: "10px",
        }}
      >
        <button
          onClick={() => onRouteChange("signin")}
          className='link dim pa2 pointer bg-transparent bn'
          style={{
            outline: "none",
            border: "1px solid black",
            borderRadius: "3px",
            fontSize: "1.2rem",
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => onRouteChange("register")}
          className='link dim pa2 pointer bg-transparent bn'
          style={{
            outline: "none",
            border: "1px solid black",
            marginLeft: "10px",
            borderRadius: "3px",
            fontSize: "1.2rem",
          }}
        >
          Register
        </button>
      </nav>
    );
  }
};

export default Navigation;
