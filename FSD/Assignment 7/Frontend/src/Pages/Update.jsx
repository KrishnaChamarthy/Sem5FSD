import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContainerElement from "../Components/ContainerElement";
import axios from "axios";

const Update = () => {
  const [formData, setFormData] = useState({
    isbn: "",
    name: "",
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

    if (!formData.isbn) {
        setMessage("Please provide the ISBN of the book to update.");
        return;
    }

    const updateData = {};
    if (formData.name) updateData.name = formData.name;
    if (formData.title) updateData.title = formData.title;
    if (formData.author) updateData.author = formData.author;
    if (formData.pub) updateData.pub = formData.pub;

    console.log(updateData);

    try {
        const response = await axios.put(
            `http://localhost:5000/books/update`, 
            updateData, 
            {
                params: { isbn: formData.isbn }, 
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status === 200) {
            setMessage("Book updated successfully!");
        } else {
            setMessage("Failed to update the book. Try again.");
        }
    } catch (error) {
        setMessage("Error occurred while updating the book.");
    }
};

  return (
    <div>
      <header>
        <p>Library Books Management</p>
        <ul>
          <li>
            <Link to="/">Insert Book</Link>
          </li>
          <li>
            <Link to="/delete">Delete Book</Link>
          </li>
          <li className="active">
            <Link to="/update">Update Book</Link>
          </li>
          <li>
            <Link to="/display">Display Book</Link>
          </li>
        </ul>
      </header>

      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="title">Update Book</div>
          <ContainerElement
            name={"isbn"}
            value={formData.isbn}
            onChange={handleChange}
          />
          <ContainerElement
            name={"name"}
            value={formData.name}
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
          <button type="submit">Update Book</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Update;
