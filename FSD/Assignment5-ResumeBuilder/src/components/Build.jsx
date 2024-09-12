import React from 'react'
import ProfileIcon from "../assets/user.png";
import EduIcon from "../assets/mortarboard.png";
import ExpIcon from "../assets/briefcase.png";
import ObjIcon from "../assets/pencil.png";
import { useLocation } from "react-router-dom";

const Build = () => {
    const location = useLocation();
    const { formData } = location.state || {};
  
    if (!formData) {
      return <p>No data available. Please fill out the form first.</p>;
    }
  
    return (
      <div className="main">
        <div className="profile">
          <div className="profile-img-container">
            <h2>Profile Photo</h2>
            <div className="image-box">
            {formData.selectedImage ? (
              <img
                src={formData.selectedImage}
                alt="Profile"
                className="profile-image"
              />
            ) : (
              <p>No image selected</p>
            )}
            </div>
            
          </div>
          <div className="name-container">
            <h2>Name</h2>
            <p>{formData.name}</p>
          </div>
        </div>
        <hr />
        <div className="resume-main">
          <div className="resume-left">
            <div className="about-container">
              <h2>
                <img src={ProfileIcon} alt="" className="icon" />
                Profile
              </h2>
              <p>{formData.about}</p>
            </div>
            <div className="edu-container">
              <h2>
                <img src={EduIcon} alt="" className="icon" />
                Education
              </h2>
              <p>{formData.education}</p>
            </div>
            <div className="exp-container">
              <h2>
                <img src={ExpIcon} alt="" className="icon" />
                Experiences
              </h2>
              <p>{formData.experiences}</p>
            </div>
            <div className="obj-container">
              <h2>
                <img src={ObjIcon} alt="" className="icon" />
                Objectives
              </h2>
              <p>{formData.objectives}</p>
            </div>
          </div>
          <div className="resume-right">
            <div className="skills-container">
              <h2>Skills</h2>
              <ul className='skills-list'>
                {formData.skills.map((skill) => (
                  <li key={skill} className='skill-item'>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="achievements-container">
              <h2>Achievements</h2>
              <ul className='achievements-list'>
                {formData.achievements.map((achievement) => (
                  <li key={achievement} className='skill-item'>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Build