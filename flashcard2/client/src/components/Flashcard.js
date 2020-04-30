import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import FlashcardList from './FlashcardList';

class Flashcard extends Component {

  state = {
    flashcards: []
  }

  componentDidMount(){
    this.getFlashcards();
  }

  getFlashcards = () => {
    axios.get('/api/flashcard')
      .then(res => {
        if(res.data){
          this.setState({
            flashcards: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteFlashcard = (id) => {

    axios.delete(`/api/flashcard/${id}`)
      .then(res => {
        if(res.data){
          this.getFlashcards()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { flashcards } = this.state;

    return(
      <div>
        <h1>My Flashcards</h1>
        <Input getFlashcards={this.getFlashcards}/>
        <FlashcardList flashcards = {flashcards} deleteFlashcard={this.deleteFlashcard}/>
      </div>
    )
  }
}

export default Flashcard;