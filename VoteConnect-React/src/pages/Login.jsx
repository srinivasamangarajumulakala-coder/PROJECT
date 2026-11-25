import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { read } from "../data";
export default function Login() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const [message,setMessage]=useState(""); const navigate=useNavigate();
  function submit(e) {
    e.preventDefault();
    const voter=read("voters",[]).find(v=>v.email.toLowerCase()===email.toLowerCase() && v.password===password);
    if (!voter) return setMessage("Invalid email or password.");
    localStorage.setItem("currentUser",JSON.stringify(voter)); navigate("/user-dashboard");
  }
  return <main className="form-wrap"><form className="form-card" onSubmit={submit}>
    <h2>Voter Login</h2><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label>
    <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>
    <button className="btn full">Login</button>{message && <p className="message">{message}</p>}
    <p className="muted">New voter? <Link to="/signup">Create an account</Link></p>
  </form></main>;
}
