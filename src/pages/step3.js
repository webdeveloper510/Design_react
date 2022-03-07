import * as React from "react";
import { graphql } from "gatsby";
import Step3 from "../Booking/Step3"
import Layout from "../components/layout";
import Seo from "../components/seo";

const step3 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
   <Step3/>
  )
}



export default step3

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
