const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const { id: bookId } = req.params;
  try {
    const exists = await Review.findOne({ book: bookId, user: req.user.id });
    if (exists) return res.status(400).json({ message: "You already reviewed this book" });

    const review = await Review.create({ book: bookId, user: req.user.id, rating, comment });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id, user: req.user.id });
    if (!review) return res.status(404).json({ message: "Review not found" });

    Object.assign(review, req.body);
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!review) return res.status(404).json({ message: "Review not found" });

    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
