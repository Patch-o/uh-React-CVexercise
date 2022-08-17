import React from "react";
import {CV} from '../../CV/CV';
import Education from "../Education";
import Experience from "../Experience";
import { useDispatch, useSelector } from "react-redux";
import {edtn,exp} from '../../redux/button/button.actions';

const {experience,education} = CV;


const Formation = () => {
    const {showEducation} = useSelector((state) => state.showEducation);
    const dispatch= useDispatch();

  return (
    <div>
      <button
        className="custom-btn btn-4"
        onClick={() => dispatch(edtn())}
        
      >
        Education
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => dispatch(exp())}
      >
        Experience
      </button>

      <div className="formation">
        {showEducation ? (
          <Education education={education} />     
         ) : (
          <Experience experience={experience} />
        )}
      </div>
    </div>
  );
};


export default Formation;