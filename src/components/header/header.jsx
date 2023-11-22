/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import "./header.scss";
import img from "../../sources/pokeball.png";

export function Header() {
  return (
    <span className="navbar">
      <Link to={"/"}>
        <img src={img} alt="Pokeball image" className="navbar-image" />
      </Link>

      <ul className="navbar-menu">
        <li>
          <Link to={"/"} className="navbar-menu-options">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/search"} className="navbar-menu-options">
            Search
          </Link>
        </li>
      </ul>
    </span>
  );
}
