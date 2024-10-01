import React from 'react'
import ProfileIcon from "../assets/user.png";
import EduIcon from "../assets/mortarboard.png";
import ExpIcon from "../assets/briefcase.png";
import ObjIcon from "../assets/pencil.png";
import { useLocation } from "react-router-dom";
import BuildContainer from './BuildContainer';
import BuildRightContainer from './BuildRightContainer';

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
            <BuildContainer title={"Profile"} icon={ProfileIcon} value={formData.about}/>
            <BuildContainer title={"Education"} icon={EduIcon} value={formData.education}/>
            <BuildContainer title={"Experiences"} icon={ExpIcon} value={formData.experiences}/>
            <BuildContainer title={"Education"} icon={EduIcon} value={formData.education}/>
            <BuildContainer title={"Objectives"} icon={ObjIcon} value={formData.objectives}/>
          </div>
          <div className="resume-right">
            <BuildRightContainer title={"Skills"} arr={formData.skills}/>
            <BuildRightContainer title={"Achievements"} arr={formData.achievements}/>
          </div>
        </div>
      </div>
    );
  };

export default Build