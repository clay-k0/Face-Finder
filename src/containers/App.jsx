import React from "react";
import "./App.css";
import Navigation from "../components/Navigation/navigation.component";
import Logo from "../components/Logo/logo.component";
import ImageLinkForm from "../components/ImageLinkForm/image-link-form.component";
import Rank from "../components/Rank/rank.component";
import ParticlesBg from "particles-bg";

const App = () => {
  return (
    <div className="App">
      <ParticlesBg
        num={170}
        type="cobweb"
        bg={true}
        color="#FFFFFF"
        className="particles"
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />} */}
    </div>
  );
};

export default App;
