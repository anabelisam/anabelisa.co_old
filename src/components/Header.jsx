import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const profilePic = 'https://s3.amazonaws.com/chewiekie/img/anabelisa.png';

const Header = ({ title }) => (
  <div className="Header">
    <h1>
      <img
        src={profilePic}
        alt="anabelisa.co"
      />
      <Link to="/">
        {title}
      </Link>
    </h1>
    <span>Superpoderes en color rosa.</span>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
