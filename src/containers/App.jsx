import React, { Component } from "react";
import ParticlesBg from "particles-bg";

import FaceRecognition from "../components/FaceRecognition/face-recognition.component";
import ImageLinkForm from "../components/ImageLinkForm/image-link-form.component";
import Navigation from "../components/Navigation/navigation.component";
import Register from "../components/Register/register.component";
import SignIn from "../components/SignIn/sign-in.component";
import Logo from "../components/Logo/logo.component";
import Rank from "../components/Rank/rank.component";
import About from "../components/About/about.component";

import "./App.css";

const returnClarifaiRequestOptions = (imageURL) => {
  // const PAT = process.env.CLARIFAI_PAT;
  const USER_ID = process.env.CLARIFAI_USER_ID;
  const APP_ID = "face-finder-app";
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key 7df8204051954141b0da35c787ec2d2a",
    },
    body: raw,
  };
};

const initialState = {
  input: "",
  imageURL: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};
class App extends Component {
  constructor() {
    super();

    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateFaceLocation = (data) => {
    const { regions } = data.outputs[0].data;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);

    if (!Array.isArray(regions)) {
      return [];
    }

    return regions.map((region) => {
      return {
        leftCol: region.region_info.bounding_box.left_col * width,
        topRow: region.region_info.bounding_box.top_row * height,
        rightCol: width - region.region_info.bounding_box.right_col * width,
        bottomRow: height - region.region_info.bounding_box.bottom_row * height,
      };
    });
  };

  displayFaceBox = (faceLocations) => {
    this.setState({ box: faceLocations });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });

    const requestOptions = returnClarifaiRequestOptions(this.state.input);

    fetch(
      `https://api.clarifai.com/v2/models/face-detection/outputs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch("https://face-finder-backend.onrender.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch((err) => console.log(err));
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageURL, route, box } = this.state;
    return (
      <div className='App'>
        <ParticlesBg
          num={100}
          type='cobweb'
          bg={true}
          color='#ffffff'
          className='particles'
        />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition imageURL={imageURL} box={box} />
          </div>
        ) : route === "signin" ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : route === "about" ? (
          <About />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
