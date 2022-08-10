import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //   console.log(this.props.auth)
    //   const { auth } = this.props
    return (
      <div id="account_container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
        <h2>Payment inFormation</h2>
        <Link to="/editpayment">
          <button className="button_account">Edit</button>
        </Link>
        </div>
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

export default connect(mapState)(Account);
