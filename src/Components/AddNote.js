import React, { useState,useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
const AddNote = (props) => {
    const context=useContext(NoteContext)
    const {addNote}=context
    const [note,setNote]=useState({title:"",description:"",tag:""})
    const handelClick=(e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
        props.showalert("Added Successfully","success")
        setNote({title:"",description:"",tag:""})
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
       <div className='container my-3'>
      <h2 className='add'>Add a Note</h2>
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label text-white"><h5>Title</h5></label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"  value={note.title} onChange={onChange}minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label text-white"><h5>Description</h5></label>
    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange}minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label text-white"><h5>Tag</h5></label>
    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}minLength={5} required/>
  </div>
  <button disabled={note.title.length<5 ||note.description.length<5} type="submit" className="btn btn-primary" onClick={handelClick}>AddNote</button>
</form>
    </div>


    </div>
  )
}

export default AddNote