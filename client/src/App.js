/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BackGroundVideo from "./components/BackgroundVideo";
import Description from "./components/Landing-page-Decription";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import LoginUser from "./components/Login-Users";
import UserNote from "./components/User-Note";



function App() {


  // Passing props to Register to capture user Info 
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");




  return (
    <div >
      <Router>
        <NavBar />
        <BackGroundVideo />

        <Route exact path="/" component={Description} />
        <Route path="/register"
          render={(props) => (
            < Register
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setPassword={setPassword} />
          )}
        />

        <Route path="/login" component={LoginUser} />
        <Route path="/userDashbored" render={(props) => (
          <UserNote
            displayingFirstName={firstName}
          />
        )}
        />
      </Router>
    </div>
  );
}

export default App;
