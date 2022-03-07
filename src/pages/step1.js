import * as React from "react";
import { graphql } from "gatsby";
import Step from "../Booking/Step1"
import Layout from "../components/layout";
import Seo from "../components/seo";

const step1 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
   <Step/>
  )
}



export default step1

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
