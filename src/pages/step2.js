import * as React from "react";
import { graphql } from "gatsby";
import Step2 from "../Booking/Step2"
import Layout from "../components/layout";
import Seo from "../components/seo";

const step2 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
   <Step2/>
  )
}



export default step2

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
