import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";


const EditAuthorForm = (props) => {
    let [name, setName] = useState("");
    const [authorInfo, setAuthorInfo] = useState({});

    let [formErrors, setFormErrors] = useState({});

    const { _id } = useParams();

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log(res);
                setAuthorInfo(res.data.results)

            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    const changeHandler = (e) => {
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }




    const updateAuthor = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
            .then(res => {
                console.log(res)
                if (res.data.error) {
                    setFormErrors(res.data.error.errors);
                } else {
                    history.push('/')


                    setName("");
                }
            })
            .catch(err => {
                console.log(err)
            })

    }





    return (
        <div>
            <p>edit {authorInfo.name}</p>
            <Link to='/' className='btn btn-primary'>Home Page</Link>
            <form onSubmit={updateAuthor}>
                <div className='form-group'>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" id="" className='form-control' onChange={changeHandler} value={authorInfo.name} />

                </div>
                <p className='text-danger'>{formErrors.name?.message}</p>
                
                <input type="submit" value="Edit Author" />
            </form>
            <Link to='/' className='btn btn-secondary'>Cancel</Link>
        </div>
    )
}






export default EditAuthorForm;