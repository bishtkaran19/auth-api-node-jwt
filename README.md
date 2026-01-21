# Auth API (Node.js + JWT)

Authentication REST API built using **Node.js**, **Express**, and **MySQL** with secure password hashing (**bcrypt**) and JWT-based protected routes.

---

## Features

- User Registration API
- User Login API
- Password hashing using bcrypt
- JWT token generation (with expiry)
- Protected route using middleware
- Environment variable support using dotenv


## Tech Stack

- Node.js
- Express.js
- MySQL
- bcrypt
- jsonwebtoken
- dotenv


## Project Structure

src/
├── app.js
├── server.js
├── db.js
├── routes/
│   └── authRoutes.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
└── models/
└── userModel.js


##  API Endpoints

| Method | Endpoint | Description |
|------|----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and get JWT token |
| GET | /api/auth/profile | Protected route (requires token) |
| GET | /api/auth/test | Test route |


## ▶️ How to Run Locally

 1) Install dependencies
    ```bash
    npm install

2) Create .env file
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=auth_db
   JWT_SECRET=myjwtsecretkey123
   
3) Start server
   node src/server.js
   
 ## Server will run on:
    http://localhost:3000

 ## Sample Requests
 
--Register

curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"Karan Bisht","email":"karan@test.com","password":"password123"}'

--Login(Get Token)

curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"karan@test.com","password":"password123"}'

--Access Protected Route

curl http://localhost:3000/api/auth/profile \
-H "Authorization: Bearer YOUR_TOKEN_HERE"
