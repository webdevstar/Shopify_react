import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import cart from './cart_item';
import cartkey from './cartkey';
import search from './search';
import show from './showtype';
import api from './api';

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
  cart,
  cartkey,
  search,
  show,
  api
});

export default rootReducer;
