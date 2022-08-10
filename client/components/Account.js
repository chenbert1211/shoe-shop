import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //   console.log(this.props.auth)

    //   const { auth } = this.props
    return (
      <div id="account_container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="wrapper-container">
          <div className="container_box">
        <h2>Account</h2>
        <Link to="/editaccount">
          <button className="button_account">Edit</button>
        </Link>
        </div>
        <div className="container_box">
        <br />
        <h2>Security</h2>
        <Link to="/editsecurity">
          <button className="button_account">Edit</button>
        </Link>
        </div>
        <div className="container_box">
        <br />
        <h2>Payment inFormation</h2>
        <Link to="/editpayment">
          <button className="button_account">Edit</button>
        </Link>
        </div>
        </div>
      </div>
    );
  }
    const { auth } = this.props
        return(
            
             <div>
            {auth.isAdmin == true?
            <div>
            <br/><br/><br/><br/><br/><br/><br/>
            Account 
            <Link to='/editaccount'><button>Edit</button></Link>
            <br/>
            
            Security
            <Link to='/editsecurity'><button>Edit</button></Link>
            
            <br/>
            Payment inFormation
            <Link to='/editpayment'><button>Edit</button></Link>
            
            <br/>
            Payment inFormation
            <Link to='/editpayment'><button>Edit</button></Link>
            
            <br/>
            Edit Inventory
            <Link to='/editinventory'><button>Edit</button></Link>
            
            <br/>
            See all users
            <Link to='/seeusers'><button>Edit</button></Link>
            </div>
            
               :
               <div>
            <br/><br/><br/><br/><br/><br/><br/>
            Account 
            <Link to='/editaccount'><button>Edit</button></Link>
            <br/>
            
            Security
            <Link to='/editsecurity'><button>Edit</button></Link>
            
            <br/>
            Payment inFormation
            <Link to='/editpayment'><button>Edit</button></Link>
            
            </div>}
            
            </div>)
    }

}

const mapState = (state) => {
  // console.log(state)
  return {
    auth: state.auth,
  };
};

export default connect(mapState)(Account);
