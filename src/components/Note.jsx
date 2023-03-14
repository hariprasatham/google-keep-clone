import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './note.css'

function Note(props) {

  const handleClick = () =>{
    props.deleteNote(props.id)
  }

  return (
    <div className='notes'>
      <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  )
}

export default Note