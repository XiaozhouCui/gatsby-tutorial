import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/Button"

const indexPage = () => {
  return (
    <Layout>
      <h1>Hello from Gatsby</h1>
      <ExampleButton>Click Me!</ExampleButton>
    </Layout>
  )
}

export default indexPage
