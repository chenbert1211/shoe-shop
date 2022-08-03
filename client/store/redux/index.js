import { combineReducers } from 'redux';
import allShoesReducer from './allShoes';

const allReducers = combineReducers({
  allShoes: allShoesReducer,
});

export default allReducers;
