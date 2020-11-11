import React, { useState, useEffect } from "react";
import { readTypes, readPokemon } from "../../modules/ApiReader";

const Searcher = (props) => {
  const [types, setTypes] = useState([]);
  const [search, setSearch] = useState("");

  const searchPokemon = (pokemon) =>{
    pokemon = pokemon.toLowerCase();
    readPokemon(pokemon).then(response => props.test(response));
  }

  const mapTypes = (types) => {
    return types.map((type, index) => {
      return (
        <option value={index} key={index}>
          {type}
        </option>
      );
    })
  }

  // OnMount Component
  useEffect(() => {
    readTypes().then(response => setTypes(response));
  }, []);

  // 


  return (
    <div>
      <label htmlFor="">
        Pokemon:
        <input
          type="text"
          value={search}
          onChange={value => setSearch(value.target.value)}
        />
      </label>

      <select name="type" id="pokemonType">
        {mapTypes(types)}
      </select><br/>
      <button onClick={() => searchPokemon(search)}>Search</button>
    </div>
  );
};

export default Searcher;
