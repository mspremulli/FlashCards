import React, {useState} from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/register';

const LoginUser = ({login}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //runs the validators in the backend when login is clicked
 
   const Login = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setEmail(data.get('email'));
    setPassword(data.get('password'));
    // console.log(email, password);
    login({email, password});
  } 
  //input form to submit login email & password
  return(
    <div className = "loginForm">
      <form onSubmit =  {(e) => Login(e)}>
        <input
          type = "text"
          id = "email"
          name = 'email'
          placeholder = "Your email here"
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
          Login
        </button>
      </form>
    </div>
    )
  
}

//map the login credentials to redux
const mapStoreToProps = () => {}

export default connect(mapStoreToProps,{login})(LoginUser);
