import React, { useState } from "react";
import axios from "axios";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// import "./SignUp.css";

export default function SignUp() {

  //create initial state for for both entry blocks
  const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  

  // function validateForm() {
  //   return email.length > 0 && password.length > 0 && password == repeatPassword;
  // }

  

  function handleSubmit(event) {
    const reg={
      username: name,
      password: password,
      

    }
    axios.post(`https://water-my-plants-6-2020.herokuapp.com/api/auth/register`,reg)
    .then((res) => {
      window.localStorage.setItem('token', res.data.token)
      console.log(res)
    })
    .catch(err => console.log(err))
    
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
        {/* <FormGroup controlId="email" basSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl 
          autoFocustype="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
        </FormGroup> */}
        <FormGroup controlId="phoneNumber" basSize="large">
          <FormLabel>Phone Number</FormLabel>
          <FormControl 
          autoFocustype="phoneNumber"
          
          onChange={e => setPhoneNumber(e.target.value)}
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
        <Button block bsSize="large"  type="submit">
          signUp
        </Button>
      </form>
    </div>
  );
}