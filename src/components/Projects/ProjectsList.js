import React, { Component } from 'react'

export default class ProjectsList extends Component {
  render () {
    const { projects, keyword } = this.props
    const projectsList = projects
      .filter(project => {
        return project.keyword.indexOf(keyword) !== -1
      })
      .map((project, i) => {
        return (
          <div className='project' key={i}>
            <h1>{project.name}</h1>
            <h1>{project.desc}</h1>
          </div>
        )
      })

    return <div id='projects-container'>{projectsList}</div>
  }
}
