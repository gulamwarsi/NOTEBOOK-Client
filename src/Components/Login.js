import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate()
  const handelsubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://mernapp-backend-8sov.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
   
    const json = await response.json();
    console.log(json);
    if(json.success){
// save the authtoken and redirect
localStorage.setItem('token',json.authtoken)
props.showalert("Login successfully","success")
history("/")

    }

    else{
        props.showalert("invalid Details","danger")
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-3">
      <h3 className="vg">Login to Continue to iNootBook</h3>
      <form onSubmit={handelsubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text text-white">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-white">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;