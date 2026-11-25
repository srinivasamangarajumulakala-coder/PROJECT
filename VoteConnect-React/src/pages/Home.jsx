import { Link } from "react-router-dom";
export default function Home() {
  return <main>
    <section className="hero">
      <div><p className="eyebrow">YOUR VOICE MATTERS</p><h1>Your Vote. Your Voice.<br/>Your Future.</h1>
      <p>Take part in a simple online voting demonstration. Register, sign in and cast your vote.</p>
      <Link className="btn" to="/signup">Get Started</Link></div>
      <div className="hero-icon">🗳️</div>
    </section>
    <section className="section"><h2>Why VoteConnect?</h2><div className="cards">
      <article className="card"><h3>🔐 Easy Access</h3><p>Register and sign in using your voter details.</p></article>
      <article className="card"><h3>🗳️ Simple Voting</h3><p>Choose one candidate and submit your vote.</p></article>
      <article className="card"><h3>📊 View Results</h3><p>See the vote totals in the results section.</p></article>
    </div></section>
    <p className="notice">Academic demonstration only — this Local Storage project is not suitable for real elections.</p>
  </main>;
}
