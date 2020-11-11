import React, { useState, useEffect } from 'react';
import './App.css';

import Searcher from './components/Searcher'
import PokemonView from './components/PokemonView';
// import { readPokemon } from './modules/ApiReader'

function App() {

  const [searched, setSearched] = useState([]);
  const [pokemons, setPokemons] = useState([]);



  // useEffect(() => {
  //   readPokemon()
  // }, [])
  

  return (
    <div className="App">
      <Searcher test={setSearched}/>
      <PokemonView pokeUrl={searched.url} pokeName={searched.name}/>
    </div>
  );
}

export default App;
