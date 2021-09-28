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
import DeleteModal from "./components/DeleteModal";



function App() {


  // Passing props to Register to capture user Info 
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };



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
            showDeleteModal={openDeleteModal}
          />
        )}
        />

        {
          showDeleteModal &&
          <DeleteModal
            closeModal={closeDeleteModal}
          />
        }
      </Router>
    </div>
  );
}

export default App;
