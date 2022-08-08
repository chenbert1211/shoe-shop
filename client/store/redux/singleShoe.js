import axios from 'axios';

const SET_SINGLE_SHOE = 'SET_SINGLE_SHOE';

const _setSingleShoe = (shoe) => ({
  type: SET_SINGLE_SHOE,
  shoe,
});

export const fetchSingleShoe = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(_setSingleShoe(data));
  };
};

const initialState = {};

export default function singleShoeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_SHOE:
      return action.shoe;
    default:
      return state;
  }
}
