import {INIT, COUNT} from './type';

//inital load of the flashcard questions
export const initCards = (_) => (dispatch) => {
  dispatch({
    type: INIT,
    payload: _
  });
};
//simple counter just to test that redux is working
export const counter = (num) => (dispatch) => {
  dispatch({
    type: COUNT,
    payload: num+1
  });
};