import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import "../styles/main.scss"

const IndexPage = () => (
  <>
    <Helmet>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-
scalable=yes"/>
    </Helmet>
    <Layout/>
  </>
)

export default IndexPage
