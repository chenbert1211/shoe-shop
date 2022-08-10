import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShoes } from '../store/redux/allShoes';

export class AllShoes extends Component {
  constructor() {
    super();
    this.state = {
      brand: 'all',
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }
  componentDidMount() {
    this.props.getShoes();
  }

  clickHandler(event) {
    const target = event.target.innerHTML;
    this.setState({
      brand: `${target}`,
    });
  }

  clearFilter() {
    this.setState({ brand: 'all' });
  }

  render() {
    const allShoes = this.props.allShoes;
    // console.log(allShoes);
    const { clickHandler, clearFilter } = this;
    const filteredArr = allShoes.filter((shoe) => {
      if (this.state.brand === 'all') {
        return shoe;
      } else if (shoe.name === this.state.brand) {
        return shoe;
      }
    });
    return (
      <div id="all-shoes-view">
        {/* FILTER BAR */}
        <div id="filter-bar">
          <div id="brand-filter">
            <a>Filter By</a>
          </div>

          <div id="brand-filter-content">
            <form>
              {allShoes.map((shoe) => {
                return (
                  <a
                    key={shoe.id}
                    onClick={() => {
                      // console.log(filteredArr);
                      clickHandler(event);
                    }}
                  >
                    {shoe.name}
                  </a>
                );
              })}
              <button type="button" onClick={clearFilter}>
                Clear Filters
              </button>
            </form>
          </div>
        </div>

        {/* FILTER BAR */}
        <div id="product-view">
          {filteredArr.map((shoe) => {
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
