import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import "../styles/main.scss"

const IndexPage = () => (
  <>
    <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"/>
    </Helmet>
    <Layout>
      <SEO title="Home" />
    </Layout>
  </>
)

export default IndexPage
