import React from 'react';
import {connect} from 'react-redux';
import {register} from '../actions/register';

const CreateUser = (props) => {

  //runs the validators in the backend when login is clicked
  const handleLogin = () => {
    login({email, password});
  }

  //runs the validators in the backend to register a user
  const handleSignup = () => {
    register({name, email, password});
  }


  //input form to submit login email & password
  return(
    <div className = "center">
      <form className = 'loginForm' >
       <input
          type="text"
          id="email"
          placeholder="Your email"
          
          required
        />
        <input
          type="text"
          id="password"
          placeholder="Enter password"
          
          required
        />
        <button onClick = {() => handleLogin}>
          Login
        </button>
        <br />
        <button onClick = {() => handleSignin}>
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
