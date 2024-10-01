import React from "react";

const BuildContainer = ({icon, title, value}) => {
  return (
    <div className="container">
      <h2>
        <img src={icon} alt="" className="icon" />
        {title}
      </h2>
      <p>{value}</p>
    </div>
  );
};

export default BuildContainer;
