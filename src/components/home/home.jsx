import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Card } from "../card/card";
import "./home.scss";

export default function HomePage() {
  const [pokemons, setPokemons] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${
          (currentPage - 1) * 20
        }&limit=20`
      )
      .then((res) => {
        setPokemons(res.data);
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
  }, [currentPage]);

  useEffect(() => {
    if (pokemons && pokemons.results) {
      const promises = pokemons.results.map((pokemon) => {
        return axios.get(pokemon.url);
      });

      Promise.all(promises)
        .then((responses) => {
          const data = responses.map((res) => res.data);
          setPokemonData(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [pokemons]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <span className="homepage">
      <div className="pokemon-list">
        {pokemonData.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>

      <div className="buttons">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="buttons-style"
        >
          Prev
        </button>
        <button onClick={handleNextPage} className="buttons-style">
          Next
        </button>
      </div>
    </span>
  );
}
