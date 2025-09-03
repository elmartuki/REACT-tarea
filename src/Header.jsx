import React from "react";
import "./header.css";
import logo from "./assets/img/logo.png";
import usser from "./assets/img/usser.png";

export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-bar_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-bar_buscador">
          <input type="text" placeholder="Buscar..." />
        </div>
        <div className="nav-bar_accesos">
          <button>
            <img src={usser} alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
}
