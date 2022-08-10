import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { auth } = this.props;
    return (
      <div id="account_container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {auth.isAdmin == true ? (
          <div className="wrapper-container">
            <div className="container_box">
              <h2>Account</h2>
              <Link to="/editaccount">
                <button className="button_account">Edit</button>
              </Link>
            </div>
            <div className="container_box">
              <h2>Security</h2>
              <Link to="/editsecurity">
                <button className="button_account">Edit</button>
              </Link>
            </div>
            <div className="container_box">
              <h2>Payment Information</h2>
              <Link to="/editpayment">
                <button className="button_account">Edit</button>
              </Link>
            </div>
            <div className="container_box">
              <h2>Edit Inventory</h2>
              <Link to="/editinventory">
                <button className="button_account">Edit</button>
              </Link>
            </div>
            <div className="container_box">
              <h2>See all users</h2>
              <Link to="/seeusers">
                <button className="button_account">Edit</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="wrapper-container">
            <div className="container_box">
              <h2>Account</h2>
              <Link to="/editaccount">
                <button className="button_account">Edit</button>
              </Link>
            </div>
            <div className="container_box">
              <br />
              <h2>Security</h2>
              <Link to="/editsecurity">
                <button className="button_account">Edit</button>
              </Link>
            </div>
            <div className="container_box">
              <br />
              <h2>Payment Information</h2>
              <Link to="/editpayment">
                <button className="button_account">Edit</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapState)(Account);
