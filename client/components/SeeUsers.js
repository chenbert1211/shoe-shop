import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'

class SeeUsers extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            allUsers: []
        }
    }
    
    async componentDidMount(){
        const { data } = await axios.get('/api/users')
        this.setState({ allUsers: data})
    }
    
    render(){
    //   console.log(this.props.auth)
    //   const { auth } = this.props
        return(
            
            <div>
            <br/><br/><br/><br/><br/><br/><br/>
            THIS IS ADMIN SEE USERS
              {this.state.allUsers.map(person => 
             <div key={person.id}>{person.username}</div>)}
            </div>)
    }
}

const mapState = (state) => {
  // console.log(state)
  return {
    auth: state.auth
  };
};

export default connect(mapState)(SeeUsers);