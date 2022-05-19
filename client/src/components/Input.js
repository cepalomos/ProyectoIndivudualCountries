import React from "react";
import "../css/Input.css";

export default function Input() {
  return (
    <div className="input_contenedor">
      <input type="text" className="input_input"></input>
      <button className="input_boton">Buscar</button>
    </div>
  );
}
