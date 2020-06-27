import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initCards, counter} from '../actions';
import axios from 'axios';


//change back to class to use componentdidmount method??
class FlashcardList extends Component  {
  
  //get the flashcard data from the backend
  getFlashcard = () => {
    axios.get('http://localhost:5000/cards')
    .then((response) => {
      const data = response.data;
      // console.log('data',data);


      this.props.initCards(data);
     
     
      console.log('data recieved')
      
    })
    .catch(() => {
      console.log('data not found')
    })
  }
  
  //should only run once, need to move somewhere else
  componentDidMount(){
    this.getFlashcard();
  }

  localStyle = { 
    show: {
      opacity: "100"
    },
    hide: {
      opacity: "0"
    }
    
  }

  //shows the answer
  showAnswer = () => {
    console.log('show answer');
  }
 render(){
  const props = this.props;
 
  //take the single cards and display a list of them all
  //only show the answer after it has been clicked
    const flashCardQuestions = props.cards.map(card => {
      return(
        <div key = {card._id}>
          <li className = "singleCard">{card.question}</li>
          <button onClick = {() => this.showAnswer()}>Show Answer</button>
          <li className = " singleCard" style = {this.localStyle.show}>{card.answer}</li> 
          <button>Next Question</button>
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

const mapStoreToProps = (store) => {
  return {
    cards:store.cards.cardList,
    count:store.cards.count
  }
}

export default connect(mapStoreToProps, {initCards, counter})(FlashcardList);