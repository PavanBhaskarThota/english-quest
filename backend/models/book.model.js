const mongoose = require("mongoose");

let bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    userId: String,
    username: String,
  },
  { timestamps: true },
  { versionkey: false }
);

const BookModel = mongoose.model("book", bookSchema);

module.exports = { BookModel };
