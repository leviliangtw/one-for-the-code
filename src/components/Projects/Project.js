import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ProjectStyles } from "./ProjectsStyles"

const Project = ({ feature }) => {
  const { gatsbyPath, headerImage, title, introduction } = feature
  const image = getImage(headerImage)

  return (
    <ProjectStyles>
      <Link to={gatsbyPath}>
        <GatsbyImage
          className="features__item--img"
          image={image}
          alt="Project Image"
        />
        {title && introduction && (
          <div className="features__item--content">
            {title && <h4>{title}</h4>}
            {introduction && <p>{introduction}</p>}
            <Button text="Read More" as="span" arrow={true} />
          </div>
        )}
      </Link>
    </ProjectStyles>
  )
}

export default Project
