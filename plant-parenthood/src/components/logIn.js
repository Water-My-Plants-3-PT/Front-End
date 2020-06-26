import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axiosWithAuth from "../utils/axiosWithAuth";
import "./css/login.css";

export default function LogIn() {

  //create initial state for for both entry blocks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;}

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
          className="block"
          autoFocustype="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
        </FormGroup> */}
        <FormGroup className="container" controlId="username" basSize="large">
          <FormLabel className="title">Username</FormLabel>
          <FormControl 
          className="block"
          autoFocustype="email"
          value={username}
          onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="container"controlId="password" bsSize="large" >
          <FormLabel className="title">Password</FormLabel>
          <FormControl
            className="block"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button className="submit-button" block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}