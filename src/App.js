import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import NoteState from "./context/notes/NoteState";
import Alert from "./Components/Alert";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useState } from "react";
import Footer from "./Components/Footer";
function App() {
const [alert,setAlert]=useState(null)
const showalert=(message,type)=>{

  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
setAlert(null)
  },1000)
 }
  return (
    <>
   
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container mt-5">
        <Routes>
          <Route exact path="/" element={<Home showalert={showalert}/>}/>
        
          <Route exact path="/login" element={<Login  showalert={showalert}/>}/>
          <Route exact path="/signup" element={<Signup  showalert={showalert}/>}/>
        </Routes>
      
          
         
        </div>
      </Router>
      </NoteState>
     <Footer/>
     
    </>
  );
}

export default App;