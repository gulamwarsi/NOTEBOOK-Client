import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name:"",email: "", password: "" ,cpassword:""});
    let history = useNavigate()
    const handelsubmit = async (e) => {
      e.preventDefault();
  const  {name,email,password} = credentials
      const response = await fetch("http://localhost:5000/api/auth/CreateUser", {
       
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
          email,
          password
        }),
      });
     
      const json = await response.json();
      console.log(json);
  // save the authtoken and redirect
  if(json.success){
  localStorage.setItem('token',json.authtoken)
  history("/")
  props.showalert("Account Created Successfully","success")
  }
  else{
    props.showalert("Invalid credentail ","danger")

  }
    };
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }  
   
  return (
    <div className='container'>
      <h2 className="vg">Signup to Continue to iNootBook</h2>
        <form  onSubmit={handelsubmit}>
        <div className="mb-3">
    <label htmlFor="name" className="form-label text-white"><h5>Name</h5></label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label text-white"><h5>Email address</h5></label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} required/>
    <div id="email" className="form-text text-white">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label text-white"><h5>Password</h5></label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label text-white"><h5>Confirm Password</h5></label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required/>
  </div>
 
  <button type="submit" className="btn btn-dark">Submit</button>
</form>
      
    </div>
  )
}

export default Signup