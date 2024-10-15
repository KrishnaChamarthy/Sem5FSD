import booksModel from "./model.js";

const addBook = async (req, res) => {
    const book = new booksModel({
        name: req.body.name,
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        pub: req.body.pub
    });
    try {
        await book.save();
        res.json({
            success: true,
            message: "Book Added"
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        });
    }
};

const listBooks = async (req, res) => {
    try {
        const books = await booksModel.find({});        
        res.json({
            success: true,
            data: books
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        });
    }
};

const removeBook = async (req, res) => {
    try {
        const { isbn } = req.query; 
        if (!isbn || typeof isbn !== "string" || isbn.trim().length === 0) {
            return res.status(400).json({
                success: false,
                message: "Valid ISBN is required"
            });
        }

        const deletedBook = await booksModel.findOneAndDelete({ isbn });
        
        if (!deletedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        res.json({
            success: true,
            message: "Book removed",
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Error"
        });
    }
};



const updateBook = async (req, res) => {
    try {
        const { isbn } = req.query;
        const updateData = req.body;

        const updatedBook = await booksModel.findOneAndUpdate({ isbn }, updateData, {
            new: true        
        });

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.json({
            success: true,
            message: "Book updated",
            data: updatedBook 
        });
    } catch (error) {
        console.log(error);
        
        res.json({ 
            success: false,
            message: "Error"
        });
    }
};



export { addBook, removeBook, updateBook, listBooks };
