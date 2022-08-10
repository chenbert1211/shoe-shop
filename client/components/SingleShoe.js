import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleShoe } from '../store/redux/singleShoe';
import { addToCart } from '../store/redux/cart';
import { fetchShoes } from '../store/redux/allShoes';
import { Link } from 'react-router-dom';

export class SingleShoe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { size: null },
      allSize: [],
    };
    this.sizeClicked = this.sizeClicked.bind(this);
    this.sizeAddToCart = this.sizeAddToCart.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.getSingleShoe(id);
    this.props.getShoes();
    this.setState({ allSize: this.props.singleShoe.order_products });
  }

  sizeClicked() {
    const current = event.target.innerHTML;
    const selected = this.state.allSize.filter((shoe) => shoe.size == current);
    if (selected[0].size == current) {
      this.setState({ size: selected[0] });
    }
  }
  sizeAddToCart() {
    if (this.state.size != null) {
      alert('added To Cart!');
      this.props.addToCart(this.state.size.id);
      this.setState({ size: {} });
    } else {
      alert('You have not selected a size');
    }
  }

  render() {
    const shoe = this.props.singleShoe;

    const allShoes = this.props.allShoes;
    const { allSize } = this.state;

    return (
      <div id="single-shoe-view">
        <div id="shoe-detail-container">
          <img src={shoe.imageUrl} />
          <div id="shoe-specs">
            <h2>{shoe.name}</h2>
            <div id="size-grid">
              {allSize.length > 0
                ? allSize.map((elem) => {
                    return (
                      <div
                        key={elem.id}
                        className={
                          this.state.size.size == elem.size
                            ? 'grid-square selectedSize'
                            : 'grid-square'
                        }
                        onClick={this.sizeClicked}
                      >
                        {elem.size}
                      </div>
                    );
                  })
                : 'OUT OF STOCK!'}
            </div>
            <div id="button-description">
              <button type="button" onClick={this.sizeAddToCart}>
                Buy Now
              </button>
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
              {allShoes.map((currentShoe, idx) => {
                if (currentShoe.name !== shoe.name && idx < 7) {
                  return (
                    <div key={currentShoe.id} id="reccomended-shoe">
                      <a href={`/product/${currentShoe.id}`}>
                        <img src={currentShoe.imageUrl} />
                        <a>{currentShoe.name}</a>
                      </a>
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
  addToCart: (id) => dispatch(addToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleShoe);
