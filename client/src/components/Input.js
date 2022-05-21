import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/Input.css";
import {peticionCountries} from "../redux/actions";

export default function Input() {
  const [pais,setPais] = useState("");
  const dispatch = useDispatch();
  function buscarPais(e,nombre){
    e.preventDefault();
    if(nombre.length) dispatch(peticionCountries(`http://localhost:3001/countries?name=${nombre}`));
  }
  return (
    <div className="input_contenedor">
      <input type="text" className="input_input" placeholder="Ingrese el nombre del pais a buscar o iniciales" onChange={({target:{value}})=>setPais(value)} value={pais}></input>
      <button className="input_boton" onClick={(e)=>buscarPais(e,pais)}>Buscar</button>
    </div>
  );
}
