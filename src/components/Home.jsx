import React from 'react'
import Products from './Products'

export default function Home() {

    const styledImg={
        height: "90vh",
        opacity: "0.5",
        marginTop:"0px",        
    }

    return (
        <div>
            <div className="card bg-dark text-white">
                <img src="/assets/background.jpg" className="card-img" style={styledImg} alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder">Nueva Temporada</h5>
                            <p className="card-text display-4">Descubre nuevos productos</p>
                        </div>                        
                    </div>
            </div>
            <Products />
        </div>
    )
}
