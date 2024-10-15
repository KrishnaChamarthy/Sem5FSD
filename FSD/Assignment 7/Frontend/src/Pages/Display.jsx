import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Display = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/books");
        if (response.data.length > 0) {
          setBooks(response.data);
        } else {
          setMessage("No books found");
        }
      } catch (error) {
        setMessage("Error fetching books");
      }
    };

    fetchBooks();
  }, []);

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
          <li>
            <Link to="/update">Update Book</Link>
          </li>
          <li className="active">
            <Link to="/display">Display Books</Link>
          </li>
        </ul>
      </header>

      <div className="container">
        <div className="display-container">
          <div className="title">List of Books</div>

          {message ? (
            <p>{message}</p>
          ) : (
            <table border="1">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Publisher</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={index}>
                    <td>{book.name}</td>
                    <td>{book.isbn}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.pub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Display;
