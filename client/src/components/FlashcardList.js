import React, {useState , useEffect} from 'react';
import {connect} from 'react-redux';
import {initCards} from '../actions';
import axios from 'axios';

const FlashcardList = ({cards, initCards}) =>  {
  //get the flashcard data from the backend
  const getFlashcard = () => {
    axios.get('http://localhost:5000/cards')
    .then((response) => {
      const data = response.data;
      initCards(data);
      
      console.log('data recieved');
    })
    .catch(() => {
      console.log('data not found');
    })
  }

  const [cardIndex, setCardIndex] = useState(0);
  useEffect(() => {
    getFlashcard();
  }, []);

  const [myStyle, setMyStyle] = useState({opacity:0});
  
  //look at next question. loop back to begining if at end
  const nextQuestion = () => {
    setMyStyle({opacity:0})
    if(cardIndex + 1 < cards.length){
      setCardIndex(cardIndex + 1)
    }
    else{
      setCardIndex(0);
    }
  }

  //take the single cards and display a list of them all
  //only show the answer after it has been clicked
    const flashCardQuestions = cards.map(card => {
    return(
      <div key = {card._id}>
        <li className = "singleCard">{card.question}</li>
        <li className = " singleCard" style = {myStyle} >{card.answer}</li> 
      </div>
    )
  });

  return (
    <div>
    {flashCardQuestions[cardIndex]}
    <button onClick = {() => setMyStyle({opacity:100})}>Show Answer</button>
    <button onClick = {() => nextQuestion()}>Next Question</button>
    </div>
  )
}

const mapStoreToProps = (store) => {
  return {
    cards:store.cards.cardList,
  }
}

export default connect(mapStoreToProps, {initCards})(FlashcardList);