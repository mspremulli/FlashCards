import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';



const INITIAL_STORE = {};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  INITIAL_STORE,
  composeEnhancers(applyMiddleware(...middleware))
)

export default store;
