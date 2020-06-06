import React, { Component } from 'react'

import ProjectsList from './ProjectsList'

export default class Projects extends Component {
  constructor () {
    super()
    this.state = {
      projects: [
        {
          name: 'JS PROJ',
          keyword: 'JavaScript',
          desc: 'SUP IMA FUCKIN JS PROJ'
        },
        {
          name: 'JS PROJ',
          keyword: 'JavaScript',
          desc: 'SUP IMA FUCKIN JS PROJ'
        },
        {
          name: 'TS PROJ',
          keyword: 'TypeScript',
          desc: 'SUP IMA FUCKIN TS PROJ'
        },
        {
          name: 'SASS PROJ',
          keyword: 'SASS',
          desc: 'SUP IMA FUCKIN SASS PROJ'
        },
        {
          name: 'PHP PROJ',
          keyword: 'PHP',
          desc: 'SUP IMA FUCKIN PHP PROJ'
        }
      ],
      keyword: ''
    }
  }

  render () {
    return (
      <main id='Projects'>
        <h2 id='header'>Projects</h2>
        <div class='btn-group'>
          <button
            class='btn btn-secondary  dropdown-toggle'
            type='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            Filter by category
          </button>
          <div class='dropdown-menu'>
            <div
              onClick={() => {
                this.setState({ keyword: '' })
              }}
            >
              All Projects
            </div>
            <div
              onClick={() => {
                this.setState({ keyword: 'JavaScript' })
              }}
            >
              JavaScript
            </div>
            <div
              onClick={() => {
                this.setState({ keyword: 'TypeScript' })
              }}
            >
              TypeScript
            </div>
            <div
              onClick={() => {
                this.setState({ keyword: 'PHP' })
              }}
            >
              PHP
            </div>
            <div
              onClick={() => {
                this.setState({ keyword: 'React' })
              }}
            >
              React
            </div>
            <div
              onClick={() => {
                this.setState({ keyword: 'WordPress' })
              }}
            >
              WordPress
            </div>
            <div
              onClick={() => {
                this.setState({ keyword: 'SASS' })
              }}
            >
              SASS
            </div>
            <div
              onClick={() => {
                this.setState({ keyword: 'NoSQL' })
              }}
            >
              NoSQL
            </div>
            <div
              onClick={() => {
                this.setState({ keyword: 'SQL' })
              }}
            >
              SQL
            </div>
          </div>
        </div>

        <ProjectsList
          projects={this.state.projects}
          keyword={this.state.keyword}
        />
      </main>
    )
  }
}
