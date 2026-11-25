import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AdminLogin() {
  const [username,setUsername]=useState(""); const [password,setPassword]=useState("");
  const [message,setMessage]=useState(""); const navigate=useNavigate();
  function submit(e){e.preventDefault();if(username==="admin"&&password==="admin123"){localStorage.setItem("adminLoggedIn","true");navigate("/admin-dashboard");}else setMessage("Incorrect admin username or password.");}
  return <main className="form-wrap"><form className="form-card" onSubmit={submit}><h2>Admin Login</h2>
    <label>Username<input value={username} onChange={e=>setUsername(e.target.value)} required/></label>
    <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>
    <button className="btn full">Login as Admin</button>{message&&<p className="message">{message}</p>}
    <p className="muted">Demo: admin / admin123</p>
  </form></main>;
}
