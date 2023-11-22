/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./detail-page.scss";

export default function PokemonDetailsPage() {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    if (name) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          setPokemonData(res.data);
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Pokemon not found",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  }, [name]);

  console.log(name);

  if (!name) {
    return <p>ID de Pokémon no encontrado.</p>;
  }

  if (!pokemonData) {
    return <p>Cargando...</p>;
  }

  return (
    <span className="poke-details">
      <span className="poke-list">
        <img
          src={pokemonData.sprites.front_default}
          alt="Pokemon-image"
          className="poke-image"
        />
        <p className="poke-name">{pokemonData.name}</p>
        <span className="poke-data">
          <span>
            <p>KG: {pokemonData.weight}</p>
            <p>HP: {pokemonData.stats[0].base_stat}</p>
            <p>ATK: {pokemonData.stats[1].base_stat}</p>
            <p>DFS: {pokemonData.stats[2].base_stat}</p>
          </span>
          <span>
            <p>SATK: {pokemonData.stats[3].base_stat}</p>
            <p>SDFS: {pokemonData.stats[4].base_stat}</p>
            <p>SPD: {pokemonData.stats[5].base_stat}</p>
            <p>TYPES:</p>
            <p className="poke-type">
              {pokemonData.types[0].type.name}{" "}
              {pokemonData.types[1] && <p>{pokemonData.types[1].type.name} </p>}
            </p>
          </span>
        </span>
      </span>
    </span>
  );
}
