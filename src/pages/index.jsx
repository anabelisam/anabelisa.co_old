import '../utils/global.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import BlogpostInfo from '../components/BlogpostInfo';

const defaultImage = 'https://s3.amazonaws.com/drgns/profile-pic.png';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const siteUrl = data.site.siteMetadata.siteUrl;
  const description = data.site.siteMetadata.description;
  const coverImage = data.site.siteMetadata.ogimage;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={siteTitle}
        description={description}
        keywords={['es6', 'es7', 'javascript', 'react']}
        url={siteUrl}
        cover={coverImage}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div className="blogpost-home" key={node.fields.slug}>
            <div className="blogpost-content">
              <div className="blogpost-content-head">
                <h3>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <BlogpostInfo
                  idate={node.frontmatter.idate}
                  author={node.frontmatter.author}
                  date={node.frontmatter.date}
                  profilePic={node.frontmatter.profilePic}
                />
              </div>
              <div className="blogpost-content-img">
                <img src={node.frontmatter.cover || defaultImage} alt={title} />
              </div>
            </div>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
        ogimage
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD")
            title
            idate: date
            author
            cover
            profilePic
          }
        }
      }
    }
  }
`;
