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
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


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
    console.log(id)
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
