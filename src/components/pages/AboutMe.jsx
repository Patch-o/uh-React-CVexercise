import React from 'react'
import About from '../About'
import { CV } from '../../CV/CV';
const {hero}=CV;


const AboutMe = () => {
  return (
    <div>
      <About hero={hero.aboutMe}/>
      
      </div>
  )
}

export default AboutMe







