import React from 'react';

const FlashcardList = ({ flashcards, deleteFlashcard }) => {

  return (
    <ul>
      {
        flashcards &&
        flashcards.length > 0 ?
            (
                flashcards.map(card => {
                return (
                  <li key={card._id} onClick={() => deleteFlashcard(card._id)}>{card.action}</li>
                )
              })
            )
            :
            (
              <li>No flashcards left</li>
            )
      }
    </ul>
  )
}

export default FlashcardList