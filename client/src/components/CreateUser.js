import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import {register, login} from '../actions/register';

const CreateUser = (props) => {

  const [formData, setFormData] = useState()({
    email:"",
    password:""
  });

  const {email, password} = formData;
  //runs the validators in the backend when login is clicked
   const handleLogin = () => {
    login({email, password});
  }

  //runs the validators in the backend to register a user
   const handleSignup = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(email, password);
    register({email, password});
  }

   const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
    //input form to submit login email & password
    return(
      <div className = "center">
        <form className = 'loginForm' >
        <input
            type="text"
            id="email"
            placeholder="Your email"
            value = {email}
            onChange = {(e) => this.onChange(e)}
            required
          />
          <input
            type="text"
            id="password"
            placeholder="Enter password"
            value = {password}
            onChange = {(e) => this.onChange(e)}
            required
          />
          <button onClick = {(e) => this.handleLogin(e)}>
            Login
          </button>
          <br />
          <button onClick = {(e) => this.handleSignup(e)}>
            Sign up 
          </button>

        </form>
      </div>
    )
  
}

//map the login credentials to redux
const mapStoreToProps = (store) => {
  return {
    store
  }
}

export default connect(mapStoreToProps)(CreateUser);
