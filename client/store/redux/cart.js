import axios from 'axios';


const ADD_CART = 'ADD_CART'

const _addToCart = (shoe) => ({
  type: ADD_CART,
  shoe,
});

export const addToCart = (shoe) =>{
        return async(dispatch) =>{
          console.log(shoe)
          const {data} = await axios.get(`/api/order_product/${shoe}` )
          dispatch(_addToCart(data))
}}

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.shoe];
    default:
      return state;
  }
}
