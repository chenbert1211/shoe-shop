import React from 'react';
import { connect } from 'react-redux';
import AllShoes from './AllShoes';

/**
 * COMPONENT
 */

export const Home = (props) => {
  const { username } = props;

  return (
    <div id="homepage">
      <img id="banner-pic" src="/banner-pic.webp" />
      <div id="all-shoes">
        <AllShoes />
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
