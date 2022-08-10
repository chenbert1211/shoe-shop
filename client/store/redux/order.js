import axios from 'axios'

const CREATE_ORDER = 'CREATE_ORDER';

const _createOrder = (shoe) => ({
  type: CREATE_ORDER,
  shoe,
});


const _fetchAllOrder = (shoe) => ({
  type: 'FETCH_ORDER',
  shoe,
});

const _updateRec = (shoe) => ({
  type: 'UPDATE_ORDER',
  shoe,
});


export const fetchAllOrder = (id) =>{
        return async(dispatch) =>{
          // console.log(id)
          const {data} = await axios.get(`/api/order`, id )
          dispatch(_fetchAllOrder(data))
}}

export const updateOrder = (id) =>{
        return async(dispatch) =>{
          const { data } = await axios.put(`/api/order`, id )
          console.log(data)
          dispatch(_updateRec(data))
}}

export const createOrder = (rec) =>{
        return async(dispatch) =>{
          // console.log(rec)
          const { data } = await axios.post(`/api/order`, rec )
          dispatch(_createOrder(data))
}}

const initialState = {allOrders:[], currentOrder:{}};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return {...state, currentOrder:action.shoe};
      case 'FETCH_ORDER':
      return {...state, allOrders: action.shoe};
      case 'UPDATE_ORDER':
      return {...state, currentOrder:action.shoe};
    default:
      return state;
  }
}
