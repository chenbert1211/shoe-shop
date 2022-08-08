import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../store/auth';

class Cart extends Component {
    constructor(props){
        super(props)
        // console.log(this.props)
    }
    
    componentDidMount(){
        if(!!this.props.auth.id)
        {
            this.props.updateUser({id: this.props.auth.id,
                cart: this.props.Cart
            })         
        }
    }
    
    render(){
    const { Cart } = this.props
    console.log(Cart)
        return (
        <div>
        <br/><br/><br/><br/>
        {Cart.length > 0? Cart.map(cart => 
           { return (
           <div key={cart.id}>
           <img src={cart.product.imageUrl} />
           <h3>{cart.product.name}</h3>
           {cart.size}
           </div>)
        }): 'Cart is currently emtpy'}
        </div>)
    }
}

const mapState = (state) => {
  return {
     Cart: state.cartReducer,
     auth: state.auth
  };
};
const mapDispatch = (dispatch) => (
    {
  updateUser: (auth) => dispatch(updateUser(auth))
})


export default connect(mapState, mapDispatch)(Cart);
