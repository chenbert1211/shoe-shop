import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    
    render(){
    const { Cart } = this.props
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
  };
};


export default connect(mapState)(Cart);
