import React from "react"
import Layout from "../component/layout/layout"
import { Link } from "gatsby"
import Head from "../component/head/head"

const NotFound = () => (
  <Layout>
    <Head title="Page Not Found" />
    <h1>404 Page Not Found</h1>
    <p>
      <Link to="/">Go Back Home</Link>
    </p>
  </Layout>
)

export default NotFound
