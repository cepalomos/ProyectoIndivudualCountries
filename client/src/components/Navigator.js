import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Filter from "./Filter";
import Input from "./Input";
import "../css/Navigator.css";
import Order from "./Order";
import { useDispatch, useSelector } from "react-redux";
import {countriesOrder} from "../redux/actions";

export default function Navigator() {
  const { countries } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [continente,setContinente] = useState([]);
  const [actividad,setActividad] = useState([]);
  useEffect(()=>{
    let continente = new Set(countries.map(({continente})=> continente))
    continente = Array.from(continente);
    setContinente(continente);
    let actividad = new Set(countries.map(({activities})=>{if(activities.length)return activities}).flat());
    actividad = Array.from(actividad);
    setActividad(actividad);
  },[countries])
  function order(opcion){
    dispatch(countriesOrder(opcion));
  }
  return (
    <>
      <nav className="navigator_contenedor">
        <Link to="/create" className="navigator_link">
          <button className="navigator_buttonCreate">Crear Actividad</button>
        </Link>

        <div className="navigator_selectores">
          <Order funcion={order}/>
          <Filter opcionContinente={continente}/>
        </div>
        <Input />
      </nav>
      <Outlet />
    </>
  );
}
