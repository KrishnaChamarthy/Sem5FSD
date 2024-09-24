import React, { useState } from "react";
import ProfileIcon from "../assets/user.png";
import AddIcon from "../assets/add.png";
import EduIcon from "../assets/mortarboard.png";
import ExpIcon from "../assets/briefcase.png";
import ObjIcon from "../assets/pencil.png";
import { useNavigate } from "react-router-dom";
import TextInput from "./TextInput";

const Main = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    selectedImage: null,
    name: "",
    about: "",
    education: "",
    experiences: "",
    objectives: "",
    skills: [],
    newSkill: "",
    achievements: [],
    newAchievement: ""
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFormData(prev => ({ ...prev, selectedImage: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({ ...prev, [field]: event.target.value }));
  };

  const handleAddItem = (item, itemField, listField) => {
    const trimmedItem = item.trim();
    if (trimmedItem && !formData[listField].includes(trimmedItem)) {
      setFormData(prev => ({
        ...prev,
        [listField]: [...prev[listField], trimmedItem],
        [itemField]: ""
      }));
    }
  };

  const handleRemoveItem = (item, listField) => {
    setFormData(prev => ({
      ...prev,
      [listField]: prev[listField].filter(i => i !== item)
    }));
  };

  return (
    <div className="main">
      <div className="profile">
        <div className="profile-img-container">
          <h2>Profile Photo</h2>
          <div className="image-box">
            {!formData.selectedImage && (
              <label htmlFor="file-input" className="custom-file-input">
                Choose File
              </label>
            )}
            {formData.selectedImage ? (
              <img
                src={formData.selectedImage}
                alt="Profile"
                className="profile-image"
              />
            ) : (
              <p className="placeholder-text">No image selected</p>
            )}
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
          </div>
        </div>
        <div className="name-input-container">
          <h2 className="name-label">Name</h2>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange("name")}
            placeholder="Enter your name"
            className="name-input"
          />
        </div>
      </div>
      <hr />
      <div className="resume-main">
        <div className="resume-left">
          <TextInput
            icon={ProfileIcon}
            title="About"
            value={formData.about} 
            handleInputChange={handleInputChange("about")} 
          />
          <TextInput
            icon={EduIcon}
            title="Education"
            value={formData.education} 
            handleInputChange={handleInputChange("education")} 
          />
          <TextInput
            icon={ExpIcon}
            title="Experiences"
            value={formData.experiences} 
            handleInputChange={handleInputChange("experiences")} 
          />
          <TextInput
            icon={ObjIcon}
            title="Objectives"
            value={formData.objectives} 
            handleInputChange={handleInputChange("objectives")} 
          />
  
        </div>
        <div className="resume-right">
          <div className="skills-container">
            <h2>Skills</h2>
            <div className="input-area">
              <input
                type="text"
                value={formData.newSkill}
                onChange={handleInputChange("newSkill")}
                placeholder="Enter a new skill"
                className="skill-input"
              />
              <div
                className="add-button"
                onClick={() => handleAddItem(formData.newSkill, "newSkill", "skills")}
              >
                <img src={AddIcon} alt="" />
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
          <div className="achievements-container">
            <h2>Achievements</h2>
            <div className="input-area">
              <input
                type="text"
                value={formData.newAchievement}
                onChange={handleInputChange("newAchievement")}
                placeholder="Enter a new achievement"
                className="achievements-input"
              />
              <div
                className="add-button"
                onClick={() => handleAddItem(formData.newAchievement, "newAchievement", "achievements")}
              >
                <img src={AddIcon} alt="" />
              </div>
            </div>
            <ul className="achievements-list">
              {formData.achievements.map((achievement) => (
                <li key={achievement} className="skill-item" onClick={() => handleRemoveItem(achievement, "achievements")}>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button className="submit-button" onClick={() => {
        navigate("/build", { state: { formData } });
      }}>
        Build
      </button>
    </div>
  );
};

export default Main;
