import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { peticionCountries } from "../redux/actions";
import Loading from "./Loading";
import CardCountry from "./CardCountry";

export default function Home() {
  const { loading, countries, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(peticionCountries("http://localhost:3001/countries"));
  }, []);
  return (
    <main className="home_main">
      {loading && <Loading />}
      {!loading && error.length === 0 && countries.length !== 0 && (
        <ul className="home_list">
          {countries.map(({ id, nombre, imagen, continente }) => (
            <li key={id}>
              <CardCountry
                nombre={nombre}
                imagen={imagen}
                continente={continente}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
