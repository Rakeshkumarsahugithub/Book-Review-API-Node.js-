const Book = require("../models/Book");
const Review = require("../models/Review");

exports.addBook = async (req, res) => {
  const { title, author, genre } = req.body;
  try {
    const book = await Book.create({ title, author, genre, createdBy: req.user.id });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBooks = async (req, res) => {
  const { author, genre, page = 1, limit = 10 } = req.query;
  const query = {};
  if (author) query.author = new RegExp(author, "i");
  if (genre) query.genre = genre;

  try {
    const books = await Book.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const reviews = await Review.find({ book: book._id }).populate("user", "name");
    const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1);
    res.json({ book, avgRating: avgRating.toFixed(1), reviews });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.searchBooks = async (req, res) => {
  const { q } = req.query;
  try {
    const results = await Book.find({
      $or: [
        { title: new RegExp(q, "i") },
        { author: new RegExp(q, "i") }
      ]
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
