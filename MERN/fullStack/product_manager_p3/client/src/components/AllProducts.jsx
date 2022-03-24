import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllProducts = (props) => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data.results)
                setProductList(res.data.results)
            })
            .catch(err => {
                console.log('errorrr', err)
            })
    }, [props.formSubmitted])

    const deleteProduct = (idOfProduct) => {
        axios.delete(`http://localhost:8000/api/products/${idOfProduct}`)
            .then(res => {
                console.log(res)
                let filteredList = productList.filter((productObj) => {
                    return productObj._id != idOfProduct
                })
                setProductList(filteredList)
            })
            .catch(err => {
                console.log(err)
            })

    }




    return (
        <div>
            <h2>all products</h2>
            {
                productList.map((productObj) => {
                    return (
                        <div className='card text-white bg-dark mb-3' key={productObj._id}>
                            <h4 className='card-title'>Title: <Link to={`/details/${productObj._id}`}>{productObj.title}</Link></h4>
                            <p>Price: ${productObj.price}</p>
                            <p>Description: {productObj.description}</p>
                            <Link to={`/edit/${productObj._id}`} className='btn btn-secondary'>Edit {productObj.title}</Link>
                            <button onClick={() => { deleteProduct(productObj._id) }} className='btn btn-danger'>Delete</button>

                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllProducts