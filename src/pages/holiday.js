import * as React from "react"
import { graphql } from "gatsby"
import Holiday from "../Holiday/Holiday"
import Layout from "../components/layout"
import Seo from "../components/seo"

const holiday = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Holiday/>
  )
}



export default holiday

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
