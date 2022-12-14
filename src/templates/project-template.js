import React from "react"
import Seo from "../components/SEO"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import BannerModule from "../components/BannerModule/BannerModule"
import Faq from "../components/Faq/Faq"
import Projects from "../components/Projects/Projects"
import RichText from "../components/RichText"

const ProjectTemplateStyles = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    .column {
      flex: 0 0 100%;

      @media (min-width: 768px) {
        flex-basis: 50%;

        &:nth-child(1) {
          padding-right: 20px;
        }

        &:nth-child(2) {
          padding-left: 20px;
        }

        > * {
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      > * {
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`

const ProjectGallery = styled.section`
  width: 100%;

  > .container {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--gap) / 2);

    @media (min-width: 1024px) {
      gap: var(--gap);
    }

    > * {
      width: calc(50% - 10px);

      @media (min-width: 768px) {
        width: calc(33.333% - 14px);
      }

      @media (min-width: 1024px) {
        width: calc(25% - 30px);
      }
    }
  }
`

const Projecttemplate = (contentfulProject) => {
  const {
    headerImage,
    title,
    // price,
    introduction,
    description,
    faqs,
    gallery,
    url,
  } = contentfulProject
  const projectHeaderImage = getImage(headerImage)
  return (
    <>
      <Seo title={title} />
      <BannerModule
        title={title}
        // price={price}
        subTitle={introduction}
        enquire={false}
        url={url}
      >
        <GatsbyImage
          className="banner__image"
          image={projectHeaderImage}
          alt={title}
        />
      </BannerModule>
      <ProjectTemplateStyles className="section">
        <div className="container container__tight">
          {description && (
            <div className="column">
              <RichText richText={description} />
            </div>
          )}
          {faqs && (
            <div className="column">
              {faqs.map((item, index) => {
                return (
                  <Faq
                    key={index}
                    title={item.question}
                    description={item.answer}
                  />
                )
              })}
            </div>
          )}
        </div>
      </ProjectTemplateStyles>
      {gallery && (
        <ProjectGallery className="section">
          <div className="container container__tight">
            {gallery.map((item, index) => {
              let galleyImage = getImage(item)
              return <GatsbyImage key={index} image={galleyImage} />
            })}
          </div>
        </ProjectGallery>
      )}
      <Projects
        title="Popular Projects."
        introduction="Featuring useful and powerful functions in different areas, these projects are under well development and maintenance. Aiming to provide great features for anybody, all the projects are developed with an explicit and specific goal. Please feel free to check them out for more information!"
      />
    </>
  )
}

export default Projecttemplate
