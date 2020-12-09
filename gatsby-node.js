const path = require("path")

module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.template.js`)
  return graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(res =>
    res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        component: blogPostTemplate,
        path: `blog/${node.slug}`,
        context: {
          slug: node.slug,
        },
      })
    })
  )
}
