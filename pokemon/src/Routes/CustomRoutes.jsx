import {Route, Routes } from 'react-router-dom'
import Pokedex from '../components/Pokedex/Pokedex';
import PokemonDetails from '../components/PokemonDetails/pokemonDetails';


function CustomRoutes() {


    return(
       <Routes>
          <Route path='/' element={<Pokedex />} />
          <Route path='/Pokemon/:id' element={<PokemonDetails />} />
          
       </Routes>
    );
}

export default CustomRoutes;