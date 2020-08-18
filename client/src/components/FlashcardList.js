import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initCards, counter} from '../actions';
import axios from 'axios';

//change back to class to use componentdidmount method??
class FlashcardList extends Component  {
  
 
  state = {
    currentCard: 0
  };

  //get the flashcard data from the backend
  getFlashcard = () => {
    axios.get('http://localhost:5000/cards')
    .then((response) => {
      const data = response.data;
      this.props.initCards(data);
     
      console.log('data recieved');
    })
    .catch(() => {
      console.log('data not found');
    })
  }
  
  //should only run once, need to move somewhere else
  componentDidMount() {
    this.getFlashcard();
  }

  //shows the answer
  showAnswer = () => {

  }

  //look at next question. loop back to begining if at end
  nextQuestion = () => {
    if(this.state.currentCard + 1 < this.props.cards.length){
      this.setState({
        currentCard: this.state.currentCard + 1
      });
    }
    else{

      this.setState({
        currentCard: 0
      });
    }
  }
 render(){
   const cards = this.props.cards;
  //take the single cards and display a list of them all
  //only show the answer after it has been clicked
    const flashCardQuestions = cards.map(card => {
      return(
        <div key = {card._id}>
          <li className = "singleCard">{card.question}</li>
          <button onClick = {() => this.showAnswer()}>Show Answer</button>
          <li className = " singleCard" >{card.answer}</li> 
          <button onClick = {() => this.nextQuestion()}>Next Question</button>
        </div>
      )
    });

    return (
    <div>
      {flashCardQuestions[this.state.currentCard]}
    </div>
    )
  }
}

const mapStoreToProps = (store) => {
  return {
    cards:store.cards.cardList,
    count:store.cards.count
  }
}

export default connect(mapStoreToProps, {initCards, counter})(FlashcardList);