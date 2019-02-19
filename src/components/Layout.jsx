import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ title, children }) => (
  <div className="Layout">
    <Header title={title} />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};


export default Layout;
