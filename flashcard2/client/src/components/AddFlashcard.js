import React from 'react';
import Input from './Input';

//allows the user to add a new flashcard to a collection

const AddFlashcard = (props) =>  {

  

const handleSubmit = () => {

}


  return(
    <div>
      <form className = 'addCard' >
      
      <input
        type="text"
        id="question"
        placeholder="Enter Question"
        
        required
      />

      <input
        type = "text"
        id = "title"
        placeholder="enter answer"
        
        required
      />

      <div>
        <select id = 'collection'
            
        >
          <option value="" disabled>
           Collection
          </option>
          <option >Intro</option>
          <option >Javascript</option>
          <option >React</option>
          
        </select>
      </div>


      <button onClick = {() => handleSubmit}>
        Submit
      </button>
      </form>
    </div>
  )
}


export default AddFlashcard;