import {
  REGISTER_GOOD,
  REGISTER_FAIL,
  USER_LOADED
} from '../actions/type';

const initialState = {
  isAuth: false,
  token: localStorage.getItem('token'),
  user: null

}

export default function(state = initialState, action) {
  switch(action.type){
    case REGISTER_GOOD:
      return{
        ...state,
        user: action.payload,
        isAuth: true
      }
    case REGISTER_FAIL:
      return{
        ...state,
        token: null,
        isAuth: false
      }
    case USER_LOADED:
    return {
      ...state,
      isAuth: true,
      user: action.payload
    }
    default:
      return state;
  }
}