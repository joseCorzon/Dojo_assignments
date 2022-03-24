import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const OneProduct = () => {

    const { _id } = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res)
                setInfo(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res)
                history.push('/');
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <h3>Details about {info.title}</h3>
            <p>Price: {info.price}</p>
            <p>Description: {info.description}</p>
            <button onClick={deleteProduct} className='btn btn-danger'>Delete {info.title}</button>
        </div>
    );
};







export default OneProduct;