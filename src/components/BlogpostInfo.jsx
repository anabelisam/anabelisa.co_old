import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const defaultImage = 'https://s3.amazonaws.com/drgns/profile-pic.png';

const BlogpostInfo = ({
  author, date, idate, profilePic,
}) => {
  const nowDate = new Date().toISOString();
  const now = moment(nowDate);
  const postDate = moment(idate);
  const addTag = now.diff(postDate, 'days');
  return (
    <div className="blogpost-info">
      {addTag < 5 && <span className="blogpost-tag">Nuevo </span>}
      <div className="blogpost-profile">
        <img
          src={profilePic || defaultImage}
          alt={author}
        />
        {author}
        {' '}
        -
        {' '}
        {date}
      </div>
    </div>
  );
};

BlogpostInfo.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
  idate: PropTypes.string,
  profilePic: PropTypes.string,
};

export default BlogpostInfo;
