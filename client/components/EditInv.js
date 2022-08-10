import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShoes } from '../store/redux/allShoes';
import axios from 'axios';
class EditInv extends Component {
  constructor(props) {
    super(props);
    this.deleteShoes = this.deleteShoes.bind(this);
  }

  async componentDidMount() {
    await this.props.getShoes();
  }

  async deleteShoes() {
    let id = event.target.value;
    window.location.reload(false);
    await axios.delete('/api/products/delete', { data: { id } });
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        THIS IS EDIT INV
        {this.props.shoes.map((shoe) => (
          <div value={shoe.id} key={shoe.id}>
            {shoe.name}
            <button onClick={this.deleteShoes} value={shoe.id}>
              delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
    shoes: state.allShoesReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getShoes: () => dispatch(fetchShoes()),
});

export default connect(mapState, mapDispatchToProps)(EditInv);
