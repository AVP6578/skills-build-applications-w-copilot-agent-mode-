import { Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <h1>Octofit Tracker</h1>
      <p className="lead">A modern fitness tracker foundation with React, Vite, and Bootstrap.</p>
      <Link to="/dashboard" className="btn btn-primary">
        View Dashboard
      </Link>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container py-5">
      <h1>Dashboard</h1>
      <p>Start building your activity, team, and leaderboard features here.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
