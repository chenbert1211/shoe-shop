import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser, deleteUser } from '../store/auth';

class EditAccount extends React.Component{
constructor(props){
    super(props)
     this.state = {
        id: this.props.auth.id,
        firstName: null,
        lastName: null,
        imageUrl: null,
        phoneNumber: null,
        email: null
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleteAccount = this.deleteAccount.bind(this)
}

handleChange(event){
     this.setState({
       [event.target.name]: event.target.value
     })
   }
   
   handleSubmit(event){
     event.preventDefault();
     this.props.updateUser({...this.state})
   }

componentDidMount(){
    const { auth } = this.props
    this.setState({
        firstName: auth.firstName,
        lastName: auth.lastName,
        imageUrl: auth.imageUrl,
         phoneNumber: auth.phoneNumber,
        email: auth.email
    })
}

deleteAccount(){
    // console.log(this.props)
   this.props.deleteUser(this.state.id)
}

render()
{
    const { firstName, lastName, imageUrl, phoneNumber, email } = this.state
    // console.log(this.state)
    return(
        <div className='Account'>
        <form onSubmit={this.handleSubmit}>
        
        <br></br><br></br><br></br><br></br>
        
        <h2>Account Information</h2>
            <label>
            First Name
        <input placeholder="First Name"  onChange={this.handleChange} className='input' name="firstName" value={firstName}/>
            </label>
    <br></br>
            <label>
            Last Name
        <input placeholder="Last Name" onChange={this.handleChange} className='input' name="lastName" value={lastName}/>
            </label><br></br>
            <label>
            Profile Picture
        <input placeholder="Profile Picture" onChange={this.handleChange} className='input' name="imageUrl" value={imageUrl}/>
            </label><br></br>
            <label>
            Cell Number
        <input placeholder="Cell Number" onChange={this.handleChange} className='input' name="phoneNumber" value={phoneNumber}/>
            </label><br></br>
            <label>
            Email
        <input placeholder="Email" onChange={this.handleChange} className='input' name="email" value={email}/>
            </label><br></br>
    <input type="submit"/>
  <Link to='/account'><button >Cancel</button></Link>
</form>
<button onClick={this.deleteAccount}>DELETE ACCOUNT</button>
  </div>
        )
}
}

const mapState = (state) => {
  // console.log(state)
  return {
    auth: state.auth
  };
};


const mapDispatch = (dispatch) => (
    {
  updateUser: (auth) => dispatch(updateUser(auth)),
  deleteUser: (id) => dispatch(deleteUser(id))
})

export default connect(mapState, mapDispatch)(EditAccount);