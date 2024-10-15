import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    name: {type:String, required: true},
    isbn: {type: String, required: true},
    title: {type: String, required: true},
    author: {type: String},
    pub: {type: String}
});

const booksModel = mongoose.models.books || mongoose.model("books", booksSchema);
export default booksModel;