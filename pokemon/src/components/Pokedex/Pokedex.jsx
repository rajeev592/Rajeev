import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/search";
import './pokedex.css'
import PokemonDetails from "../PokemonDetails/pokemonDetails";


function Pokedex() {
const [searchTerm, setSearchTerm] = useState('')
    return(
        <div className="pokedex-wrapper">
            
            <Search updateSearchTerm = {setSearchTerm}/>
            {searchTerm ? <PokemonDetails pokemonName={searchTerm} /> : <PokemonList />}
        </div>
      
    )
}
export default Pokedex;