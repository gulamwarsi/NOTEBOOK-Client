import React from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'


const Navbar = () => {
    let location = useLocation();
    let history=useNavigate()
 const handelLogout=()=>{
  localStorage.removeItem('token')
  history('/login')
 }
  return (
    
   <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">iNoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon bg-grey"></span> */}
        <span className="navbar-toggler-icon text-white">☰</span>

      
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active":""} navbar-brand text-white`} aria-current="page" to="/">Home</Link>
        </li>
      
        
      </ul>
      {!localStorage.getItem('token')?
      <form className="d-flex" role="search">

      <Link className="btn btn-success mx-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-secondary mx-1"  to="/signup" role="button">SignUp</Link>
      </form>: <button  className='btn btn-danger' onClick={handelLogout}>Logout</button>
      }
    </div>
  </div>
</nav>
 
  )
}

export default Navbar