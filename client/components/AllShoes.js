import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShoes } from '../store/redux/allShoes';

export class AllShoes extends Component {
  componentDidMount() {
    this.props.getShoes();
  }

  render() {
    const allShoes = this.props.allShoes;
    // console.log(this.props)
    return (
      <div id="all-shoes-view">
        <h1>All Shoes</h1>
        <div id="product-view">
          {allShoes.map((shoe) => {
            return (
              <Link key={shoe.id} to={`/product/${shoe.id}`}>
                <div className="product">
                  <img className="product-image" src={shoe.imageUrl} />
                  <div>{shoe.name}</div>
                </div>
              </Link>
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
