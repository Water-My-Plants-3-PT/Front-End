import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// import "./SignUp.css";

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
        <FormGroup controlId="name" basSize="large">
          <FormLabel>Name</FormLabel>
          <FormControl 
          autoFocustype="name"
          value={name}
          onChange={e => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="email" basSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl 
          autoFocustype="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
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
        <FormGroup controlId="repeatPassword">
          <FormLabel>Repeat Password</FormLabel>
          <FormControl
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
            type="Password"
            />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}