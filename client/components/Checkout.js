import React, { Component } from 'react';

import { connect } from 'react-redux';

class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="checkout-outmost">
        <div id="checkout-container">
          <div id="checkout">
            <div id="product-name-checkout">Product Name</div>
            <div>Product Quantity</div>
            <div></div>
            <div>Confirm Address</div>
            <div>user address</div>
            <button id="confirm-checkout-button" type="button">
              Confirm and Checkout
            </button>
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

export default Checkout;

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
