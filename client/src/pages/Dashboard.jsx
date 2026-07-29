import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    isbn: "",
    quantity: "",
  });

  const fetchBooks = async () => {
    const res = await API.get("/books");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveBook = async (e) => {
    e.preventDefault();

    if (editingId) {
      await API.put(`/books/${editingId}`, form);
      setEditingId(null);
    } else {
      await API.post("/books", form);
    }

    setForm({
      title: "",
      author: "",
      category: "",
      isbn: "",
      quantity: "",
    });

    fetchBooks();
  };

  const editBook = (book) => {
    setEditingId(book._id);

    setForm({
      title: book.title,
      author: book.author,
      category: book.category,
      isbn: book.isbn,
      quantity: book.quantity,
    });
  };

  const deleteBook = async (id) => {
    await API.delete(`/books/${id}`);
    fetchBooks();
  };

 return (
  <div className="dashboard">
    <h1>📚 Smart Library Dashboard</h1>

    <div className="stats">
      <div className="stat-card">
        <h2>{books.length}</h2>
        <p>Total Books</p>
      </div>

      <div className="stat-card">
        <h2>
          {books.reduce((a, b) => a + Number(b.quantity), 0)}
        </h2>
        <p>Total Copies</p>
      </div>

      <div className="stat-card">
        <h2>
          {new Set(books.map((b) => b.category)).size}
        </h2>
        <p>Categories</p>
      </div>
    </div>

    <form
      onSubmit={saveBook}
      style={{
        display:"grid",
        gap:"12px",
        gridTemplateColumns:"repeat(2,1fr)"
      }}
    >
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required/>
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required/>
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required/>
      <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} required/>
      <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} required/>

      <button type="submit">
        {editingId ? "Update Book" : "Add Book"}
      </button>
    </form>

    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>ISBN</th>
          <th>Qty</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book)=>(
          <tr key={book._id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.category}</td>
            <td>{book.isbn}</td>
            <td>{book.quantity}</td>

            <td>
              <button onClick={()=>editBook(book)}>Edit</button>

              <button
                style={{marginLeft:"10px",background:"#dc2626"}}
                onClick={()=>deleteBook(book._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
); 
}

export default Dashboard;