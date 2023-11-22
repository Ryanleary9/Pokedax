/* eslint-disable jsx-a11y/img-redundant-alt */
import "./detail.scss";

export default function PokemonDetails({ pokemon }) {
  return (
    <span className="poke-list">
      <img
        src={pokemon.sprites.front_default}
        alt="Pokemon-image"
        className="poke-image"
      />
      <p className="poke-name">{pokemon.name}</p>
      <span className="poke-data">
        <span>
          <p>KG: {pokemon.weight}</p>
          <p>HP: {pokemon.stats[0].base_stat}</p>
          <p>ATK: {pokemon.stats[1].base_stat}</p>
          <p>DFS: {pokemon.stats[2].base_stat}</p>
        </span>
        <span>
          <p>SATK: {pokemon.stats[3].base_stat}</p>
          <p>SDFS: {pokemon.stats[4].base_stat}</p>
          <p>SPD: {pokemon.stats[5].base_stat}</p>
          <p>TYPES:</p>
          <p className="poke-type">
            {pokemon.types[0].type.name}{" "}
            {pokemon.types[1] && <p>{pokemon.types[1].type.name} </p>}
          </p>
        </span>
      </span>
    </span>
  );
}
