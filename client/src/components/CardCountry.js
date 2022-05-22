import React from "react";
import "../css/CardCountry.css";
import { Link } from "react-router-dom";

export default function CardCountry({ nombre, imagen, continente, id }) {
  return (
    <Link to={`/country/${id}`} className="card_link">
      <figure className="card_contenedor">
        <img src={imagen} alt={nombre} className="card_imagen" />
        <figcaption className="card_contenedorLeyenda">
          <h3 className="card_contenedorLeyenda_titulo">{nombre}</h3>
          <h3 className="card_contenedorLeyenda_titulo">{continente}</h3>
        </figcaption>
      </figure>
    </Link>
  );
}
