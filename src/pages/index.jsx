import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

const indexPage = () => {
  return (
    <div>
      <Navbar />
      <div>Hello World!!!</div>
      <div>
        <Link to="/blog">blog page</Link>
      </div>
      <a target="_blank" href="https://gatsbyjs.com">gatsby docs</a>
    </div>
  )
}

export default indexPage
