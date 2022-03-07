import * as React from "react";
import { graphql } from "gatsby";
import Step4 from "../Booking/Step4"
import Layout from "../components/layout";
import Seo from "../components/seo";

const step4 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
   <Step4/>
  )
}



export default step4

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
