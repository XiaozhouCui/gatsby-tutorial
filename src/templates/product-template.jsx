import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"

const ComponentName = ({
  data: {
    product: {
      title,
      price,
      image: { fixed },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <div>
        <Link to="/products">backe to products</Link>
        <h1>single product: {title}</h1>
        <section className="single-product">
          <article>
            <Image fixed={fixed} alt={title} />
          </article>
          <article>
            <h1>{title}</h1>
            <h3>${price}</h3>
            <p>{info}</p>
            <button>add to cart</button>
          </article>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
