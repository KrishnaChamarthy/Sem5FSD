import React from 'react';

const TextInput = ({ icon, title, value, handleInputChange }) => {
  return (
    <div className="container">
      <h2>
        <img src={icon} alt="" className="icon" />
        {title}
      </h2>
      <textarea
        placeholder={`Enter ${title.toLowerCase()}...`}
        value={value}
        onChange={handleInputChange} 
      ></textarea>
    </div>
  );
};

export default TextInput;
