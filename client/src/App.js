import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddFlashcard from './components/AddFlashcard';
import './App.css';
import FlashcardList from './components/FlashcardList';
import Navbar from './components/Navbar';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/RegisterUser';

const App = () => {
  return(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path = '/' exact component = {FlashcardList} />
        <Route path = '/add' exact component = {AddFlashcard} />
        <Route path = '/login' exact component = {LoginUser} />
        <Route path = '/register' exact component = {RegisterUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
