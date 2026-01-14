import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo"></div>
        <span className="brand">Centurion</span>
      </div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div className="nav-right">
        <Link to="/login">
          <button className="login-btn">Sign in</button>
        </Link>
      </div>
    </nav>
  );
}
