import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div className = "navbar">
          <h1 className=''>
            <Link to='/'>Flashcards!</Link>
          </h1> 
          <h5 className=''>
            <Link to='/add'>Add Card</Link>
          </h5>
          <h4 className=''>
            <Link to = '/login'>Login</Link>
          </h4>
          <h4 className=''>
            <Link to = '/register'>Register</Link>
          </h4>
        </div>
    )
}

export default Navbar;