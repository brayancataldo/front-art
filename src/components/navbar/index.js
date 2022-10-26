import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* <Link to="/home" className="aba">
        Home
      </Link> */}
      <Link to="/gerador-de-degrade" className="aba">
        Gerador Linear-Gradient
      </Link>
      <Link to="/gerador-de-paleta" className="aba">
        Gerador de paleta
      </Link>
    </div>
  );
};
