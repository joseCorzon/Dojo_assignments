import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = ()=>{
    let [pokemonList, setPokemonList] = useState([])

    const getPokemon = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
            
            .then((response)=>{
                console.log(response)
                setPokemonList(response.data.results)
            })
            .catch((err)=>{
                console.log(err)
            })
    }




    return (
        <>
        <button onClick = {getPokemon}>Generate All Pokemon</button>
        <p>pokemon api</p>
        {
            pokemonList.map((pokemonObj,i)=>{
                return <div className=''>
                    <h4>{pokemonObj.name}</h4>
                </div>
            })
        }
        </>
    )
}

export default Pokemon;