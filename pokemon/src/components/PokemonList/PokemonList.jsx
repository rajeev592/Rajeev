import { useEffect, useState } from "react";

import axios from 'axios';
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [pokedexUrl, setpokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');

    async function downloadpokemons() {
        setIsLoading(true);
        const response = await axios.get(pokedexUrl); //this downloads list of 20 pokemons

        const pokemonResults = response.data.results;  //we get the array of pokemons form result

        console.log(response.data);

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
          

        // iterating over the array of pokemons, and using their url, to create an array of promises
        // that will doenload those 20 pokemon

        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url))
      

        // console.log(pokemonResultPromise.data);

        // passing that promises array to axiox.all
        const pokemonData = await axios.all(pokemonResultPromise);  // array of 20 pokemon detalis data
        console.log(pokemonData);

        // now iterate on the data of each pokemon, and extrate id, name, types, images
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data
            return {
                 id: pokemon.id,
                 name: pokemon.name,
                 image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default: pokemon.sprites.front_shiny,
                types: pokemon.types
            }
        })
        console.log(res);
        setPokemonList(res)
        setIsLoading(false)
    }

    useEffect(() => {
     downloadpokemons();

        
    },[pokedexUrl]);

    return(
        <div className="pokemon-List-wrapper">
            <h3>Pokemon List</h3>
            <div className="pokemon-wrapper">
            {(isLoading) ? 'loading...': 
             pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)
            }
            </div>

            <div className="controls">
                <button disabled={prevUrl == null} onClick= {() => setpokedexUrl (prevUrl)} >Prev</button>
                <button disabled={nextUrl == null} onClick={() => setpokedexUrl (nextUrl)}>Next</button>
            </div>
            </div>
    )

}
export default PokemonList;