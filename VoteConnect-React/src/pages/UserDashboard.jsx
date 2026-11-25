import { Link } from "react-router-dom";
import { read } from "../data";
export default function UserDashboard() {
  const user=read("currentUser",{}); const voters=read("voters",[]);
  const records=read("voteRecords",[]);
  const voter=voters.find(v=>v.email===user.email);
  const voted=!!voter?.hasVoted;
  return <main className="section"><h1>Welcome, {user.name || "Voter"}!</h1><p className="muted">Your voter dashboard</p>
    <div className="cards">
      <article className="card"><h3>Registered Voters</h3><p className="stat">{voters.length}</p></article>
      <article className="card"><h3>Votes Submitted</h3><p className="stat">{records.length}</p></article>
      <article className="card"><h3>Your Status</h3><p className="stat">{voted?"Voted":"Not voted"}</p></article>
    </div>
    <div className="card action-card">{voted?<h3>✅ Your vote has been submitted.</h3>:<><h2>Ready to vote?</h2><p>Select one candidate in the voting page.</p><Link className="btn" to="/vote">Vote Now</Link></>}
      <p><Link to="/results">View Election Results</Link></p></div>
  </main>;
}
