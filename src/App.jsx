import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
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

      {/* Hero Section */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>
              Build Your Ideal
              <br />
              <span>Development Stack</span>
            </h1>

            <p>
              Explore frontend, backend, database, and tooling options.Compare them side by side and put together the stack that fits your next project.
            </p>

            <div className="hero-buttons">
              <button className="explore-btn">
                Explore Technologies
              </button>

              <button className="learn-btn">
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img src="/banner-stack.png" alt="Development Stack" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;