import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

const Examples = ({ data }) => {
  // data comes from PageQuery
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <p>Hello from examples page</p>
      <Header />
      <HeaderStatic />
      <h5>Author: {author}</h5>
    </Layout>
  )
}

// PageQuery: the exported queryResult will become props.data of Examples component
export const queryResult = graphql`
  query {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`

export default Examples
