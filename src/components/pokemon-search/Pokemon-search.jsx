/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import "./Pokemon-search.scss";
import Swal from "sweetalert2";
import PokemonCard from "../detail/detail";

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState(null);

  const handleSearch = (ev) => {
    ev.preventDefault();

    const formData = ev.currentTarget;
    const name = formData.querySelector("input")?.value;

    if (!name) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please enter a valid name",
        showConfirmButton: false,
        timer: 1500,
      });

      return;
    }

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        if (res.data && res.data.sprites && res.data.sprites.front_default) {
          setPokemon(res.data);
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Invalid response format",
            showConfirmButton: false,
            timer: 1500,
          });
        }
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

    formData.reset();
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch} className="search-inputs">
        <input type="text" className="poke-name" placeholder="Pokemon Name" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}
