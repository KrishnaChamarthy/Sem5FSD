import express from "express";
import { addBook, listBooks, removeBook, updateBook } from "./controller.js";

const booksRouter = express.Router();

booksRouter.post("/add", addBook);
booksRouter.get("/list", listBooks);
booksRouter.put("/update", updateBook);
booksRouter.delete("/remove", removeBook);

export default booksRouter;