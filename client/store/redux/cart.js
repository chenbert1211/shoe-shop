import axios from 'axios';

const ADD_CART = 'ADD_CART';

const GET_CART = 'GET_CART';

const DELETE_SHOE = 'DELETE_SHOE';

const _deleteFromCart = (shoe) => ({
  type: DELETE_SHOE,
  shoe,
});

const _addToCart = (shoe) => ({
  type: ADD_CART,
  shoe,
});

const _getUserCart = (shoe) => ({
  type: GET_CART,
  shoe,
});

const _changeQty = (shoe) => ({
  type: 'CHANGEQTY',
  shoe,
});

export const addToCart = (shoe) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/order_product/${shoe}`);
    dispatch(_addToCart(data));
  };
};

export const getUserCart = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`api/users/${id}`);
    dispatch(_getUserCart(data.cart));
  };
};

export const deleteFromCart = (id) => {
  return _deleteFromCart(id);
};
export const changeQty = (id) => {
  return _changeQty(id);
};
const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      let shoeArr = state.map((shoe) => shoe.id);
      if (shoeArr.includes(action.shoe.id)) {
        return state;
      } else {
        return [...state, action.shoe];
      }
    case GET_CART:
      return [...action.shoe];
    case 'CHANGEQTY':
      const filterQty = state.filter((shoe) => shoe.id != action.shoe.id);
      return [action.shoe, ...filterQty];
    case DELETE_SHOE:
      const filtered = state.filter((shoe) => shoe.id != action.shoe);
      return filtered;
    default:
      return state;
  }
}
