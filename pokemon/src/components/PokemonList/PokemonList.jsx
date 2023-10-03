 import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../Hookes/usePokemonList";
import { useEffect } from 'react';

function PokemonList() {
    
    const {PokemonListState, setPokemonListState} = usePokemonList(false);

    useEffect(() => {
        console.log("render");
    })

    return(
        <div className="pokemon-List-wrapper">
            <h3>Pokemon List</h3>
            <div className="pokemon-wrapper">
            {(PokemonListState.isLoading) ? 'loading...': 
             PokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)
            }
            </div>

            <div className="controls">
                <button disabled={PokemonListState.prevUrl == null} onClick= {() =>{
                    const urlToSet = PokemonListState.prevUrl;
                    setPokemonListState({ ...PokemonListState, pokedexUrl:urlToSet})}} >Prev</button>

                <button disabled={PokemonListState.nextUrl == null} onClick={() =>{
                    const urlToSet = PokemonListState.nextUrl;
                    setPokemonListState({ ...PokemonListState, pokedexUrl: urlToSet})}}>Next</button>
            </div>
            </div>
    )

}
export default PokemonList;