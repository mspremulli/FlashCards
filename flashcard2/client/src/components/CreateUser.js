import React from 'react';
import {connect} from 'react-redux';

const CreateUser = (props) => {
  //input form to submit login email & password
  return(
    <div className = "center">
      <form className = 'loginForm'>
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
        <button>
          Submit
        </button>
      </form>
    </div>
  )
}

const mapStoreToProps = (store) => {
  return {
    store
  }
}

export default connect(mapStoreToProps)(CreateUser);
