import {INIT, COUNT} from '../actions/type';

const INITIAL_STORE = {
  cardList:[],
  loading: false,
  errors: {},
  count: 0,
};

export default (store = INITIAL_STORE, action) =>{
  // console.log('action',action.payload);
  switch(action.type) {
    // initial case to load the questions
    case INIT:
      return {
        ...store,
        cardList: action.payload
      }
      // counter to test redux
    case COUNT:
      return {
        ...store,
        count:action.payload
      }
    default: return store;
  }

};