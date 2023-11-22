/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import "./card.scss";

export function Card({ pokemon }) {
  return (
    <div className="card">
      <Link to={`/detail/${pokemon.name}`}>
        <div className="card-container">
          <img
            src={pokemon.sprites.front_default}
            alt="Pokemon Image"
            className="card-image"
          />
        </div>
      </Link>
      <p className="card-name">{pokemon.name}</p>
    </div>
  );
}
