import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg  menu-de-todos ">
                <div className="container container-fluid ">
                    <NavLink to='/' className="navbar-brand">
                        <img src="./Logo-MECS-AUTO.png" alt="Bootstrap" width="280" />
                    </NavLink>
                    <div className="titulo-arriba ">
                        <span className="titulo-principal">Mec-Auto </span>
                        <span className="titulo-principal1"> Tu Mecanico De Confianza</span>
                    </div>
                    <button className="navbar-toggler menu-bot" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-k" id="navbarNavDropdown">
                        <ul className="navbar-nav link">
                            <li className="nav-item "  >
                                <NavLink to='/' className="nav-link "  activeClassName="active">
                                    INICIO
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/sobrenosotros' className="nav-link  " activeClassName="active">
                                    SOBRE NOSOTROS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/servicios' className="nav-link " activeClassName="active">
                                    SERVICIOS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/seguros' className="nav-link " activeClassName="active">
                                    SEGUROS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contacto' className="nav-link " activeClassName="active">
                                    CONTACTO
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar