import axios from 'axios';
import {
  REGISTER_FAIL,
  REGISTER_GOOD,
  USER_LOADED,
} from './type';
import setAuthToken from '../utils/setAuthToken';

//Load User
export const loadUser = () => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }
  
  try {
    const res = await axios.get('http://localhost:5000/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    });
  }

}

//Register User
export const register = ({email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({email, password});
  // console.log(body);
    
    try {
      const res = await axios.post('http://localhost:5000/users', body, config);
      dispatch({
        type: REGISTER_GOOD,
        payload: res.data
      });
      dispatch(loadUser());
    }
    catch (err) {
      dispatch({
        type: REGISTER_FAIL
      });
    }
}

//Login User
export const login = ({email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({email, password});
    
    try {
      const res = await axios.put('http://localhost:5000/users/login', body, config);
      dispatch({
        type: REGISTER_GOOD,
        payload: res.data
      });
      dispatch(loadUser());
    }
    catch (err) {
      dispatch({
        type: REGISTER_FAIL
      });
    }
}