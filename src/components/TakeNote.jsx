import React, {useState} from 'react'
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import '../components/takenote.css'

function TakeNote(props) {

  const [isExpanded, setIsExpanded] = useState(false)
  const [noteData, setNoteData] = useState({title: "", content: ""})

  const expanded = () => {
    setIsExpanded(true)
  }

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setNoteData((preNote)=>{
      return{
        ...preNote,
        [name]:value
      }
    })
  }

  const submitNote = (event) =>{
    event.preventDefault()
    props.addNote(noteData)
    setNoteData({
      title: "",
      content: ""
    })
    setIsExpanded(false)
  }

  return (
    <div className='take-note'>
      <div className='take-note-form'>
        {isExpanded && <input type="text" className='title' placeholder='Title' name='title' value={noteData.title}  onChange={handleChange}/>}
        <input type="text" className='note' placeholder='Take a note...' name='content' value={noteData.content} onClick={expanded} onChange={handleChange}/>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </div>
    </div>
  )
}

export default TakeNote