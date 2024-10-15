import React, { useState } from "react";
import ContainerElement from "../Components/ContainerElement";
import { Link } from "react-router-dom";
import axios from "axios";

const Insert = () => {
  const [formData, setFormData] = useState({
    name: "",
    isbn: "",
    title: "",
    author: "",
    pub: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/books",
        formData
      );
      setMessage("Book inserted successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Error inserting the book. Please try again.");
    }
  };

  return (
    <div>
      <header>
        <p>Library Books Management</p>
        <ul>
          <li className="active">
            <Link to="/">Insert Book</Link>
          </li>
          <li>
            <Link to="/delete">Delete Book</Link>
          </li>
          <li>
            <Link to="/update">Update Book</Link>
          </li>
          <li>
            <Link to="/display">Display Book</Link>
          </li>
        </ul>
      </header>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="title">Insert Book</div>
          <ContainerElement
            name={"name"}
            value={formData.name}
            onChange={handleChange}
          />
          <ContainerElement
            name={"isbn"}
            value={formData.isbn}
            onChange={handleChange}
          />
          <ContainerElement
            name={"title"}
            value={formData.title}
            onChange={handleChange}
          />
          <ContainerElement
            name={"author"}
            value={formData.author}
            onChange={handleChange}
          />
          <ContainerElement
            name={"pub"}
            value={formData.pub}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Insert;
