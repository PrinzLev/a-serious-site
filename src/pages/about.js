import React from "react"
import { Link } from "gatsby"
import Layout from "../component/layout/layout"
import Head from "../component/head/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>I'm Jericho Irvin</h1>
      <p>
        Hailing from the Philippines. I've always been a man with a passion for
        creating. Early on I thought I would do that through film, but fell
        short of passion. Lo and behold, I found web development and programming
        a place where I discovered the almost infinte posibilities for creation.
        My continuous hunger for creation will be fed.
      </p>
      <p>Other interest: Philosophy, Literature, Gaming</p>
      <p>Specialization: Gatsby, WP, ReactJS</p>
      <p>
        Wanna work with me?<Link to="/contact"> Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
