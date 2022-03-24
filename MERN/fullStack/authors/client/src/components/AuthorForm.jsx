import React, { useState } from "react";
import axios from 'axios';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";



const AuthorForm = (props) => {
    let [name, setName] = useState("");

    let [formErrors, setFormErrors] = useState({});

    const history = useHistory();

    const createAuthor = (e) => {
        e.preventDefault();
        let formInfo = { name }

        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(res => {
                console.log(res);
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
            <form onSubmit={createAuthor}>
                <div className='form-group'>
                    <label htmlFor="">Name:</label>
                    <input type="text" name="" id="" className='form-control' onChange={(e) => { setName(e.target.value) }} value={name} />
                    <p className='text-danger'>{formErrors.name?.message}</p>
                </div>
                <input type="submit" value="Create Author" />
            </form>
            <Link to='/' className='btn btn-secondary'>Cancel</Link>
        </div>
    )
}



export default AuthorForm;