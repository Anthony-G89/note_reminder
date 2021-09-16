/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BackGroundVideo from "./components/BackgroundVideo";
import Description from "./components/Landing-page-Decription";
import NavBar from "./components/NavBar";



function App() {

  return (

    <div >
      <NavBar />
      <BackGroundVideo />
      <Description/>
    </div>
  );
}

export default App;
