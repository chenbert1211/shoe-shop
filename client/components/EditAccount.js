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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

deleteAccount(){
    // console.log(this.props)
   this.props.deleteUser(this.state.id)
}

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateUser({ ...this.state });
  }

  componentDidMount() {
    const { auth } = this.props;
    this.setState({
      firstName: auth.firstName,
      lastName: auth.lastName,
      imageUrl: auth.imageUrl,
      phoneNumber: auth.phoneNumber,
      email: auth.email,
    });
  }

  render() {
    const { firstName, lastName, imageUrl, phoneNumber, email } = this.state;
    // console.log(this.state)
    return (
      <div id="edit_account_body">
        <div class="edit_account_content">
          <form id="edit_account" onSubmit={this.handleSubmit}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="edit_account">
              <h1>Account Information</h1>
              <div class="input-box">
                <label className="details" for="first_name">
                  First Name
                  <input
                    placeholder="First Name"
                    onChange={this.handleChange}
                    className="input"
                    name="firstName"
                    value={firstName}
                  />
                </label>
              </div>
              <br></br>

              <div class="input-box">
                <label className="details" for="last_name">
                  Last Name
                  <input
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    className="input"
                    name="lastName"
                    value={lastName}
                  />
                </label>
              </div>

              <br></br>

              <div class="input-box">
                <label className="details" for="profile_picture">
                  Profile Picture
                  <input
                    placeholder="Profile Picture"
                    onChange={this.handleChange}
                    className="input"
                    name="imageUrl"
                    value={imageUrl}
                  />
                </label>
              </div>

              <br></br>

              <div class="input-box">
                <label className="details" for="cell_number">
                  Cell Number
                  <input
                    placeholder="Cell Number"
                    onChange={this.handleChange}
                    className="input"
                    name="phoneNumber"
                    value={phoneNumber}
                  />
                </label>
              </div>
              <br></br>

              <div class="input-box">
                <label className="details" for="email">
                  Email
                  <input
                    placeholder="Email"
                    onChange={this.handleChange}
                    className="input"
                    name="email"
                    value={email}
                  />
                </label>
              </div>
              <br></br>
              <div>
                <input className="submit-button" type="submit" />
              </div>
              <div>
                <Link to="/account">
                  <button className="cancel-button">Cancel</button>
                </Link>
                <Link to='/account'><button >Cancel</button></Link>
              </div>
            </div>
          </form>
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


const mapDispatch = (dispatch) => (
    {
  updateUser: (auth) => dispatch(updateUser(auth)),
  deleteUser: (id) => dispatch(deleteUser(id))
})

export default connect(mapState, mapDispatch)(EditAccount);

