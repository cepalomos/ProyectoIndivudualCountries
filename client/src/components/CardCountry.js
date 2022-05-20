import React from "react";
import "../css/CardCountry.css";

export default function CardCountry({ nombre, imagen, continente }) {
  return (
    <figure className="card_contenedor">
      <img src={imagen} alt={nombre} className="card_imagen" />
      <figcaption className="card_contenedorLeyenda">
        <h3 className="card_contenedorLeyenda_titulo">{nombre}</h3>
        <h3 className="card_contenedorLeyenda_titulo">{continente}</h3>
      </figcaption>
    </figure>
  );
}
