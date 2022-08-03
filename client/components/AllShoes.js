import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShoes } from '../store/redux/allShoes';

export class AllShoes extends Component {
  componentDidMount() {
    this.props.getShoes();
  }

  render() {
    console.log('this.props', this.props);
    return <div>AllShoes</div>;
  }
}

const mapStateToProps = (reduxState) => {
  return {
    allShoes: reduxState.allShoes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getShoes: () => dispatch(fetchShoes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllShoes);
