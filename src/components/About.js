import React from 'react'
import { Route } from 'react-router'

function About() {
    return (
        <div className="content-section">
        <div className="title">
          <h1 className="first"> About Us</h1>
        </div>
        <div className="image-section">
          <img src="https://i.pinimg.com/originals/c9/12/d4/c912d49f5f63e3c25aae2465f7577e7a.png" alt="LPU logo" />
        </div>
        <div className="content">
          <h3>An Educational Initiative</h3>
          <p>
            I, the students of CSE Branch of Lovely Professional University, are here to explore the
            world of education. The education world is a type of dream world
            where we can study without any boundings or
            hesitation. Along with the proficient knowledge of class 12th, we are
            exploring the world of other classes and trying best to be good at
            it.
          </p>
          <p>
            This website is created by: Shubham Kumar
          </p>
        </div>
      </div>
    )
}

export default About