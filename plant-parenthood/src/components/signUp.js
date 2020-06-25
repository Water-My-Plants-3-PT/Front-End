import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./css/login.css";

export default function SignUp() {

  //create initial state for for both entry blocks
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0 && password == repeatPassword;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup className="container" classList="Gblock" controlId="name" basSize="large">
          <FormLabel className="title" classList="title">Name</FormLabel>
          <FormControl 
          className="block"
          autoFocustype="name"
          value={name}
          onChange={e => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="container" controlId="email" basSize="large">
          <FormLabel className="title">Email</FormLabel>
          <FormControl 
          className="block"
          autoFocustype="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="container" controlId="password" bsSize="large">
          <FormLabel className="title">Password</FormLabel>
          <FormControl
            className="block"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup className="container" controlId="repeatPassword">
          <FormLabel className="title">Repeat Password</FormLabel>
          <FormControl
            className="block"
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
            type="Password"
            />
        </FormGroup>
        <Button className="submit-button" block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}