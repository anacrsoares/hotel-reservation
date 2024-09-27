import "./navbar.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <Link className="logo" to="/">
          <span>TripExplorer.com</span>
        </Link>

        <div className="nav-items">
          <button className="nav-button">Register</button>
          <button className="nav-button">Login</button>
        </div>
      </div>
    </div>
  );
}
