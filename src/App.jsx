import "./App.css";

function App() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">
  <img src="/logo-text.png" alt="Dev Stack" />
</div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className="nav-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>

      <main>
        <h1>Build Your Ideal Development Stack</h1>
        <p>Choose the right technologies for your development journey.</p>
      </main>
    </div>
  );
}

export default App;