import React from 'react'

export default function Navbar() {
    const navbarStyle={
        
    }
    return (
        <div style={navbarStyle}>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-1" href="#">
                        Tienda Virtual
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2">
                            <li className="nav-item">
                                <a className="nav-link active fs-4" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item fs-4">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item fs-4">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item fs-4">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="" className="btn btn-outline-dark px-3 fs-5"> <i className="fa fa-sign-in me-3"></i>Login</a>
                            <a href="" className="btn btn-outline-dark px-3 ms-2 fs-5"> <i className="fa fa-user-plus me-3"></i>Register</a>
                            <a href="" className="btn btn-outline-dark px-3 ms-2 fs-5"> <i className="fa fa-shopping-cart me-3"></i>Cart (0)</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
