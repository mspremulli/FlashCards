import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddFlashcard from './components/AddFlashcard';
import './App.css';
import FlashcardList from './components/FlashcardList';
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';

const App = () => {
  return(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path = '/' exact component = {FlashcardList} />
        <Route path = '/add' exact component = {AddFlashcard} />
        <Route path = '/user' exact component = {CreateUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
