const express = require("express");
const { BookModel } = require("../models/book.model");
const { auth } = require("../middlewares/auth.middleware");

const bookRouter = express.Router();

bookRouter.post("/", auth, async (req, res) => {
  try {
    const book = new BookModel(req.body);
    await book.save();
    res.status(200).send({ book: book, status: "Book Added" });
  } catch (error) {
    res.status(400).send(error);
  }
});

bookRouter.get("/", async (req, res) => {
  const { old, new: latest } = req.query;
  let filter = {};

  if (old === "1") {
    filter.createdAt = { $lt: new Date(Date.now() - 10 * 60 * 1000) };
  }

  if (latest == "1") {
    filter.createdAt = { $gte: new Date(Date.now() - 10 * 60 * 1000) };
  }

  try {
    const book = await BookModel.find(filter);
    res.status(200).send({ book: book, status: "All books" });
  } catch (error) {
    res.status(400).send(error);
  }
});

bookRouter.delete("/delete/:id", auth, async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const book = await BookModel.findByIdAndDelete({ _id: id });
    console.log(book);
    res.status(200).send({ book: book, status: "Book Deleted" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { bookRouter };
