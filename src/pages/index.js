import React from "react"
import { Link } from "gatsby"
import Layout from "../component/layout/layout"
import "../styles/index.scss"
import Head from "../component/head/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi I'm Jericho</h1>
      <h3>A front-end developer</h3>
      <p>
        Need a developer?<Link to="/contact"> Contact me.</Link>
      </p>
      <p>
        You can also contact me through{" "}
        <a href="https://facebook.com/jericho.irvin" target="__blank">
          Facebook.
        </a>
      </p>
    </Layout>
  )
}
export default IndexPage
