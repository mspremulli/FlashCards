import React from 'react';
import {connect} from 'react-redux';
import {initCards, counter} from '../actions';
import axios from 'axios';

const FlashcardList =(props) =>  {
  
  //get the flashcard data from the backend
  const getFlashcard = () => {
    axios.get('http://localhost:5000/cards')
    .then((response) => {
      const data = response.data;
      // console.log('data',data);


      props.initCards(data);
     
     
      console.log('data recieved')
      
    })
    .catch(() => {
      console.log('data not found')
    })
  }
  
  //should only run once, need to move somewhere else
  getFlashcard();

  let localStyle = { 
    show: {
      opacity: "100"
    },
    hide: {
      opacity: "0"
    }
    
  }

  //shows the answer
  const showAnswer = () => {
    console.log('show answer');
  }
 
  //take the single cards and display a list of them all
  //only show the answer after it has been clicked
  const flashCardQuestions = props.cards.map(card => {
    return(
      <div key = {card._id}>
        <li className = "singleCard">{card.question}</li>
        <button onClick = {() => showAnswer()}>Show Answer</button>
        <li className = " singleCard" style = {localStyle.show}>{card.answer}</li> 
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

const mapStoreToProps = (store) => {
  return {
    cards:store.cards.cardList,
    count:store.cards.count
  }
}

export default connect(mapStoreToProps, {initCards, counter})(FlashcardList);