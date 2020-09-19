import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Avi-contact-book
        </Link>
        <div>
          <Link to="/contacts/add" className="btn btn-light ml-auto">
            Create Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
