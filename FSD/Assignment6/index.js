import express from "express";
import cors from "cors";
import userRoutes from './Routes/user.js'

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes)

app.get("/", (req, res) => {
  res.send("API working");
});


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
