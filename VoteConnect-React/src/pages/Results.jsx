import { candidates, read } from "../data";
export default function Results() {
  const votes=read("votes",{}); const total=Object.values(votes).reduce((a,b)=>a+b,0);
  return <main className="section"><h1>Election Results</h1><p className="muted">Current demonstration vote count</p>
    <div className="results-list">{candidates.map(c=>{const count=votes[c.id]||0;const percent=total?Math.round(count/total*100):0;
      return <article className="card" key={c.id}><div className="result-head"><h3>{c.symbol} {c.name}</h3><strong>{count} votes · {percent}%</strong></div>
      <div className="progress"><span style={{width:`${percent}%`}}/></div><p className="muted">{c.party}</p></article>})}</div>
    <h3>Total votes: {total}</h3>
  </main>;
}
