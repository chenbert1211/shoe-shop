import React, { Component } from 'react';

import { connect } from 'react-redux';

class Reciept extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="reciept-number-container">
        <div id="thanks">
          Thank you for your order, <br />
          We appreciate your business, come back soon! <br />
          Here is your order confermation number:
        </div>
        <div id="reciept-number">{this.props.order.recieptNumer}</div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    order: state.orderReducer.currentOrder,
    user: state.auth,
  };
};

export default connect(mapState)(Reciept);
