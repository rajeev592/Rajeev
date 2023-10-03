/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";


function usePokemonList() {
      
    const [ PokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
        nextUrl: '' ,
        prevUrl: ''
    })
     
    async function downloadpokemons() {
        
        setPokemonListState({ ...PokemonListState, isLoading:true})
        const response = await axios.get(PokemonListState.pokedexUrl); //this downloads list of 20 pokemons

        const pokemonResults = response.data.results;  //we get the array of pokemons form result

        console.log(response.data);

        setPokemonListState((state) => ({
            ...state,
             nextUrl: response.data.next, 
             prevUrl: response.data.previous
            }));
        
          

        // iterating over the array of pokemons, and using their url, to create an array of promises
        // that will doenload those 20 pokemon

        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url))
      

        

        // passing that promises array to axiox.all
        const pokemonData = await axios.all(pokemonResultPromise);  // array of 20 pokemon detalis data
        console.log(pokemonData);

        // now iterate on the data of each pokemon, and extrate id, name, types, images
        const pokeListResult = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data
            return {
                 id: pokemon.id,
                 name: pokemon.name,
                 image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default: pokemon.sprites.front_shiny,
                types: pokemon.types
            }
        })
        console.log(pokeListResult);
        setPokemonListState((state) => ({
            ...state,
            pokemonList: pokeListResult,
              isLoading:false
            }));
        
    }

    useEffect(() => {
        downloadpokemons();
   
           
       },[PokemonListState.pokedexUrl]);

    return{PokemonListState, setPokemonListState}
}

export default usePokemonList;