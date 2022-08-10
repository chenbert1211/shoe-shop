import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../store/auth";
import { deleteFromCart } from "../store/redux/cart";
import { createOrder } from "../store/redux/order";
import { getUserCart, changeQty } from "../store/redux/cart";
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.changeQtiy = this.changeQtiy.bind(this);

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
  
  createOrder()
  {
    const cartShoe = this.props.Cart
    // console.log(cartShoeIds, this.props.auth.id)
    this.props.createOrder({userId: this.props.auth.id,
      orderPrducts: cartShoe
    })
  }

  async changeQtiy(event) {
    let qty = event.target.value;
    let id = event.target.title;
    let sizeChange = this.props.Cart.filter((shoe) => shoe.id == id);
    sizeChange[0].quantity = qty;
    this.props.changeQty(sizeChange[0]);
    if (!!this.props.auth.id) {
      this.props.updateUser({ id: this.props.auth.id, cart: this.props.Cart });
    }
  }

  render() {
    const { Cart } = this.props;
    // console.log(Cart)
    return (
      <div id="cart">
        <br />
        <br />
        <br />
        <br />
        <div id="cart_wrapper" className="wrapper">
          <h1>Cart</h1>
          <div className="project">
            <div className="shop">
              {Cart.length > 0
                ? Cart.map((cart) => {
                    return (
                      <div className="box" key={cart.id}>
                        <img src={cart.product.imageUrl} alt="" width="160px" />
                        <div className="content">
                          <h3>{cart.product.name}</h3>
                          <h4>Size: {cart.size}</h4>
                          <h4>Price: ${cart.price / 100}</h4>
                          <div>
                            <label className="unit">
                              Quantity{" "}
                              <input
                                className="unit"
                                min="1"
                                type="number"
                                id="input_quantity"
                                title={cart.id}
                                value={cart.quantity}
                                onChange={this.changeQtiy}
                              ></input>
                            </label>
                            <p className="btn-area">
                              <i></i>
                              <button
                                className="btn2"
                                onClick={this.deleteFromCart}
                                value={cart.id}
                              >
                                delete
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : "Cart is currently emtpy"}
            </div>
            <div className="right-bar">
              <p>
                <span>Subtotal</span>
                <span>Temporary Total: X</span>
              </p>
              <div>
                <Link to="/checkout">
                  <button onClick={this.createOrder} className="checkout-button">Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
  createOrder: (id) => dispatch(createOrder(id)),
  changeQty: (shoe) => dispatch(changeQty(shoe)),
});

export default connect(mapState, mapDispatch)(Cart);
