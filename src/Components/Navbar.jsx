import { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [active, setActive] = useState("general");

  const categories = [
    "general", "technology", "business", "health", "sports", "entertainment", "science"
  ];

  const handleClick = (cat) => {
    setCategory(cat);
    setActive(cat);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top shadow" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-danger fs-4" href="#">KBC 🌍</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <div
                  className={`nav-link px-3 py-2 rounded-pill mx-1 fw-medium nav-tab ${active === cat ? "active-tab text-danger" : "text-light"}`}
                  onClick={() => handleClick(cat)}
                  role="button"
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
