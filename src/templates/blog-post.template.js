import React from "react"
import { graphql } from "gatsby"
import Layout from "../component/layout/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../component/head/head"
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      body {
        raw
        references {
          file {
            fileName
            url
          }
          title
        }
      }
      title
      publishedDate(formatString: "Do MMMM YYYY")
    }
  }
`

const BlogPostTemplate = ({ data }) => {
  const references = data.contentfulBlogPost.body.references
  const options = {
    renderNode: {
      "embedded-asset-block": () =>
        references.map(reference => (
          <img src={reference.file.url} alt={reference.title} />
        )),
    },
  }
  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <div>
        <h1>{data.contentfulBlogPost.title}</h1>
        {documentToReactComponents(
          JSON.parse(data.contentfulBlogPost.body.raw),
          options
        )}

        <p>
          <b>Created On: </b>
          {data.contentfulBlogPost.publishedDate}
        </p>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate
