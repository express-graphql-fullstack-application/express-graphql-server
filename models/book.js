const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: String,
  genere: String,
  authorId: String,
});

module.exports = mongoose.model("Book", bookSchema);
