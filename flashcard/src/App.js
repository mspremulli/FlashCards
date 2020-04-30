import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Flashcard from './components/Flashcard.js';



class App extends Component {
  render(){

    return (
      <div>
       <Navbar />
       <Flashcard />
      </div>
    );
  }
}

export default App;
