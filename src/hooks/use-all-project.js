import { graphql, useStaticQuery } from "gatsby"

const useAllProject = () => {
  const {
    allContentfulProject: { nodes },
  } = useStaticQuery(graphql`
    query allProjectLinksQuery {
      allContentfulProject(sort: { fields: title, order: ASC }) {
        nodes {
          title
          gatsbyPath(filePath: "/projects/{contentfulProject.title}")
          introduction
          description {
            raw
          }
          headerImage {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return nodes
}

export default useAllProject
