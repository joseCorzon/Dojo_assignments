import React, {useState} from 'react';
import {useHistory} from "react-router-dom"

const StarWars = () => {
    let [word, setWord] = useState("");
    let [id, setId] = useState(null);

    const history = useHistory();

const searchHandler = (e)=>{
    e.preventDefault();
    history.push(`/${word}/${id}`)
}


    return (
        <div>
            <form onSubmit={searchHandler}>
                <div className="form-group">
                    <label htmlFor="">Search For: </label>
                    <select name="" id="" className="form-control" onChange={(e)=>setWord(e.target.value)}>
                        <option value="films">Films</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                    </select>
                    <label htmlFor="">ID: </label>
                    <input type="number" name="" id=""  onChange={(e)=>setId(e.target.value)} />
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default StarWars;