const path = require("path")
// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  // result includes an array of slugs of all products
  result.data.products.nodes.forEach((product) => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/product-template.jsx`),
      // context will be part of props of rendered page
      context: {
        // "slug" will be the query variable $slug in GQL
        slug: product.slug,
      },
    })
  })
}
