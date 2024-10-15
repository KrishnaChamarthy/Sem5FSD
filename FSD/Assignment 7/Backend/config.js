import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://chamarthysr:pVhqp7zotHtYrcFH@cluster0.mimkc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/FSD_A7").then(() => console.log("DB Connected"));
}

