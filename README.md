# 📚 Smart Library Management System

A full-stack **Library Management System** built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). The application allows users to manage library books with complete CRUD (Create, Read, Update, Delete) functionality through a clean and responsive interface.

---

## ✨ Features

- 📖 View all books
- ➕ Add new books
- ✏️ Edit book details
- 🗑️ Delete books
- 📊 Dashboard with library statistics
- 🔗 RESTful API integration
- ☁️ MongoDB Atlas database
- 📱 Responsive user interface

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React (Vite)
- Axios
- React Router DOM
- CSS3

### Backend
- 🟢 Node.js
- 🚀 Express.js
- 🍃 MongoDB Atlas
- Mongoose
- Dotenv
- CORS

---

## 📂 Project Structure

```
library-management-system/
│
├── client/          # React Frontend
│
├── server/          # Express Backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

---

## 🚀 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/library-management-system.git
```

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

The frontend will run at:

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books |
| POST | `/api/books` | Add a new book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

---

---

## 🌐 Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

---

## 👨‍💻 Author

**Akheeba Mohammed**

B.Tech (ECE) | Full Stack Web Development

---

## 📜 License

This project is developed for educational and academic purposes.
