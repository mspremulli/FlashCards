import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div className = "row black">
          <h1 className='col s1'>
            <Link to='/'>Flashcards!</Link>
          </h1> 
          <h5 className='col s1'>
            <Link to='/add'>Add Card</Link>
          </h5>
          <h4 className='col s1 right'>
            <Link to = '/login'>Login</Link>
          </h4>
          <h4 className='col s1 right'>
            <Link to = '/register'>Register</Link>
          </h4>
        </div>
    )
}

export default Navbar;