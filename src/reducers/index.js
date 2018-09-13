import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import cart from './cart_item';
import cartkey from './cartkey';

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
  cart,
  cartkey
});

export default rootReducer;
