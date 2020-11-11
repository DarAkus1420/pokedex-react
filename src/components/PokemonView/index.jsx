import React from 'react'

const PokemonView = (props) => {
  
  return (
    <div>
      <h2>{props.pokeName}</h2>
      <img src={props.pokeUrl} alt="" height="400" width="400"/>
    </div>
  )
}

export default PokemonView;