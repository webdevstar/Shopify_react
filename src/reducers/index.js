import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import cart from './cart_item';

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
  cart,
});

export default rootReducer;
