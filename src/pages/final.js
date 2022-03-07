import * as React from "react";
import { graphql } from "gatsby";
import Final from "../Booking/Final"
import Layout from "../components/layout";
import Seo from "../components/seo";

const final = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
   <Final/>
  )
}



export default final

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
