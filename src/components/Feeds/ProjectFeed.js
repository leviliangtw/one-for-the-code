import React from "react"
import Project from "../Projects/Project"
import useAllProject from "../../hooks/use-all-project"

const ProjectFeed = () => {
  const allProject = useAllProject()

  return allProject.map((node, index) => {
    return <Project key={index} feature={node} />
  })
}

export default ProjectFeed
