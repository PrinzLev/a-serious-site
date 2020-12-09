import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <div className={headerStyles.linkContainer}>
        <Link className={headerStyles.link} to="/">
          Home
        </Link>

        <Link className={headerStyles.link} to="/about">
          About Me
        </Link>

        <Link className={headerStyles.link} to="/blog">
          Blog
        </Link>
        <Link className={headerStyles.link} to="/contact">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default Header
