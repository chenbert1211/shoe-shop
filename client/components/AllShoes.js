import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShoes } from '../store/redux/allShoes';

export class AllShoes extends Component {
  componentDidMount() {
    this.props.getShoes();
  }

  render() {
    console.log('this.props', this.props.allShoes);
    const allShoes = this.props.allShoes;
    return (
      <div id="all-shoes-view">
        <h1>All Shoes</h1>
        <div id="product-view">
          {allShoes.map((shoe) => {
            return (
              <div key={shoe.id} className="product">
                <img className="product-image" src={shoe.imageUrl} />
                <a>{shoe.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    allShoes: reduxState.allShoesReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getShoes: () => dispatch(fetchShoes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllShoes);
