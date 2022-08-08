import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import { me } from './store';
import SingleShoe from './components/SingleShoe';
import Cart from './components/Cart';
import Account from './components/Account';
import EditAccount from './components/EditAccount';
import EditPayment from './components/EditPayment';
import EditSec from './components/EditSec';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
// console.log(isLoggedIn)
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/:id" component={SingleShoe} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path='/cart' component={Cart} />
            <Route path='/account' component={Account} />
            <Route path='/editaccount' component={EditAccount} />
            <Route path='/editpayment' component={EditPayment} />
            <Route path='/editsecurity' component={EditSec} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/:id" component={SingleShoe} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path='/cart' component={Cart} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
