const BASE_API_URL = "https://pokeapi.co/api/v2/"
const POKEMONS_TYPES_URL = BASE_API_URL + "type/"
const POKEMONS_URL = BASE_API_URL + "pokemon/"

export const readTypes = () => {
  return fetch(POKEMONS_TYPES_URL)
  .then(response => {return response.json()})
  .then(response => {
    const typesArray = response["results"].map( (types) => {
      return types.name
    });
    return typesArray;
  })
}

const capitalize = (pokemonName) => {
  if (typeof pokemonName !== 'string') return ''
  return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
}


const getImgUrl = (json) => {
  console.log(json)
  return json["sprites"]["front_default"]
}

export const readPokemon = (pokemon) => {
  return fetch(POKEMONS_URL + pokemon)
  .then(response => {return response.json()})
  .then(response => {
    return {name: capitalize(pokemon), url: getImgUrl(response)};
  })
}
