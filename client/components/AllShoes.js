import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShoes } from '../store/redux/allShoes';
import { getUserCart } from '../store/redux/cart';


export class AllShoes extends Component {
  componentDidMount() {
    this.props.getShoes();
    if(!!this.props.auth.id)
    {
      this.props.getUserCart(this.props.auth.id)
    }
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
    auth: reduxState.auth
  };
};

const mapDispatchToProps = (dispatch) => ({
  getShoes: () => dispatch(fetchShoes()),
  getUserCart: (id) => dispatch(getUserCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllShoes);
