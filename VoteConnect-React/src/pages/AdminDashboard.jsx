import { candidates, read } from "../data";
export default function AdminDashboard() {
  const voters=read("voters",[]), votes=read("votes",{}), records=read("voteRecords",[]);
  const total=Object.values(votes).reduce((a,b)=>a+b,0);
  return <main className="section"><h1>Admin Dashboard</h1><div className="cards">
    <article className="card"><h3>Registered Voters</h3><p className="stat">{voters.length}</p></article>
    <article className="card"><h3>Total Votes</h3><p className="stat">{total}</p></article>
    <article className="card"><h3>Not Voted</h3><p className="stat">{voters.filter(v=>!v.hasVoted).length}</p></article>
  </div><h2>Candidate Vote Count</h2><div className="cards">{candidates.map(c=><article className="card" key={c.id}><h3>{c.symbol} {c.name}</h3><p className="stat">{votes[c.id]||0}</p></article>)}</div>
    <h2>Registered Voters</h2><div className="table-wrap"><table><thead><tr><th>Name</th><th>Voter ID</th><th>Email</th><th>Phone</th><th>Age</th><th>Status</th></tr></thead>
      <tbody>{voters.map(v=><tr key={v.email}><td>{v.name}</td><td>{v.voterId}</td><td>{v.email}</td><td>{v.phone}</td><td>{v.age}</td><td>{v.hasVoted?"Voted":"Not voted"}</td></tr>)}</tbody></table></div>
    <h2>Vote Records</h2><div className="table-wrap"><table><thead><tr><th>Voter</th><th>Voter ID</th><th>Candidate</th><th>Date</th></tr></thead>
      <tbody>{records.map((r,i)=><tr key={i}><td>{r.voterName}</td><td>{r.voterId}</td><td>{r.candidateName}</td><td>{r.date}</td></tr>)}</tbody></table></div>
  </main>;
}
