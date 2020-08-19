import React, {useState , useEffect} from 'react';
import {connect} from 'react-redux';
import {initCards} from '../actions';
import axios from 'axios';

const FlashcardList = ({cards}) =>  {

//   const [showResults, setShowResults] = React.useState(false)
//   const onClick = () => setShowResults(true)
//   return (
//     <div>
//       <input type="submit" value="Search" onClick={onClick} />
//       { showResults ? <Results /> : null }
//     </div>
//   )
// }

// const Results = () => (
//   <div id="results" className="search-results">
//     Some Results
//   </div>
// )

const getFlashcard = () => {
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

const [cardIndex, setCardIndex] = useState(0);

//get the flashcard data from the backend
// const [cards, setCards] = useState(0);
useEffect(() => {
 getFlashcard();
});


  
  //shows the answer
  const showAnswer = () => {

  }

  //look at next question. loop back to begining if at end
  const nextQuestion = () => {
    if(cardIndex + 1 < cards.length){
      setCardIndex(cardIndex + 1)
    }
    else{
      setCardIndex(0);
    }
    console.log(cardIndex);
  }

//   const cards = props.cards;
//   //take the single cards and display a list of them all
//   //only show the answer after it has been clicked
//   const flashCardQuestions = cards.map(card => {
//     return(
//       <div key = {card._id}>
//         <li className = "singleCard">{card.question}</li>
//         <button onClick = {() => showAnswer()}>Show Answer</button>
//         <li className = " singleCard" >{card.answer}</li> 
//         <button onClick = {() => nextQuestion()}>Next Question</button>
//       </div>
//     )
//   });

  return (
  <div>
   {cardIndex}
   {getFlashcard}
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