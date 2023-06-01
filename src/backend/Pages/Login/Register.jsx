import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./register.scss";
export const Register = () => {

  const navigate = useNavigate();


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
  };
  return (
    <div className="Container">
      <div className="loginSection">
        <h1>Sign In</h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          
            
            <label  htmlFor="firstName">
            FirstName
          </label>
          <input
            type="text"
            value={firstName}
            name="firstName"
            id="firstName"
            placeholder="Text"
            onChange={(e) => setFirstName(e.target.value)}
          />
            
            
            <label  htmlFor="lastName">
            LastName
          </label>
          <input
            type="text"
            value={lastName}
            name="lastName"
            id="lastName"
            placeholder="Admin"
            onChange={(e) => setLastName(e.target.value)}
          />
            
          
          <label  htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            placeholder="***********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="reg-btns">
            <button className="btn regbtn" type="submit">Create New Account</button>
            {/* <button className="btn btn2" type="submit">Log In as Guest</button> */}
          </div>
        </form>
        <button onClick={()=>navigate('/login')} >Already have account? Log In </button>
      </div>
    </div>

  )
}


