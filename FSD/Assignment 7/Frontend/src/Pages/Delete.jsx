import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ContainerElement from "../Components/ContainerElement";

const Delete = () => {
  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setIsbn(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isbn) {
      setMessage("Please provide the ISBN of the book to delete.");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:5000/books/remove`,
        { params: { isbn } }
      );

      if (response.status === 200) {
        setMessage("Book deleted successfully!");
      } else {
        setMessage("Failed to delete the book. Try again.");
      }
    } catch (error) {
      setMessage("Error occurred while deleting the book.");
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
          <li className="active">
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
          <div className="title">Delete Book</div>
          <ContainerElement
            name={"isbn"}
            value={isbn}
            onChange={handleChange}
          />
          <button type="submit">Delete Book</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Delete;
