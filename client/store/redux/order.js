import axios from 'axios'

const CREATE_ORDER = 'CREATE_ORDER';

const _createOrder = (shoe) => ({
  type: CREATE_ORDER,
  shoe,
});

export const createOrder = (userCart) =>{
        return async(dispatch) =>{
          // console.log(shoe)
          await axios.post(`/api/order` )
          dispatch(_createOrder(userCart))
}}