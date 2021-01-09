import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Alternative approach to useStaticQuery hook
const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={(data) => <h4>{data.site.info.description}</h4>}
  ></StaticQuery>
)

export default ComponentName
