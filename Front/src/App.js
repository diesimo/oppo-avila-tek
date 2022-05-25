import "./Estilos/Estilos.scss";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Componets/Menu";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Products from "./Componets/Products";
import Modal from "./Componets/Modal";
import Login from "./Componets/Login";
import Register from "./Componets/Register";

function App() {
  // Estado para cerrar ventada de Registro
  const [estadoModalR, cambiarEstadoR] = useState(false);
  const [estadoModalL, cambiarEstadoL] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
          estadoR={estadoModalR}
          cambiarEstadoR={cambiarEstadoR}
          estadoL={estadoModalL}
          cambiarEstadoL={cambiarEstadoL}
        ></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Register"
            element={
              <Modal estado={estadoModalR} cambiarEstado={cambiarEstadoR}>
                <Register
                  estado={estadoModalR}
                  cambiarEstado={cambiarEstadoR}
                ></Register>
              </Modal>
            }
          />
          <Route
            path="Login"
            element={
              <Modal estado={estadoModalL} cambiarEstado={cambiarEstadoL}>
                <Login
                  estado={estadoModalL}
                  cambiarEstado={cambiarEstadoL}
                ></Login>
              </Modal>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
