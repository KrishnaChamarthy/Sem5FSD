import React from "react";

const ContainerElement = ({ name, value, onChange }) => {
  return (
    <div className="container-element">
      <label htmlFor={name}>Book {name}:</label>
      <input
        type="text"
        placeholder={name == "name" ? "Book name..." : `${name} name...`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ContainerElement;
