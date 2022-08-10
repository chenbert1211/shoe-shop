import React, { Component } from 'react';
// import { getUserCart } from '../store/redux/cart';
import { updateUser } from '../store/auth';
import { connect } from 'react-redux';

class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    if (this.props.auth.id) {
      // await this.props.getUserCart(this.props.auth.id);
      await this.props.updateUser({
        id: this.props.auth.id,
        cart: this.props.Cart,
      });
    }
  }

  render() {
    const cartArray = this.props.auth.cart;
    const user = this.props.auth;
    const cardNumArr =
      typeof user.creditCard === 'string' ? user.creditCard.split('') : '';

    const lastFourNums = `${cardNumArr[15]}${cardNumArr[16]}${cardNumArr[17]}${cardNumArr[18]} `;
    console.log('user', user);
    return (
      <div id="checkout-outmost">
        <div id="checkout-items-outmost">
          <div id="checkout-container">
            <div id="checkout">
              <div id="product-info-checkout">
                <div className="checkout-payment-title">Items In Your Cart</div>
                {cartArray?.map((cartItem, idx) => {
                  if (idx !== cartArray.length - 1) {
                    return (
                      <div key={cartItem.id} id="checkout-item">
                        <div id="checkout-item-label">Item {idx + 1}</div>
                        <img
                          src={cartItem.product.imageUrl}
                          id="checkout-image"
                        />
                        <div>{cartItem.product.name}</div>
                        <div>
                          <span id="item-size-text">Size</span> {cartItem.size}-
                          {cartItem.category}
                        </div>
                        <div id="checkout-item-seperator"></div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={cartItem.id} id="checkout-item">
                        <div id="checkout-item-label">Item {idx + 1}</div>
                        <img
                          src={cartItem.product.imageUrl}
                          id="checkout-image"
                        />
                        <div>{cartItem.product.name}</div>
                        <div>
                          <span id="item-size-text">Size</span> {cartItem.size}-
                          {cartItem.category}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        <div id="checkout-user-info">
          <div className="checkout-payment-title">
            Payment & Shipping Information
          </div>
          <div className="payment-shipping-title">Shipping Address</div>
          <div>
            {user.address}, {user.city}, {user.state} {user.zipCode}
          </div>
          <div>
            <div className="payment-shipping-title">Card Number</div>
            ...............{lastFourNums}
          </div>
          <div className="payment-shipping-title">Card Expiration</div>
          <div>{user.CardExp}</div>
          <div className="payment-shipping-title">Name On Card</div>
          <div>
            {user.nameOnCard} {user.lastName}
          </div>
          <button id="confirm-checkout-button" type="button">
            Confirm and Checkout
          </button>
        </div>
        {/* <button id="confirm-checkout-button" type="button">
          Confirm and Checkout
        </button> */}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    Cart: state.cartReducer,
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => ({
  // getUserCart: (id) => dispatch(getUserCart(id)),
  updateUser: (auth) => dispatch(updateUser(auth)),
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
