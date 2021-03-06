import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// define the gql query
const getData = graphql`
  {
    site {
      # info is the alias for siteMetadata
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`
const Header = () => {
  // nested destructuring from gql data
  const {
    site: {
      // info is the alias for siteMetadata
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData) // gatsby fetch data with gql

  return (
    <div>
      <h1>title: {title}</h1>
      <h1>name: {name}</h1>
    </div>
  )
}

export default Header
