import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";


const AllAuthors = (props) => {
    const [AuthorList, setAuthorList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data.results)
                setAuthorList(res.data.results)
            })
            .catch(err => {
                console.log('errorrr', err)
            })
    }, [props.formSubmitted])

    const deleteAuthor = (idOfAuthor) => {
        axios.delete(`http://localhost:8000/api/authors/${idOfAuthor}`)
            .then(res => {
                console.log(res)
                let filteredList = AuthorList.filter((AuthorObj) => {
                    return AuthorObj._id != idOfAuthor
                })
                setAuthorList(filteredList)
            })
            .catch(err => {
                console.log(err)
            })

    }



    return (
        <div>
            <h2>Favorite Authors</h2>
            <Link to='/create/:_id' className='btn btn-info'>Create New Author</Link>
            {
                AuthorList.map((authorObj) => {
                    return (

                        <div key={authorObj._id}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Author</th>
                                        <th>Actions Available</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{authorObj.name}</td>
                                        <td><Link to={`/edit/${authorObj._id}`} className='btn btn-secondary'>Edit</Link>
                                            <button onClick={() => { deleteAuthor(authorObj._id) }} className='btn btn-danger'>Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            



                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllAuthors