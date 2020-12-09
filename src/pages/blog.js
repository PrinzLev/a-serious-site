import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../component/layout/layout"
import blogStyles from "../styles/blog.module.scss"
import Head from "../component/head/head"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMMM YYYY")
          }
        }
      }
    }
  `)
  const edges = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog Page</h1>
      {edges.map(({ node }) => (
        <Link className={blogStyles.blogContainer} to={node.slug}>
          <div className={blogStyles.container}>
            <h1 className={blogStyles.blogTitle}>{node.title}</h1>
            <span>
              <i>{node.publishedDate}</i>
            </span>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default BlogPage
