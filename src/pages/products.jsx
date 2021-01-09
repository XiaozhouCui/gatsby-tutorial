import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"

export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>This is the products page</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis quas amet vel optio dolores autem illum at iste eius
            aperiam magni, dicta, repudiandae, libero debitis sint nisi fugit
            aliquid possimus.
          </p>
        </div>
      </Layout>
    )
  }
}
