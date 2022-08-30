import { graphql, useStaticQuery } from "gatsby"

const useFeaturedProject = () => {
  const {
    allContentfulProject: { nodes },
  } = useStaticQuery(graphql`
    query featuredProjectLinksQuery {
      allContentfulProject(
        filter: { featureThisProject: { eq: true } }
        sort: { fields: title }
      ) {
        nodes {
          title
          gatsbyPath(filePath: "/projects/{contentfulProject.title}")
          featureThisProject
          introduction
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

export default useFeaturedProject
