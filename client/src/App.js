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




function App() {


  //  capturing user register info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(``);


  //  Capturing what the user types for their notes
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [deletingNote, setDeletingNote] = useState({});
  const [editingNote, setEditingNote] = useState([]);


  // Opening and Closing Delete Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const openDeleteModal = (note) => {
    // console.log(note)
    setDeletingNote(note)
    setShowDeleteModal(true);
  };

  // Opening and Closing Edit Modal
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = (note) => {
    // console.log(note)
    setEditingNote(note);
    setShowEditModal(true);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
  };


  // CRUD OPERATION FOR NOTES   

  // Function to get all notes
  function loadNotes() {
    axios.get("/getNotes").then(res =>
      setNoteList(res.data))
  };
  useEffect(() => {
    loadNotes()
  }, []);

  //  Submitting Note
  const submitNote = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("please enter a Title and Body");
      return;
    };
    axios.post("/api/addingNote", {
      title: title,
      body: body
    }).then((response) => {
      const noteID = response.data.id;
      setNoteList([
        ...noteList,
        { title: title, body: body, id: noteID }
      ])
    })

  };

  // Deleting Note
  const deleteNote = (id) => {
    // console.log(id)
    axios.delete(`/api/addingNote/${id}`)
      .then(response => {
        const newNoteList = noteList.filter(note => note.id !== id);
        setNoteList(newNoteList);
        closeDeleteModal();
      })
  };

  // Updating Note
  const handleNoteUpdate = (updatedNote) => {
    console.log(updatedNote)
    const newList = noteList.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote
      }
      return note
    })
    setNoteList(newList);
    closeEditModal();
    // window.location.reload();
  };


  // FUNCTIONS TO SIGNUP AND LOGIN USERS

  // Function to signup users
  const registeringUser = (e) => {
    if (!firstName || !lastName) {
      alert("Please enter a first name & last name");
      return;
    }
    console.log(e)
    e.preventDefault();
    axios.post("/api/registerUser", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }).then((data) => {
      console.log(data)
      window.location.replace("/login")
    })
      .catch((err) => {
        console.log(err)
      })
  };


  const userLoggingIn = (e) => {
    e.preventDefault();
    // if (!email || !password) {
    //   alert("Please enter your email & password. If you don't have one click on the Register here to begin");
    //   return;
    // };
    axios.post("/api/login", {
      email: email,
      password: password
    }).then((data) => {
      console.log(data)
      window.location.replace("/userDashbored")
    })

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
              registeringUser={registeringUser}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setPassword={setPassword} />
          )}
        />
        <Route path="/login" render={(props) => (
          <LoginUser
            userLoggingIn={userLoggingIn}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        )}
        />
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
            deleteNote={deleteNote}
            note={deletingNote}
          />
        },
        {
          showEditModal &&
          <EditModal
            closeEditModal={closeEditModal}
            updateNote={handleNoteUpdate}
            editNote={editingNote}
          />
        }
      </Router>
    </div>
  );
}

export default App;
