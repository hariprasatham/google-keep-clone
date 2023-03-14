import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar'
import TakeNote from './components/TakeNote'
import Note from './components/Note'

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (note) =>{
    setNotes((preNotes)=>{
      return [...notes, note]
    })
  }

  const deleteNote = (id) =>{
    setNotes((preNotes)=>{
      return preNotes.filter((note, index) => {
        return index !== id
      })
    })
  }

  return (
    <main>
      <NavBar />
      <TakeNote addNote={addNote}/>
      {notes.map((note, index)=>{
        return <Note id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
      })}
    </main>
  );
}

export default App;
