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
          sign out
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
          sign in
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
          register
        </button>
        <button
          onClick={() => onRouteChange("about")}
          className='link dim pa2 pointer bg-transparent bn'
          style={{
            outline: "none",
            border: "1px solid black",
            marginLeft: "10px",
            borderRadius: "3px",
            fontSize: "1.2rem",
          }}
        >
          about
        </button>
        <a
          href='https://github.com/clay-k0/face-finder'
          target='_blank'
          rel='noopener noreferrer'
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/github-icon.png"}
            alt='GitHub Repo'
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        </a>
      </nav>
    );
  }
};

export default Navigation;
