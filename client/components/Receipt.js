import React, { Component } from 'react';

import { connect } from 'react-redux';

class Reciept extends Component {
  constructor(props) {
    super(props);
}

  
  render() {
    return (
      <div >
       reciept number: {this.props.order.recieptNumer}
      </div>

      // <div>
      // <br/><br/><br/><br/><br/>
      // This is checkout
      // </div>
    );
  }
}

const mapState = (state) => {
  return {
    order: state.orderReducer.currentOrder,
    user: state.auth
  };
};

export default connect(mapState)(Reciept);
