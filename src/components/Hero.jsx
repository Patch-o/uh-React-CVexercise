import React from "react";
import "./Hero.scss";
import {CV} from '../CV/CV';
const {hero} = CV;

const Hero = () => {
  return (
    <div className="hero">
      
      <div className="card">
      <h2>
        {hero.name} {hero.adress}
      </h2>
        <p>{hero.city}🗺️</p>
        <p>{hero.birthDate}🗓️</p>
        <p>
          
          <a href={"mailto:" + hero.email}>
          fjclivar@gmail.com📧
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p><a href={hero.gitHub}>
            GitHub💾
          </a></p>
      </div>
    </div>
  );
};

export default Hero;