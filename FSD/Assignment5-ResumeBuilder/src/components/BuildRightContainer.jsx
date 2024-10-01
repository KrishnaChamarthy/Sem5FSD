import React from "react";

const BuildRightContainer = ({title, arr}) => {
  return (
    <div className="skills-container">
      <h2>{title}</h2>
      <ul className="skills-list">
        {arr.map((skill) => (
          <li key={skill} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuildRightContainer;
