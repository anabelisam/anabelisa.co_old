import React from 'react';
import { Link, graphql } from 'gatsby';
import '../utils/global.css';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import FbComments from '../components/FbComments';
import BlogpostInfo from '../components/BlogpostInfo';
import SEO from '../components/seo';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const urlBlogpost = `${this.props.location.origin}${this.props.location.pathname}`;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          cover={post.frontmatter.cover}
          url={this.props.location.href}
        />
        <h2>{post.frontmatter.title}</h2>
        <BlogpostInfo
          idate={post.frontmatter.idate}
          author={post.frontmatter.author}
          date={post.frontmatter.date}
          profilePic={post.frontmatter.profilePic}
        />
        {post.frontmatter.cover && <img src={post.frontmatter.cover} alt={post.frontmatter.title} />}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Bio
          urlBlogpost={urlBlogpost}
          author={post.frontmatter.author}
          profilePic={post.frontmatter.profilePic}
          description={post.frontmatter.description}
        />
        <FbComments urlBlogpost={urlBlogpost} />
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ←
                {' '}
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
                {' '}
                →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD")
        author
        idate: date
        cover
        profilePic
        description
      }
    }
  }
`;
