import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser") || "null");
  const admin = localStorage.getItem("adminLoggedIn") === "true";
  function logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("adminLoggedIn");
    navigate("/");
  }
  return <nav className="navbar">
    <Link className="brand" to="/">🗳️ VoteConnect</Link>
    <div className="navlinks">
      <Link to="/">Home</Link><Link to="/results">Results</Link>
      {user ? <Link to="/user-dashboard">Dashboard</Link> : <><Link to="/signup">Sign Up</Link><Link to="/login">Login</Link></>}
      {admin ? <Link to="/admin-dashboard">Admin</Link> : <Link to="/admin-login">Admin</Link>}
      {(user || admin) && <button className="nav-logout" onClick={logout}>Logout</button>}
    </div>
  </nav>;
}
