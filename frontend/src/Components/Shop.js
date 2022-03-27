import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../Constant';
import { Product } from './Product';

const Shop = () => {
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    const [filtered_product, setFilteredProduct] = useState([]);

    const filterCategory = (cat) => {
        const updatedItems = product.filter((curElem) => {
            return curElem.category_id === cat;
        });
        setFilteredProduct(updatedItems);
    }

    const getCategory = () => {
        var url = API_BASE_URL + 'category/'
        axios.get(url)
            .then((res) => {
                setCategory(res['data']);
            })
            .catch(error => console.log(error))
    }

    const getProduct = () => {
        var url = API_BASE_URL + 'product/'
        axios.get(url)
            .then((res) => {
                setProduct(res['data']);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getCategory();
        getProduct();
    }, [])

    return (
        <React.Fragment>
            <div className='container'>
                <div className="text-center text-success">
                    <h1 style={{ fontSize: "50px" }}>Shop</h1>
                </div>
                <div className='fluid mx-2'>
                    <div className='row mt-5 mx-2'>
                        <div className="col-sm-3">
                            {category.map((categories) => {
                                return (
                                    <React.Fragment>
                                        <button className="btn btn-warning w-100 mt-2 mb-2" onClick={() => { filterCategory(categories.id) }}>{categories.name}</button>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                {filtered_product.length != 0 ? (
                                    
                                        filtered_product.map((products) => {
                                            return (
                                                <div className="col-md-6" key={products.id}>
                                                    <div class="card" style={{ width: "18rem", objectFit: "contain", margin: "0 45px 35px" }}>
                                                        <img src={products.image} style={{ width: "100%", height: "300px" }} class="card-img-top" alt="..." />
                                                        <div class="card-body">
                                                            <h5 class="card-title">{products.name}</h5>
                                                            <p>Price: ₹{products.price}/-</p>
                                                            <p class="card-text">{products.description}</p>
                                                            <button className="btn btn-dark">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    
                                ):(
                                    product.map((products) => {
                                        return (
                                            <div className="col-md-6" key={products.id}>
                                                <div class="card" style={{ width: "18rem", objectFit: "contain", margin: "0 45px 35px" }}>
                                                    <img src={products.image} style={{ width: "100%", height: "300px" }} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{products.name}</h5>
                                                        <p>Price: ₹{products.price}/-</p>
                                                        <p class="card-text">{products.description}</p>
                                                        <button className="btn btn-dark">Add to Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )
}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Shop;