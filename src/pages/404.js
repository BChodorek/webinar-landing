import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>404 : Nie znaleziono</h1>
    <p>Niestety taka strona nie istnieje...jeszcze.</p>
    <Link>Wróć na stronę główną</Link>
  </>
)

export default NotFoundPage
