import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Account extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
       console.log(this.props.auth)
       const { auth } = this.props
        return(
            
            <div>
            <br/><br/><br/><br/><br/><br/><br/>
            Account
            <h1>username: {auth.username}</h1>
            <h1>First Name: {auth.firstName}</h1>
            <h1>Last Name: {auth.lastName}</h1>
            </div>)
    }
}

const mapState = (state) => {
  // console.log(state)
  return {
    auth: state.auth
  };
};

export default connect(mapState)(Account);