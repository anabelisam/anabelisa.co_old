import React from 'react';
import PropTypes from 'prop-types';
import SharePost from './SharePost';

const defaultPic = 'https://s3.amazonaws.com/drgns/profile-pic.png';

const Bio = ({
  urlBlogpost, author, profilePic, description,
}) => (
  <div className="bio">
      <div className="bio-content">
        <img
          src={profilePic || defaultPic}
          alt={author}
        />
        <div>
          <h6>{author}</h6>
          <span>
            {description}
          </span>
        </div>
      </div>
      <SharePost urlBlogpost={urlBlogpost} />
    </div>
);

Bio.propTypes = {
  urlBlogpost: PropTypes.string,
  author: PropTypes.string,
  profilePic: PropTypes.string,
  description: PropTypes.string,
};

export default Bio;
