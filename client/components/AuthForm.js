import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div id='authform-container'>
      <div className='form-container'>
      <form id="autform" onSubmit={handleSubmit} name={name}>
        <h1>{displayName}</h1>
        <div>
        <br/>
         <br/>
          <br/>
          <label htmlFor="username">
            <h2>Username</h2>
          </label>
          <input className='input-box' name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <h2>Password</h2>
          </label>
          <input className='input-box' name="password" type="password" />
        </div>
        <div id='submit_form'>
          <button className='button-form' type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
