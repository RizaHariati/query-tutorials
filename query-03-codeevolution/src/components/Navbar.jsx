import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to={"/"} className="link">
          <p>Home Page</p>
        </Link>
        <div className="links">
          <Link to="/superheroes">
            <p>Super Heroes</p>
          </Link>
          <Link to="/rq-superheroes">
            <p>RQ SUper Heroes</p>
          </Link>
          <Link to="/rq-parallel">
            <p>RQ Parallel</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
