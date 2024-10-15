import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors()); 

let books = [];

app.post('/books', (req, res) => {
  const { name, isbn, title, author, pub } = req.body;

  if (!name || !isbn || !title || !author || !pub) {
    return res.status(400).send('All fields are required');
  }

  const existingBook = books.find(book => book.isbn === isbn);
  if (existingBook) {
    return res.status(409).send('Book with this ISBN already exists');
  }

  const newBook = { name, isbn, title, author, pub };
  books.push(newBook);
  res.status(200).send('Book inserted successfully');
});

app.get('/books', (req, res) => {
  if (books.length === 0) {
    return res.status(404).send('No books found');
  }

  res.status(200).json(books);
});

app.put('/books/:isbn', (req, res) => {
  const { isbn } = req.params;
  const { name, title, author, pub } = req.body;

  const bookIndex = books.findIndex(book => book.isbn === isbn);

  if (bookIndex === -1) {
    return res.status(404).send('Book not found');
  }

  if (name) books[bookIndex].name = name;
  if (title) books[bookIndex].title = title;
  if (author) books[bookIndex].author = author;
  if (pub) books[bookIndex].pub = pub;

  res.status(200).send('Book updated successfully');
});

app.delete('/books/:isbn', (req, res) => {
  const { isbn } = req.params;

  const bookIndex = books.findIndex(book => book.isbn === isbn);

  if (bookIndex === -1) {
    return res.status(404).send('Book not found');
  }

  books.splice(bookIndex, 1);
  res.status(200).send('Book deleted successfully');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
