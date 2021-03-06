import React, {useState} from 'react';
import {connect} from 'react-redux';
import {register} from '../actions/register';

const RegisterUser = ({register}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //runs the validators in the backend to register a user
   const handleSignup = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setEmail(data.get('email'));
    setPassword(data.get('password'));
    // console.log(email, password);
    register({email, password});
  } 
  //input form to submit login email & password
  return(
    <div className = "loginForm">
      <form onSubmit =  {(e) => handleSignup(e)}>
        <input
          type = "text"
          id = "email"
          name = 'email'
          placeholder = "Your email"
          required
        />
        <input
          type = "text"
          id = "password"
          name = 'password'
          placeholder = "Enter password"
          required
        />
        <br />
        <button >
          Sign up
        </button>
      </form>
    </div>
    )
  
}

//map the login credentials to redux
const mapStoreToProps = () => {}

export default connect(mapStoreToProps,{register})(RegisterUser);
