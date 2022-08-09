import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../store/auth';
import { deleteFromCart } from '../store/redux/cart';
import { getUserCart } from '../store/redux/cart';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  async componentDidMount() {
    if (!!this.props.auth.id) {
      // await this.props.getUserCart(this.props.auth.id)
      await this.props.updateUser({
        id: this.props.auth.id,
        cart: this.props.Cart,
      });
      // this.props.getUserCart(this.props.auth.id)
    }
  }

  async deleteFromCart() {
    await this.props.deleteShoe(event.target.value);
    if (!!this.props.auth.id) {
      this.props.updateUser({ id: this.props.auth.id, cart: this.props.Cart });
    }
  }

  render() {
    const { Cart } = this.props;
    // console.log(Cart)
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        {Cart.length > 0
          ? Cart.map((cart) => {
              return (
                <div key={cart.id}>
                  <img src={cart.product.imageUrl} />
                  <h3>{cart.product.name}</h3>
                  {cart.size}
                  <button onClick={this.deleteFromCart} value={cart.id}>
                    delete
                  </button>
                </div>
              );
            })
          : 'Cart is currently emtpy'}
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
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
  getUserCart: (id) => dispatch(getUserCart(id)),
  updateUser: (auth) => dispatch(updateUser(auth)),
  deleteShoe: (id) => dispatch(deleteFromCart(id)),
});

export default connect(mapState, mapDispatch)(Cart);
