import express from 'express';
import cors from 'cors';
import { connectDB } from './config.js';
import booksRouter from "./routes.js"

const app = express();
app.use(express.json());
app.use(cors()); 

connectDB();

app.use("/books", booksRouter)

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
