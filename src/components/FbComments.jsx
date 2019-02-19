import React from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { Comments } from 'react-facebook-sdk';

const FbComments = ({ urlBlogpost }) => (
  <div className="blogpost-comments">
    <FacebookProvider appId="326027484668640">
      <Comments href={urlBlogpost} width="100%" colorscheme="dark" />
    </FacebookProvider>
  </div>
);

FbComments.propTypes = {
  urlBlogpost: PropTypes.string,
};

export default FbComments;
