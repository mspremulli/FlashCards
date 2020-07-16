import {combineReducers} from 'redux';
import cardReducer from './cardReducer';
import register from './register';

export default combineReducers({
  cards:cardReducer,
  register
});