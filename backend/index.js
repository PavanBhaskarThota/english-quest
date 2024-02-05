const express = require("express");
const { connection } = require("./database/db");
const { userRouter } = require("./routes/user.route");
const { bookRouter } = require("./routes/book.route");
require("dotenv").config();

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", userRouter);
app.use("/books", bookRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server is connected at 7000 and db is connected");
  } catch (error) {
    console.log(error);
  }
});
