import axios from 'axios';


const ADD_CART = 'ADD_CART'

const GET_CART = 'GET_CART'

const _addToCart = (shoe) => ({
  type: ADD_CART,
  shoe,
});

const _getUserCart = (shoe) => ({
  type: GET_CART,
  shoe,
});




export const addToCart = (shoe) =>{
        return async(dispatch) =>{
          // console.log(shoe)
          const {data} = await axios.get(`/api/order_product/${shoe}` )
          dispatch(_addToCart(data))
}}

export const getUserCart = (id) =>{
  return async(dispatch) => {
    const { data } = await axios.get(`api/users/${id}`)
    console.log(data)
    dispatch(_getUserCart(data.cart))
  }
}

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.shoe];
      case GET_CART:
      return [...action.shoe];
    default:
      return state;
  }
}
