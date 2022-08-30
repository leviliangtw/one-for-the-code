import React from "react"
import { graphql } from "gatsby"
import ProjectTemplate from "../../templates/project-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Project = ({ data: { contentfulProject } }) => {
  return (
    <>
      <Seo title={contentfulProject.title} />
      <Layout>
        <ProjectTemplate {...contentfulProject} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query projectQuery($id: String) {
    contentfulProject(id: { eq: $id }) {
      title
      introduction
      headerImage {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      description {
        raw
      }
      faqs {
        question
        answer {
          raw
        }
      }
      url
    }
  }
`

export default Project
