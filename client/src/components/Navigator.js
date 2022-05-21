import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Filter from "./Filter";
import Input from "./Input";
import "../css/Navigator.css";
import Order from "./Order";
import { useDispatch, useSelector } from "react-redux";
import {countriesOrder,countriesContinente,countriesActividad} from "../redux/actions";

export default function Navigator() {
  const { countriesFilter,countries } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [continente,setContinente] = useState([]);
  const [actividad,setActividad] = useState([{id:1,name:"no hay opciones"}]);
  useEffect(()=>{
    let continente = new Set(countries.map(({continente})=> continente));
    continente = Array.from(continente).map((dato)=>({id:dato,name:dato}));
    setContinente(continente);
    let actividad = new Set(countries.map(({activities})=>activities.lenght !==0?activities:false).flat().filter(obj=>obj).map(({nombre})=>nombre));
    actividad = Array.from(actividad).map(acti=>({id:acti,name:acti}));
    setActividad(actividad);
  },[countriesFilter])
  function order(opcion){
    dispatch(countriesOrder(opcion));
  }
  function filterContinente(opcion){
    dispatch(countriesContinente(opcion))
  }
  function filterActividad(opcion){
    dispatch(countriesActividad(opcion));
  }
  return (
    <>
      <nav className="navigator_contenedor">
        <Link to="/create" className="navigator_link">
          <button className="navigator_buttonCreate">Crear Actividad</button>
        </Link>

        <div className="navigator_selectores">
          <Order funcion={order}/>
          <Filter opcionContinente={continente} funcionContinente={filterContinente} funcionActividad={filterActividad} opcionActividad={actividad}/>
        </div>
        <Input />
      </nav>
      <Outlet />
    </>
  );
}
