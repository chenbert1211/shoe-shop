import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser } from '../store/auth';

class EditSec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.auth.id,
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateUser({ ...this.state });
  }

  componentDidMount() {
    const { auth } = this.props;
    this.setState({
      username: auth.username,
      password: auth.password,
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div id="edit_security_body">
        <div className="edit_security_content">
          <form id="edit_security" onSubmit={this.handleSubmit}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="edit_security">
              <h2>Username Password</h2>
              <div className="input-box">
                <label className="details">
                  Username
                  <input
                    placeholder="Username"
                    onChange={this.handleChange}
                    className="input"
                    name="username"
                    value={username}
                  />
                </label>
              </div>

              <br></br>

              <div className="input-box">
                <label className="details">
                  Password
                  <input
                    placeholder="Password"
                    onChange={this.handleChange}
                    className="input"
                    name="password"
                    value={password}
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
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => ({
  updateUser: (auth) => dispatch(updateUser(auth)),
});

export default connect(mapState, mapDispatch)(EditSec);
