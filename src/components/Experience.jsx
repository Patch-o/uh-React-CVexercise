import React from "react";
import "./Experience.scss";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="card">
        {experience.map((item) => {
          return (
            <div className="experience " key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;