import React from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { Share } from 'react-facebook-sdk';

const SharePost = ({ urlBlogpost }) => (
  <div className="bio-share">
    <FacebookProvider appId="326027484668640">
      <Share href={urlBlogpost}>
        <button type="button">Compartir en Facebook</button>
      </Share>
    </FacebookProvider>
  </div>
);

SharePost.propTypes = {
  urlBlogpost: PropTypes.string,
};

export default SharePost;
