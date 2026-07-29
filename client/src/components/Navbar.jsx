import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2 style={{ color: "white" }}>📚 Smart Library</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;