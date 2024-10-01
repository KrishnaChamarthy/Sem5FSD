import React from 'react'

const RightContainer = ({title, onChange, onClick, icon, formData}) => {
  return (
    <div className="skills-container">
            <h2>{title}</h2>
            <div className="input-area">
              <input
                type="text"
                value={formData.newSkill}
                onChange={onChange}
                placeholder="Enter a new skill"
                className="skill-input"
              />
              <div
                className="add-button"
                onClick={onClick}
              >
                <img src={icon} alt="" />
              </div>
            </div>
            <ul className="skills-list">
              {formData.skills.map((skill) => (
                <li key={skill} className="skill-item" onClick={() => handleRemoveItem(skill, "skills")}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
  )
}

export default RightContainer
