import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../img/Me.jpg'
import resume from '../resume/Resume.pdf'

export default function Home () {
  return (
    <main id='Home' className='container'>
      <section id='intro' className='row'>
        <div id='picture-container' className='col-md-3'>
          <img src={picture} alt='' />
        </div>
        <div id='text-container' className='col-md-8'>
          <h1>Jeffrey Garner</h1>
          <h2>Front-end Developer</h2>
          <h6>• JavaScript • TypeScript • React • SASS •</h6>
          <h6>• PHP • SQL • NoSQL •</h6>

          <p>
            Welcome to my portfolio! I've been coding since 2019 mainly in
            JavaScript and React, but I have an energetic passion for computer
            science that draws me to explore several other programming concepts,
            languages, supersets, and frameworks.{' '}
          </p>
          <a href={resume}>Here's my resume!</a>
          <p>
            Take a look at the <Link to='/projects'>projects</Link> or the{' '}
            <Link to='/blog'> programming challenges</Link> I've done so far!
          </p>
        </div>
      </section>
    </main>
  )
}
