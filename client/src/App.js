/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BackGroundVideo from "./components/BackgroundVideo";
import Description from "./components/Landing-page-Decription";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import LoginUser from "./components/Login-Users";
import UserNote from "./components/User-Note";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";
import axios from "axios";
// import { response } from "express";



function App() {


  // Passing props to Register to capture user Info 
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


  // Opening and Closing Delete Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  // Opening and Closing Edit Modal
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => {
    setShowEditModal(true);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
  };


  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [noteList, setNoteList] = useState([]);



  const submitNote = () => {
    axios.post("/api/addingNote", {
      title: title,
      body: body
    }).then((response) => {
      //  console.log(response.data)
      const noteID = response.data.id;
      setNoteList([
        ...noteList,
        { title: title, body: body, id: noteID }
      ])
    })
  };

  function loadNotes() {
    axios.get("/getNotes").then(res =>
      setNoteList(res.data))
  };

  useEffect(() => {
    loadNotes()
  }, []);



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
            showEditModal={openEditModal}
            capturingTitle={setTitle}
            capturingBody={setBody}
            addingNote={submitNote}
            noteList={noteList}
          />
        )}
        />
        {
          showDeleteModal &&
          <DeleteModal
            closeModal={closeDeleteModal}
          />
        },
        {
          showEditModal &&
          <EditModal
            closeEditModal={closeEditModal}
          />
        }
      </Router>
    </div>
  );
}

export default App;
