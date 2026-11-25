import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { read } from "../data";

export default function Signup() {
  const [form, setForm] = useState({name:"", voterId:"", email:"", phone:"", age:"", password:""});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  function update(e) { setForm({...form, [e.target.name]:e.target.value}); }
  function submit(e) {
    e.preventDefault();
    const voters = read("voters", []);
    if (Number(form.age) < 18) return setMessage("You must be at least 18 years old.");
    if (voters.some(v => v.email.toLowerCase() === form.email.toLowerCase() || v.voterId === form.voterId))
      return setMessage("This email or voter ID is already registered.");
    voters.push({...form, age:Number(form.age), hasVoted:false});
    localStorage.setItem("voters", JSON.stringify(voters));
    setMessage("Registration successful. Please log in.");
    setTimeout(() => navigate("/login"), 700);
  }
  return <main className="form-wrap"><form className="form-card" onSubmit={submit}>
    <h2>Create Voter Account</h2><p className="muted">Fill in your details to register.</p>
    {["name","voterId","email","phone","age","password"].map(field =>
      <label key={field}>{({name:"Full name",voterId:"Voter ID",email:"Email",phone:"Phone",age:"Age",password:"Password"})[field]}
        <input name={field} type={field==="password"?"password":field==="email"?"email":field==="age"?"number":"text"}
          value={form[field]} onChange={update} required min={field==="age"?18:undefined} minLength={field==="password"?6:undefined}/>
      </label>)}
    <button className="btn full">Create Account</button>{message && <p className="message">{message}</p>}
    <p className="muted">Already registered? <Link to="/login">Login</Link></p>
  </form></main>;
}
