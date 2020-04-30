import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import "../styles/main.scss"

const IndexPage = () => (
  <>
    <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Layout/>
  </>
)

export default IndexPage
