import React, { Component } from 'react';
import { updateOrder } from "../store/redux/order";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

class Checkout extends Component {
  constructor(props) {
    super(props);
    
    this.recieptNum = this.recieptNum.bind(this)
    this.completedOrder = this.completedOrder.bind(this)
  }
  
  recieptNum()
  {
    let d = new Date();
    function f(n) { return n < 10 ? '0' + n : n; }  
    let random_num = Math.floor(Math.random() * (99999999999 -  10000000000)) + 10000000000;
    random_num = d.getFullYear() + f(d.getMonth()+1) + f(d.getDate()) + random_num; 
    return random_num
  }
  
  completedOrder(event)
  {
    this.props.updateOrder({id: this.props.order.id,reciept:{recieptNumer: this.recieptNum(), status: 'closed'
    }})
  }
  
  render() {
    console.log(this.props.user, this.props.order)
    return (
      <div id="checkout-outmost">
        <div id="checkout-container">
          <div id="checkout">
            <div id="product-name-checkout">Product Name</div>
            <div>Product Quantity</div>
            <div></div>
            <div>Confirm Address</div>
            <div>user address</div>
            <Link to="/reciept">
            <button onClick={this.completedOrder} id="confirm-checkout-button" type="button">
              Confirm and Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>

      // <div>
      // <br/><br/><br/><br/><br/>
      // This is checkout
      // </div>
    );
  }
}

const mapState = (state) => {
  return {
    order: state.orderReducer.currentOrder,
    user: state.auth
  };
};

const mapDispatch = (dispatch) => ({
  updateOrder: (id) => dispatch(updateOrder(id)),
});


export default connect(mapState, mapDispatch)(Checkout);

/*
1. Import fetchSingleShoe
2. Make routes/reducers for User to get the product id
   of the orders in their cart and put them into an array
3. Map over the array of product id's and display a list
   of thier names, size, and the total price of the cart
5. Verify the user's address at the bottom
6. Create a route to set the user's cart = {}
7. Set the orders to closed
*/
