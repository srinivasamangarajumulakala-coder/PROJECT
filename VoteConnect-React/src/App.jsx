import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import Vote from "./pages/Vote";
import Results from "./pages/Results";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";

function UserOnly({ children }) {
  return localStorage.getItem("currentUser")
    ? children : <Navigate to="/login" replace />;
}
function AdminOnly({ children }) {
  return localStorage.getItem("adminLoggedIn") === "true"
    ? children : <Navigate to="/admin-login" replace />;
}

export default function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user-dashboard" element={<UserOnly><UserDashboard /></UserOnly>} />
      <Route path="/vote" element={<UserOnly><Vote /></UserOnly>} />
      <Route path="/results" element={<Results />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminOnly><AdminDashboard /></AdminOnly>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>;
}
