import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleShoe } from '../store/redux/singleShoe';
import { fetchShoes } from '../store/redux/allShoes';
import { Link } from 'react-router-dom';

export class SingleShoe extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSingleShoe(id);
    this.props.getShoes();
  }

  render() {
    const shoe = this.props.singleShoe;
    console.log(shoe);
    const allShoes = this.props.allShoes;
    const testSizes = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ];
    return (
      <div id="single-shoe-view">
        <div id="shoe-detail-container">
          <img src={shoe.imageUrl} />
          <div id="shoe-specs">
            <h2>{shoe.name}</h2>
            <div id="size-grid">
              {testSizes.map((elem, idx) => {
                return (
                  <div key={idx} className="grid-square">
                    <div>{elem}</div>
                  </div>
                );
              })}
            </div>
            <div id="button-description">
              <button type="button">Buy Now</button>
              <div id="shoe-description">
                <a>About This Product</a>
                <div>{shoe.description}</div>
              </div>
            </div>
          </div>
        </div>
        <div id="reccomended-outer-div">
          <a>Reccomended Products</a>
          <div id="reccomended-products">
            <div id="reccomended-details">
              {allShoes.map((currentShoe) => {
                if (currentShoe.name !== shoe.name) {
                  return (
                    <div key={currentShoe.id} id="reccomended-shoe">
                      <img src={currentShoe.imageUrl} />
                      <a>{currentShoe.name}</a>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  singleShoe: reduxState.singleShoeReducer,
  allShoes: reduxState.allShoesReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getSingleShoe: (id) => dispatch(fetchSingleShoe(id)),
  getShoes: () => dispatch(fetchShoes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleShoe);
