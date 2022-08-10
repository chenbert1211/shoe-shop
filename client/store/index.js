import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import allShoesReducer from './redux/allShoes';
import singleShoeReducer from './redux/singleShoe';
import cartReducer from './redux/cart';
import orderReducer from './redux/order';

const reducer = combineReducers({ auth, allShoesReducer, singleShoeReducer, cartReducer, orderReducer });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
