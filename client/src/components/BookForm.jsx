import { useState } from "react";
import api from "../services/api";

function BookForm() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/books", book);
      alert("Book added successfully!");
      setBook({
        title: "",
        author: "",
        category: "",
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed to add book");
    }
  };

  return (
    <div>
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={book.category}
          onChange={handleChange}
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;