import React, { useState, useEffect } from 'react'

export default function Products() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState([data])
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            const fetchProducts = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await fetchProducts.clone().json());
                setFilter(await fetchProducts.json());
                setLoading(false);
                //console.log(filter)
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                loading....
            </>
        )
    }
    
    const ShowProducts =() => {
        return (
            <>
                <div className="buttons">
                    <button className="btn btn-outline-dark">Todo</button>
                    <button className="btn btn-outline-dark">Hombres</button>
                    <button className="btn btn-outline-dark">Mujeres</button>
                    <button className="btn btn-outline-dark">Joyas</button>
                    <button className="btn btn-outline-dark">Electrónica</button>
                </div>
                
                {filter.map((product,index) => {
                    //product.title.toString();
                    
                    return (
                        <>
                            <div className="col-md-3 my-5" >
                                
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} height="250px" className="card-img-top" alt={product.title} />
                                    <div className="card-body" >
                                        <h5 className="card-title">{product.title !== undefined ? product.title.substring(0,12) : product.title }...</h5>
                                        <p className="card-text fw-bold fs-4">${product.price}</p>
                                        <a href="#" className="btn btn-outline-dark">Comprar ahora</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }    

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className='display-6 fw-bolder text-center'>Últimos Productos</h1>
                        <hr />
                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </div>
    )
}
