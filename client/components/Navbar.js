import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';


const Navbar = ({ handleClick, isLoggedIn, auth}) => (
  <div>
    <nav>
      <div id="navbar">
        <input id="searchbar" type="text" placeholder="Search"></input>
        {/* <h1 id="logo-text">FlightClub 2: Still Flying</h1> */}
        <Link to="/">
          <img id="nbf-logo" src="/nbf-logo-3.png" />
        </Link>
        <div id="left-nav-buttons">
          {isLoggedIn?
          <div id="user-container">
            <a>{auth.username}</a>
            <div id="user-icon"></div>
            <div id="user-container-dropdown">
            <Link to="/account">
              <a>Account</a>
            </Link>
              <a onClick={handleClick}>Logout</a>
            </div></div>
            :
             <div id="user-container">
            <a>Guest</a>
            <div id="user-icon"></div>
              <div id="user-container-dropdown">
              <Link to="/signup">
                <a>Create Account</a>
              </Link>
              <Link to="/login">
                <a>Log In</a>
              </Link>
            </div> 
          </div>}
          <Link to='/cart'><img id="cart-icon" src="/cart-icon.png"/></Link>
        </div>
      </div>
    </nav>
  </div>
  // <div>
  //   <h1>Navbar</h1>
  //   <nav>
  //     {isLoggedIn ? (
  //       <div>
  //         {/* The navbar will show these links after you log in */}
  //         <Link to="/home">Home</Link>
  //         <a href="#" onClick={handleClick}>
  //           Logout
  //         </a>
  //       </div>
  //     ) : (
  //       <div>
  //         {/* The navbar will show these links before you log in */}
  //         <Link to="/login">Login</Link>
  //         <Link to="/signup">Sign Up</Link>
  //       </div>
  //     )}
  //   </nav>
  //   <hr />
  // </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  // console.log(state)
  return {
    isLoggedIn: !!state.auth.id,
    auth: state.auth
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
