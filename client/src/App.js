/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BackGroundVideo from "./components/BackgroundVideo";
import Description from "./components/Landing-page-Decription";
import NavBar from "./components/NavBar";
import Register from "./components/Register";



function App() {

  return (

    <div >
      <Router>
        <NavBar />
        <BackGroundVideo />
  
        <Route exact path="/" component={Description} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
