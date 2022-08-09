import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "../store/auth";

class EditPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.auth.id,
      creditCard: null,
      nameOnCard: null,
      CardExp: null,
      address: null,
      city: null,
      state: null,
      zipCode: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateUser({ ...this.state });
  }

  componentDidMount() {
    const { auth } = this.props;
    this.setState({
      creditCard: auth.creditCard,
      nameOnCard: auth.nameOnCard,
      CardExp: auth.CardExp,
      address: auth.address,
      city: auth.city,
      state: auth.state,
      zipCode: auth.zipCode,
    });
  }

  render() {
    const { creditCard, nameOnCard, CardExp, address, city, state, zipCode } =
      this.state;
    // console.log(this.state)
    return (
      <div id="edit_account_body">
        <div className="edit_payment_content">
          <form id="edit_payment" onSubmit={this.handleSubmit}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="edit_payment">
              <h2>Payment Information</h2>
              <div className="input-box">
                <label className="details">
                  Credit Card Number
                  <input
                    placeholder="Credit Card Number"
                    onChange={this.handleChange}
                    className="input"
                    name="creditCard"
                    value={creditCard}
                  />
                </label>
              </div>

              <br></br>

              <div className="input-box">
                <label className="details">
                  Name on card
                  <input
                    placeholder="Name on card"
                    onChange={this.handleChange}
                    className="input"
                    name="nameOnCard"
                    value={nameOnCard}
                  />
                </label>
              </div>

              <br></br>

              <div className="input-box">
                <label className="details">
                  Expiration date
                  <input
                    placeholder="Expiration date"
                    onChange={this.handleChange}
                    className="input"
                    name="CardExp"
                    value={CardExp}
                  />
                </label>
              </div>

              <br></br>

              <h2>Shipping Address</h2>

              <div className="input-box">
                <label className="details">
                  Address
                  <input
                    placeholder="Address"
                    onChange={this.handleChange}
                    className="input"
                    name="address"
                    value={address}
                  />
                </label>
              </div>

              <br></br>

              <div className="input-box">
                <label className="details">
                  City
                  <input
                    placeholder="City"
                    onChange={this.handleChange}
                    className="input"
                    name="city"
                    value={city}
                  />
                </label>
              </div>

              <br></br>

              <div className="input-box">
                <label className="details">
                  State
                  <input
                    placeholder="State"
                    onChange={this.handleChange}
                    className="input"
                    name="state"
                    value={state}
                  />
                </label>
              </div>

              <br></br>

              <div className="input-box">
                <label className="details">
                  Zip Code
                  <input
                    placeholder="Zip Code"
                    onChange={this.handleChange}
                    className="input"
                    name="zipCode"
                    value={zipCode}
                  />
                </label>
              </div>

              <br></br>
              <div>
                <input className="submit-button" type="submit" />
              </div>

              <div>
                <Link to="/account">
                  <button className="cancel-button">Cancel</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  // console.log(state)
  return {
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => ({
  updateUser: (auth) => dispatch(updateUser(auth)),
});

export default connect(mapState, mapDispatch)(EditPayment);
