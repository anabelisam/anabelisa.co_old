import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const profilePic = 'https://s3.amazonaws.com/drgns/profile-pic.png';

const Header = ({ title }) => (
  <div className="Header">
    <h1>
      <img
        src={profilePic}
        alt="Domina React"
      />
      <Link to="/">
        {title}
      </Link>
    </h1>
    <span>Recursos en español para aprender y dominar JS.</span>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
