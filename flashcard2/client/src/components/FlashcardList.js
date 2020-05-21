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

  // getFlashcard();

 
  //take the single cards and display a list of them all
  //only show the answer that has been clicked
  const flashCardQuestions = props.cards.map(card => {
    return(
      <div key = {card._id}>
        <li>{card.question}</li>
        <li>{card.answer}</li> 
      </div>
    )
  })

    return (
    <div>
      {flashCardQuestions}
      {props.count}
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