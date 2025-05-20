const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { addBook, getBooks, getBookById, searchBooks } = require("../controllers/bookController");

router.get("/", getBooks);
router.get("/search", searchBooks);
router.get("/:id", getBookById);
router.post("/", auth, addBook);

module.exports = router;
