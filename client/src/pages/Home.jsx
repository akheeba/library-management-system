function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>📚 Library Management System</h1>
        <p>
          Manage books efficiently with a modern, fast and user-friendly
          library management system.
        </p>

        <a href="/dashboard" className="btn">
          Get Started
        </a>
      </div>

      <div className="features">
        <div className="card">
          <h2>📖 Manage Books</h2>
          <p>Add, edit and delete books easily.</p>
        </div>

        <div className="card">
          <h2>⚡ Fast</h2>
          <p>Powered by MERN Stack for smooth performance.</p>
        </div>

        <div className="card">
          <h2>📊 Dashboard</h2>
          <p>Track your library collection in one place.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;