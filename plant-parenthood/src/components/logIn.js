import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./css/login.css"; 

export default function LogIn() {

  //create initial state for for both entry blocks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;}

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup className="container" controlId="email" basSize="large">
          <FormLabel className="title">Email</FormLabel>
          <FormControl 
          className="block"
          autoFocustype="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
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