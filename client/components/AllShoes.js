// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { fetchShoes } from '../store/redux/allShoes';
// import { getUserCart } from '../store/redux/cart';

// export class AllShoes extends Component {
//   componentDidMount() {
//     this.props.getShoes();
//     if(!!this.props.auth.id)
//     {
//       this.props.getUserCart(this.props.auth.id)
//     }
//   }

//   render() {
//     const allShoes = this.props.allShoes;
//     // console.log(this.props)
//     return (
//       <div id="all-shoes-view">
//         <h1>All Shoes</h1>
//         <div id="product-view">
//           {allShoes.map((shoe) => {
//             return (
//               <Link key={shoe.id} to={`/product/${shoe.id}`}>
//                 <div className="product">
//                   <img className="product-image" src={shoe.imageUrl} />
//                   <div>{shoe.name}</div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (reduxState) => {
//   return {
//     allShoes: reduxState.allShoesReducer,
//     auth: reduxState.auth
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   getShoes: () => dispatch(fetchShoes()),
//   getUserCart: (id) => dispatch(getUserCart(id))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AllShoes);

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
  }
  componentDidMount() {
    this.props.getShoes();

  clickHandler(event) {
    const target = event.target.innerHTML;
    this.setState({
      brand: `${target}`,
    });
    console.log('state', this.state.brand);
    console.log('target value', target);

  }

  render() {
    const allShoes = this.props.allShoes;
    console.log(allShoes);
    const { 
    
    ler } = this;
    //  const filteredArr = allShoes.filter((shoe) => {
    //   if (this.state.brand === 'all') {
    //     return shoe
    //   } else if (shoe.brand === this.state.brand) {
    //     return shoe
    //   }
    // })
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
                return <a onClick={() => clickHandler(event)}>{shoe.name}</a>;
              })}
            </form>
          </div>
        </div>

        {/* FILTER BAR */}
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
