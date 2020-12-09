import React from "react"
import Footer from "../footer/footer"
import Header from "../header/header"
import layoutStyle from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
