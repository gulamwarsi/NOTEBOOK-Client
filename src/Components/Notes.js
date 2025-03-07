import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  const context = useContext(NoteContext);
  let history = useNavigate();
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      history("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refclose = useRef(null);
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag
    });
  };

  const handelClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refclose.current.click();
    props.showalert("Updated Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  // Ensure that notes is an array before mapping
  const isNotesArray = Array.isArray(notes);

  return (
    <div className='container mmt-3'>
      <AddNote showalert={props.showalert} />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handelClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2 className='yournote'>Your notes</h2>
        <div className='container'>
          {!isNotesArray && 'No notes to display'}
        </div>
        {isNotesArray && notes.map((note) => (
          <Noteitem key={note._id} updateNote={updateNote} note={note} showalert={props.showalert} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
