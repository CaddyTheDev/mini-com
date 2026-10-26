function HomePage() {
  return (
    <div className="home">
      <nav className="navbar">
        <h2 className="logo">
          ReactStore<span>.</span>
        </h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
        </div>

        <button className="sign-up">Sign Up</button>
      </nav>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">React, YOUR STYLE</p>

          <h1>
            Upgrade Your
            <br />
            Everyday Life.
          </h1>

          <p className="hero-text">
            Discover quality gadgets and accessories designed to make life
            easier.
          </p>

          <a href="/products" className="shop-btn">
            Shop Now →
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Explore Categories</h2>

        <div className="category-list">
          <div className="category">🎧 Audio</div>
          <div className="category">⌨️ Accessories</div>
          <div className="category">💻 Computers</div>
          <div className="category">📱 Gadgets</div>
        </div>
      </section>

      {/* Products Placeholder */}
      <section className="products-section">
        <h2>Featured Products</h2>
        <p>Your favourite gadgets will appear here soon.</p>
      </section>
    </div>
  );
}

export default HomePage;
