import * as React from "react"
import { graphql } from "gatsby"
import Destination from "../Overview/Destination"
import Layout from "../components/layout"
import Seo from "../components/seo"

const destination = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Destination/>
  )
}



export default destination

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
