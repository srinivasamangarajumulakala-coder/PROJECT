import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { candidates, read } from "../data";
export default function Vote() {
  const user=read("currentUser",{}); const [selected,setSelected]=useState("");
  const [message,setMessage]=useState(""); const navigate=useNavigate();
  function submit(e) {
    e.preventDefault();
    if (!selected) return setMessage("Please select a candidate.");
    const voters=read("voters",[]); const records=read("voteRecords",[]);
    const voterIndex=voters.findIndex(v=>v.email===user.email);
    if (voterIndex<0 || voters[voterIndex].hasVoted || records.some(r=>r.email===user.email))
      return setMessage("A vote has already been submitted for this account.");
    const votes=read("votes",{});
    votes[selected]=(votes[selected]||0)+1;
    voters[voterIndex].hasVoted=true;
    const candidate=candidates.find(c=>c.id===selected);
    records.push({voterName:user.name,voterId:user.voterId,email:user.email,candidateId:selected,candidateName:candidate.name,date:new Date().toLocaleString()});
    localStorage.setItem("votes",JSON.stringify(votes));
    localStorage.setItem("voters",JSON.stringify(voters));
    localStorage.setItem("voteRecords",JSON.stringify(records));
    localStorage.setItem("currentUser",JSON.stringify(voters[voterIndex]));
    navigate("/user-dashboard");
  }
  const already=read("voters",[]).find(v=>v.email===user.email)?.hasVoted;
  if (already) return <main className="section"><h2>You have already voted.</h2></main>;
  return <main className="section"><h1>Cast Your Vote</h1><p className="muted">Select only one candidate.</p>
    <form onSubmit={submit}><div className="candidate-grid">{candidates.map(c=><label className={`candidate ${selected===c.id?"selected":""}`} key={c.id}>
      <input type="radio" name="candidate" value={c.id} checked={selected===c.id} onChange={()=>setSelected(c.id)}/>
      <span className="symbol">{c.symbol}</span><h3>{c.name}</h3><p>{c.party}</p>
    </label>)}</div><button className="btn">Submit Vote</button>{message&&<p className="message">{message}</p>}</form>
  </main>;
}
