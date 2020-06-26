import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axiosWithAuth from "../utils/axiosWithAuth";
// import "./Login.css";

export default function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;}

  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth()
      .post('https://water-my-plants-6-2020.herokuapp.com/api/auth/login')
      .then(res => {
        window.localStorage.setItem('token', res.data.token);
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        {/* <FormGroup controlId="email" basSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl 
          autoFocustype="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
        </FormGroup> */}
        <FormGroup controlId="username" basSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl 
          autoFocustype="email"
          value={username}
          onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large"  type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}