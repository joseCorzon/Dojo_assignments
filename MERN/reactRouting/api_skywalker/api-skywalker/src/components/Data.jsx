import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Data = ()=>{
    let [dataList, setDataList] = useState([])

    const {word, id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${word}/${id}`)
            
            .then((response)=>{
                console.log(response.data)
                setDataList(response.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[id, word])




    return (
        <>
        <p>starwars api data</p>
        <h1>{dataList.name}</h1>
        <h1>{dataList.birth_year}</h1>
        <h1>{dataList.eye_color}</h1>
        <h1>{dataList.height}</h1>
        <h1>{dataList.climate}</h1>
        <h1>{dataList.gravity}</h1>
        <h1>{dataList.population}</h1>
        <h1>{dataList.title}</h1>
        <h1>{dataList.director}</h1>
        <h1>{dataList.producer}</h1>
        <h1>{dataList.classification}</h1>
        <h1>{dataList.language}</h1>
        <h1>{dataList.cost_in_credits}</h1>
        <h1>{dataList.manufacturer}</h1>
        <h1>{dataList.passengers}</h1>
        <h1>{dataList.url}</h1>
        {/* {
            dataList.map((dataObj,i)=>{
                return <div className=''>
                    <h4>{dataObj.name}</h4>
                </div>
            })
        } */}
        </>
    )
}

export default Data;