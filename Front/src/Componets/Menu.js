import React, { useState } from "react";
import "../Estilos/Estilos.scss";
import { NavLink } from "react-router-dom";

//Menu principan

export default function Menu({ estado, cambiarEstadoR, cambiarEstadoL }) {
  const [home, homeState] = useState(true);
  const [products, produState] = useState(true);
  const [about, aboutState] = useState(true);

  const changeHome = () => {
    if (home == true) {
      homeState(false);
      produState(true);
      aboutState(true);
    }
  };
  const changeProd = () => {
    if (products == true) {
      produState(false);
      homeState(true);
      aboutState(true);
    }
  };

  const changeAbout = () => {
    if (about == true) {
      aboutState(false);
      produState(true);
      homeState(true);
    }
  };

  return (
    <div className="Navbar">
      <ul>
        <div>
          <span id="Oppo">Oppo</span>
          <li>
            <NavLink
              onClick={changeHome}
              className={home ? "Li-navbar" : "Select"}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              id="product"
              onClick={changeProd}
              className={products ? "Li-navbar" : "Select"}
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={changeAbout}
              className={about ? "Li-navbar" : "Select"}
              id="about"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </div>
        <div>
          <li>
            <NavLink
              onClick={() => cambiarEstadoL(true)}
              id="login"
              className="Li-navbar"
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => cambiarEstadoR(true)}
              id="register"
              className="Li-navbar"
              to="/register"
            >
              Registrarse
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
