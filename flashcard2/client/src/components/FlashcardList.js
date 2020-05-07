import React, {Component} from 'react';
import axios from 'axios';

class FlashcardList extends Component {
  state ={
    cards:[],
    currentCardId:''
  }

  componentDidMount = () => {
    this.getFlashcard();
  }

  getFlashcard = () => {
    axios.get('http://localhost:5000/cards')
    .then((response) => {
      const data = response.data;
      this.setState({        cards:data      });
      console.log('data recieved')
      console.log(this.state.cards)
    })
    .catch(() => {
      console.log('data not found')
    })
  }


  showAnswer = (card) => {
    this.setState({currentCardId:card._id});
    console.log("answer here", this.state.currentCardId, card.answer);
  }

  render(){
  //take the single cards and display a list of them all
    const flashCardQuestions = this.state.cards.map(card => {
      
      return(
        
        <div key = {card._id}>
         <li>{card.question}</li>
         <button onClick = {() => this.showAnswer(card)}>
          Show Answer
         </button>

        {card._id === this.state.currentCardId ? 
        <li  id = {card.id}>{card.answer}</li> :
        <li></li>}
          
        </div>
        
      )
    })



    return (
    <div>
      {flashCardQuestions}
      
    </div>
    )
  }
}

export default FlashcardList