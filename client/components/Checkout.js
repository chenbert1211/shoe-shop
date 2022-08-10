import React, { Component } from 'react';
import { getUserCart, finishCheckout } from '../store/redux/cart';
import { updateUser } from '../store/auth';
import { updateOrder } from '../store/redux/order';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.recieptNum = this.recieptNum.bind(this);
    this.completedOrder = this.completedOrder.bind(this);
  }

  recieptNum() {
    let d = new Date();
    function f(n) {
      return n < 10 ? '0' + n : n;
    }
    let random_num =
      Math.floor(Math.random() * (99999999999 - 10000000000)) + 10000000000;
    random_num =
      d.getFullYear() + f(d.getMonth() + 1) + f(d.getDate()) + random_num;
    return random_num;
  }

  completedOrder(event) {
    this.props.updateOrder({
      id: this.props.order.id,
      reciept: { recieptNumer: this.recieptNum(), status: 'closed' },
    });
    this.props.finishCheckout();
  }

  isLoggedIn() {
    const user = this.props.auth;
    const cartArray = this.props.Cart;
    const cardNumArr =
      typeof user.creditCard === 'string' ? user.creditCard.split('') : '';

    const lastFourNums = `${cardNumArr[12]}${cardNumArr[13]}${cardNumArr[14]}${cardNumArr[15]} `;

    if (user.id) {
      return (
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
            {user.firstName} {user.lastName}
          </div>
          <Link to="/reciept">
            <button
              onClick={this.completedOrder}
              id="confirm-checkout-button"
              type="button"
            >
              Confirm and Checkout
            </button>
          </Link>
        </div>
      );
    } else {
      return (
        <div id="checkout-user-info">
          <form>
            <div className="checkout-payment-title">
              Payment & Shipping Information
            </div>
            <div className="guest-checkout-input-field">
              <input
                type="text"
                placeholder="Enter Shipping Address"
                className="payment-shipping-title"
              />
            </div>

            <div className="guest-checkout-input-field">
              <input
                type="text"
                placeholder="Enter Card Number"
                className="payment-shipping-title"
              />
            </div>
            <div className="guest-checkout-input-field">
              <input
                type="text"
                placeholder="Enter Card Expiration"
                className="payment-shipping-title"
              />
            </div>
            <div className="guest-checkout-input-field">
              <input
                type="text"
                placeholder="Name On Card"
                className="payment-shipping-title"
              />
            </div>

            <Link to="/reciept">
              <button
                onClick={this.completedOrder}
                id="confirm-checkout-button"
                type="button"
              >
                Confirm and Checkout
              </button>
            </Link>
          </form>
        </div>
      );
    }
  }

  async componentDidMount() {
    if (this.props.auth.id) {
      await this.props.updateUser({
        id: this.props.auth.id,
        cart: this.props.Cart,
      });
    }
  }

  render() {
    const cartArray = this.props.Cart;
    const user = this.props.auth;
    const cardNumArr =
      typeof user.creditCard === 'string' ? user.creditCard.split('') : '';

    const lastFourNums = `${cardNumArr[15]}${cardNumArr[16]}${cardNumArr[17]}${cardNumArr[18]} `;
    let subtotal = 0;

    return (
      <div id="checkout-outmost">
        <div id="checkout-items-outmost">
          <div id="checkout-container">
            <div id="checkout">
              <div id="product-info-checkout">
                <div className="checkout-payment-title">Items In Your Cart</div>
                {cartArray?.map((cartItem, idx) => {
                  subtotal += cartItem.price * cartItem.quantity;
                  if (idx !== cartArray.length - 1) {
                    return (
                      <div key={cartItem.id} id="checkout-item">
                        <div id="checkout-item-price">
                          <span className="item-price-text">Price: </span>$
                          {(cartItem.price * parseInt(cartItem.quantity)) / 100}
                        </div>
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
                        <div id="checkout-item-price">
                          <span className="item-price-text">Price: </span>$
                          {(cartItem.price * parseInt(cartItem.quantity)) / 100}
                        </div>
                        <img
                          src={cartItem.product.imageUrl}
                          id="checkout-image"
                        />
                        <div>{cartItem.product.name}</div>
                        <div>
                          <span id="item-size-text">Size</span> {cartItem.size}-
                          {cartItem.category}
                        </div>
                        <div id="total-price">
                          Subtotal: <span>${subtotal / 100}</span>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        {this.isLoggedIn()}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    Cart: state.cartReducer,
    auth: state.auth,
    order: state.orderReducer.currentOrder,
    user: state.auth,
  };
};

const mapDispatch = (dispatch) => ({
  getUserCart: (id) => dispatch(getUserCart(id)),
  updateUser: (auth) => dispatch(updateUser(auth)),
  updateOrder: (id) => dispatch(updateOrder(id)),
  finishCheckout: () => dispatch(finishCheckout()),
});

export default connect(mapState, mapDispatch)(Checkout);
