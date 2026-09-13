import { useEffect, useState } from "react";
import "./App.css";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [technologies, setTechnologies] = useState([]);
const [loading, setLoading] = useState(true);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Failed to load technologies:", error);
      setLoading(false);
    });
}, []);

  const addToStack = (technology) => {
  if (selectedTechnologies.some((item) => item.id === technology.id)) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setSelectedTechnologies([
    ...selectedTechnologies,
    technology,
  ]);

  toast.success(`${technology.name} added to your stack!`);
};

 const removeFromStack = (id) => {
  const technology = selectedTechnologies.find(
    (item) => item.id === id
  );

  setSelectedTechnologies(
    selectedTechnologies.filter((item) => item.id !== id)
  );

  toast.info(`${technology.name} removed from your stack.`);
};

  return (
    <div>
      <ToastContainer />
      {/* Navbar */}
      <header className="navbar">

  <button className="hamburger-btn" aria-label="Open menu">
    ☰
  </button>

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
              Explore frontend, backend, database, and tooling options. Compare them side by side and put together the stack that fits your next project.
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


        {/* Technology Section */}
<section className="technology-section">
  <div className="technology-container">

    <div className="technology-header">
      <h2>
        Explore the <span>Technologies</span>
      </h2>

      <p>
        Pick one technology per category to build your ideal stack.
      </p>
    </div>

    <div className="technology-layout">

      {/* Technology Cards */}
      <div className="technology-grid">
  {loading ? (
    <div className="loading-message">
      Loading technologies...
    </div>
  ) : (
    technologies.map((technology) => (
          <div className="technology-card" key={technology.id}>

            <div className="technology-card-top">

              <div className="technology-logo">
                <img 
  src={technology.icon} 
  alt={technology.name} 
/>
              </div>

              {technology.badge && (
                <span
                  className={`technology-badge ${technology.badgeClass}`}
                >
                  {technology.badge}
                </span>
              )}

            </div>

            <div className="technology-card-content">

              <h3>{technology.name}</h3>

              <p>{technology.description}</p>

            </div>

            <div className="technology-meta">

              <span className="category-tag">
                {technology.category}
              </span>

              <span className="difficulty">
                {technology.difficulty}
              </span>

              <span className="rating">
                <span className="star">★</span>
                {technology.rating}
              </span>

            </div>

           <button
  className="add-stack-btn"
  onClick={() => addToStack(technology)}
  disabled={selectedTechnologies.some(
    (item) => item.id === technology.id
  )}
>
  {selectedTechnologies.some(
    (item) => item.id === technology.id
  )
    ? "✓ Added to Stack"
    : "Add to Stack"}
</button>

          </div>
               ))
  )}
      </div>
    {/* Your Stack */}
<aside className="stack-sidebar">

  <div className="stack-header">
    <h3>Your Stack</h3>

    <p>
      {selectedTechnologies.length === 0
        ? "No technologies selected yet."
        : `${selectedTechnologies.length} technologies selected.`}
    </p>
  </div>

  {selectedTechnologies.length === 0 ? (
    <div className="empty-stack">
      <p>Your stack is empty.</p>
    </div>
  ) : (
    <>
      <div className="selected-stack">

        {selectedTechnologies.map((technology) => (
          <div
            className="selected-stack-item"
            key={technology.id}
          >
            <div className="selected-stack-info">

  <img
    src={technology.icon}
    alt={technology.name}
  />

  <div>
    <span>{technology.name}</span>
    <small>{technology.category}</small>
  </div>

</div>

            <button
              onClick={() => removeFromStack(technology.id)}
            >
              ×
            </button>

          </div>
        ))}

      </div>

      {/* Remove All Button */}
      <button
  className="remove-all-btn"
  onClick={() => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack.");
  }}
>
  Remove All
</button>
    </>
  )}

</aside>

    </div>
  </div>
</section>

      </main>
     <footer className="footer">
  <div className="footer-container">

    {/* Left - Branding */}
    <div className="footer-brand">
      <div className="footer-logo">
  <img src="/logo-text.png" alt="Dev Stack" />
</div>
      <p>
        Curated tools, technologies, and resources for developers
        building modern software.
      </p>

      <div className="social-links">
        <a href="#" aria-label="GitHub">GitHub</a>
        <a href="#" aria-label="Twitter">Twitter</a>
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
      </div>
    </div>

    {/* Product */}
    <div className="footer-column">
      <h4>PRODUCT</h4>
      <a href="#">Home</a>
      <a href="#">Technologies</a>
      <a href="#">Projects</a>
    </div>

    {/* Company */}
    <div className="footer-column">
      <h4>COMPANY</h4>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Careers</a>
    </div>

    {/* Legal */}
    <div className="footer-column">
      <h4>LEGAL</h4>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="footer-bottom">
    <p>© 2026 Dev Stack. All rights reserved.</p>

    <div className="footer-quick-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;