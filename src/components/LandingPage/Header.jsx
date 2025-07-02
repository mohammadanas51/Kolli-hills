import * as React from "react";
import { Link } from "react-router-dom";

export default function Header({ cartCount, onSearch }) {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchInput = e.target.elements.search;
    onSearch(searchInput.value);
    setIsSearchOpen(false);
  };

  return (
    <header className="header" role="banner">
      <div className="header-content">
        <a href="/" className="logo">
          <h1>Spices</h1>
        </a>

        <nav className="nav-menu" role="navigation" aria-label="Main navigation">
          <div className="nav-links">
            <a href="#discovery">Discovery</a>
            <a href="#about">About</a>
            <a href="/contact">Contact us</a>
          </div>

          <div className="nav-icons">
            <Link to = '/profile'>
            <button
              className="user-icon"
              aria-label="User profile"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3d2f918d542dae6cadbe8c1898aa4aa33520cd903060eae07eb59c1ff7ff78c?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f"
                alt=""
                aria-hidden="true"
              />
            </button>
            </Link>
            
           <Link to = "/cart"> 
            <button className="cart-button" aria-label={`Shopping cart with ${cartCount} items`}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7183a4d8b11e0d94b9a00f094e6351e2a043048f7a9662ad0d0a0fd69b0c5cda?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f"
                alt=""
                aria-hidden="true"
              />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
            </Link>
          </div>
        </nav>

        {isSearchOpen && (
          <form
            id="search-menu"
            className="search-form"
            role="search"
            onSubmit={handleSearchSubmit}
          >
            <label htmlFor="search" className="visually-hidden">
              Search products
            </label>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search products..."
              autoComplete="off"
              autoFocus
            />
            <button type="submit" aria-label="Submit search">
              Search
            </button>
          </form>
        )}
      </div>
    </header>
  );
}
