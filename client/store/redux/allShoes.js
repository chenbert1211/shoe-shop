import axios from 'axios';

const SET_SHOES = 'SET_SHOES';

export const _setShoes = (shoesArr) => ({
  type: SET_SHOES,
  shoesArr,
});

export const fetchShoes = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/products');
    dispatch(_setShoes(data));
  };
};

const initialState = [];

export default function allShoesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SHOES:
      return action.shoesArr;
    default:
      return state;
  }
}
