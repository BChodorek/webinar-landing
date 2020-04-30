/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import MainContent from "./mainContent"

class Layout extends React.Component {
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  }

  render() {
    return (
      <>
        <Header />
        <MainContent/>
          <footer className="footer" >digitalt.pl © {new Date().getFullYear()}</footer>
      </>
    )
  }
}


export default Layout
