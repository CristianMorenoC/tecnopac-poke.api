import React, {useState, useEffect} from 'react'
import PokeItem from './PokeItem';

const ListPokemon = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        
        const pokemons = async() => {
            const allPokemons = await fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()).catch(err=> console.log(err))
            setPokemons(allPokemons.results)
        }
        pokemons()
    }, []);

  return (

    <ul>
        {
            pokemons.map(pokemon => {
                return (
                    <PokeItem name={pokemon.name} url={pokemon.url}></PokeItem>
                )
            })
        }
    </ul>
  )
}

export default ListPokemon