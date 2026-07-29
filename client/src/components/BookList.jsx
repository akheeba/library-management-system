import { useEffect, useState } from "react";
import api from "../services/api";

function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>

      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        books.map((book) => (
          <div key={book._id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;