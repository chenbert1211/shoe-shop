import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser } from '../store/auth';

class EditPayment extends React.Component{
constructor(props){
    super(props)
     this.state = {
        id: this.props.auth.id,
        creditCard: null,
        nameOnCard: null,
        CardExp: null,
        address: null,
        city: null,
        state: null,
        zipCode: null
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        creditCard: auth.creditCard,
        nameOnCard: auth.nameOnCard,
        CardExp: auth.CardExp,
        address: auth.address,
        city: auth.city,
        state: auth.state,
        zipCode: auth.zipCode
    })
}

render()
{
    const { creditCard, nameOnCard, CardExp, address, city, state, zipCode} = this.state
    // console.log(this.state)
    return(
        <div className='Account'>
        <form onSubmit={this.handleSubmit}>
        
        <br></br><br></br><br></br><br></br>
        
        <h2>Payment Information</h2>
            <label>
            Credit Card Number
        <input placeholder="Credit Card Number"  onChange={this.handleChange} className='input' name="creditCard" value={creditCard}/>
            </label>
    <br></br>
            <label>
            Name on card
        <input placeholder="Name on card" onChange={this.handleChange} className='input' name="nameOnCard" value={nameOnCard}/>
            </label><br></br>
            <label>
            Expiration date
        <input placeholder="Expiration date" onChange={this.handleChange} className='input' name="CardExp" value={CardExp}/>
            </label><br></br>
            
            
            <h2>Shipping Address</h2>
            <label>
            Address
        <input placeholder="Address"  onChange={this.handleChange} className='input' name="address" value={address}/>
            </label>
    <br></br>
            <label>
            City
        <input placeholder="City" onChange={this.handleChange} className='input' name="city" value={city}/>
            </label><br></br>
            <label>
            State
        <input placeholder="State" onChange={this.handleChange} className='input' name="state" value={state}/>
            </label><br></br>
            <label>
            Zip Code
        <input placeholder="Zip Code" onChange={this.handleChange} className='input' name="zipCode" value={zipCode}/>
            </label><br></br>
            
            
    <input type="submit"/>
  <Link to='/account'><button >Cancel</button></Link>
</form>
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
  updateUser: (auth) => dispatch(updateUser(auth))
})


export default connect(mapState, mapDispatch)(EditPayment);