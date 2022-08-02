import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      <div id="navbar">
        <input id="searchbar" type="text" placeholder="Search"></input>
        <h1 id="logo-text">FlightClub 2: Still Flying</h1>
        <div id="left-nav-buttons">
          <div id="user-container">
            <a>Guest</a>
            <div id="user-icon"></div>
            <div id="user-container-dropdown">
              <a>Create Account</a>
              <a>Log In</a>
            </div>
          </div>
          <img id="cart-icon" src="/cart-icon.png" />
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
  return {
    isLoggedIn: !!state.auth.id,
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
