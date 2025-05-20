# 📚 Book Review API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows users to **sign up, log in, add books, search books**, and **submit/update/delete reviews**. The API supports **JWT-based authentication**, **pagination**, and **search** by title or author.

---

## 🚀 Features

🔐 JWT Authentication - Secure user registration and login

📖 Book Management - Add, search, and filter books

⭐ Review System - Rate and review books

🔍 Advanced Search - Find books by title or author

📊 Pagination - Efficient data loading

🛡️ Authorization - Users can only modify their own content

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- bcrypt.js
- dotenv
- CORS

---

## 📦 Installation & Setup
## 1. Clone the repository
- git clone https://github.com/Rakeshkumarsahugithub/Book-Review-API-Node.js-.git
- cd book-review-api
## 2. Install dependencies
- npm install
## 3. Set up environment variables
- Create a .env file in the root directory and add the following variables:
- MONGODB_URI=<Your_MongoDB_Connection_String>
- JWT_SECRET=<Your_JWT_Secret>
- PORT=5000
 ## 4. Run the server locally
- To start the server, use the following command:
(npm start)

## 📌 API Endpoints
## 🔐 Authentication
| Method | Endpoint      | Description                    |
| ------ | ------------- | ------------------------------ |
| POST   | `/api/signup` | Register a new user            |
| POST   | `/api/login`  | Authenticate and get JWT token |

 - Request Body for /api/signup: 

- {
  "name": "Rakesh Kumar Sahu",
  "email": "rakesh@example.com",
  "password": "securepassword123"
}
 - Request Body for /api/login: 

- {
  "email": "rakesh@gmail.com",
  "password": "securepassword123"
}

- {
  "token": "JWT_TOKEN"

}
## 📚 Books
| Method | Endpoint                      | Description                                      |
| ------ | ----------------------------- | ------------------------------------------------ |
| GET    | `/api/books`                  | Get all books with optional filters & pagination |
| GET    | `/api/books/:id`              | Get details of a single book (including reviews) |
| POST   | `/api/books`                  | Add a new book (authentication required)         |
| GET    | `/api/books/search?q=<query>` | Search books by title or author                  |

## Query Parameters for /api/books:
- page (default: 1)
- limit (default: 10)
- author 
- genre
  ## ⭐ Reviews
  
| Method | Endpoint                 | Description                                          |
| ------ | ------------------------ | ---------------------------------------------------- |
| POST   | `/api/books/:id/reviews` | Submit a review for a book (authentication required) |
| PUT    | `/api/reviews/:id`       | Update your review (authentication required)         |
| DELETE | `/api/reviews/:id`       | Delete your review (authentication required)         |

## 🧪 Using Postman
You can use Postman to interact with the API.

## 🔐 Authentication
  Signup
- Method: POST
- Endpoint: http://localhost:5000/api/signup
- Body (raw, JSON): - {
  "name": "Rakesh Kumar Sahu",
  "email": "rakesh@example.com",
  "password": "securepassword123"

}
---
 Login
- Method: POST
- Endpoint: /api/login
- Body (raw, JSON): - {
  "email": "rakesh@example.com",
  "password": "securepassword123"

}
- Response - Jwt token will be generated

 ## 📘 Books
  Add a Book (Authenticated)
- Method: POST
- Endpoint: /api/books
- Headers: Authorization: Bearer <JWT_TOKEN>
- Body (raw, JSON): - {
  "title": "Agni Ki Udaan",
  "author": "APJ Abudl Kalam",
  "genre": "Motivation"

}
---
Search Books by Title or Author
- Method: GET
- Endpoint: /api/books/search?q=  (/api/books/search?q=title/author)
---
Get All Books (with Filters)
- Method: GET
- Endpoint: /api/books?genre=Fantasy&page=1&limit=5
---
Get Book by ID
- Method: GET
- Endpoint: /api/books/:id
---

## ⭐ Reviews
Add Review to Book (Authenticated)
- Method: POST
- Endpoint: /api/books/:id/reviews
- Headers: Authorization: Bearer <JWT_TOKEN>
- Body (raw, JSON): - {
  "rating": 5,
  "comment": "Fantastic read!"
}
---
Update Review (Authenticated)
- Method: PUT
- Endpoint: /api/reviews/:id
- Headers: Authorization: Bearer <JWT_TOKEN>
- Body (raw, JSON): - {
  "rating": 5,
  "comment": "Fantastic read (best)."

}
---
Delete Review (Authenticated)
- Method: DELETE
- Endpoint: /api/reviews/:id
- Headers: Authorization: Bearer <JWT_TOKEN>
---




