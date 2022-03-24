import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";


const EditProductForm = (props) => {

    let [productInfo, setProductInfo] = useState({});

    let { _id } = useParams();

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res);
                setProductInfo(res.data.results)

            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    const changeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }




    const updateProduct = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${_id}`, productInfo)
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })

    }





    return (
        <div>
            <p>edit {_id}</p>
            <form onSubmit={updateProduct}>
                <div className='form-group'>
                    <label htmlFor="">Title:</label>
                    <input type="text" name="title" id="" className='form-control' onChange={changeHandler} value={productInfo.title} />

                </div>
                <div className='form-group'>
                    <label htmlFor="">Price:</label>
                    <input type="number" name="price" id="" className='form-control' onChange={changeHandler} value={productInfo.price} />

                </div>
                <div className='form-group'>
                    <label htmlFor="">Description: </label>
                    <input type="text" name="description" id="" className='form-control' onChange={changeHandler} value={productInfo.description} />

                </div>
                <input type="submit" value="Edit Product" />
            </form>
        </div>
    )
}






export default EditProductForm;