import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is the blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum
          dolor quod quidem velit delectus odit nobis animi, optio provident
          error sint quo repellendus aspernatur saepe? Commodi modi deleniti
          ullam.
        </p>
      </div>
    </Layout>
  )
}

export default blog
